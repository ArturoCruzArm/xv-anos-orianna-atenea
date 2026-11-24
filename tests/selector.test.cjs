const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.join(__dirname,'..');
const code=fs.readFileSync(path.join(root,'js/selector.js'),'utf8');
function setup(modo){
  const cards=[], requests=[];
  const grid={innerHTML:'',appendChild(card){cards.push(card);}};
  const context={console,localStorage:{getItem(){return null;},setItem(){}},crypto:{randomUUID(){return 'test';}},
    window:{addEventListener(){}},navigator:{},document:{readyState:'loading',addEventListener(){},
      getElementById(id){return id==='photosGrid'?grid:null;},querySelectorAll(){return [];},
      createElement(){return {dataset:{},classList:{add(){},toggle(){}},addEventListener(){}};}},
    fetch:async(url,options)=>{requests.push({url,options});return {ok:true};}};
  if(modo==='todas'){
    vm.createContext(context);
    vm.runInContext(fs.readFileSync(path.join(root,'js/fotos-todas.js'),'utf8'),context);
    context.window.SELECTOR_MODO='todas';
    vm.runInContext(code,context);
  } else if(modo==='cliente+todas'){
    vm.createContext(context);
    vm.runInContext(fs.readFileSync(path.join(root,'js/fotos-todas.js'),'utf8'),context);
    vm.runInContext(code,context);
  } else { vm.createContext(context);vm.runInContext(code,context); }
  return {run:s=>vm.runInContext(s,context),cards,requests};
}
test('Only the 597 delivered photos (94 sesión + 503 fiesta) render, with their matching thumbnails',()=>{
  const {run,cards}=setup();run('renderGallery()');assert.equal(cards.length,597);
  assert.equal(cards[0].dataset.index,10);
  assert.match(cards[0].innerHTML,/Foto 1 · IMG_0538/);
  assert.match(cards[0].innerHTML,/imagenes\/cliente\/thumb\/IMG_0538.webp/);
  const catalog=JSON.parse(run('JSON.stringify(photoCatalog)'));
  assert.deepEqual(catalog,JSON.parse(fs.readFileSync(path.join(root,'js/fotos-cliente.json'))));
  assert.equal(new Set(catalog.map(p=>p.index)).size,597);
  assert.equal(catalog.filter(p=>/IMG_[78]\d{3}\.webp$/.test(p.file)).length,503);
  assert.ok(catalog.slice(94).every(p=>p.index>=261));
  const fiesta=catalog.slice(94).map(p=>p.file);assert.deepEqual(fiesta,[...fiesta].sort());
  for(const photo of catalog){
    assert.ok(fs.existsSync(path.join(root,photo.file)));
    assert.ok(fs.existsSync(path.join(root,photo.file.replace(/([^/]+)$/,'thumb/$1'))));
  }
  assert.equal(catalog.filter(p=>p.file.includes('_IA_luz')).length,3);
});
test('Original selection identifiers remain attached to the same photo, including AI replacements',()=>{
  const {run}=setup();
  assert.match(run('photos[10]'),/IMG_0538/);
  assert.match(run('photos[69]'),/IMG_0597_IA_luz/);
  assert.match(run('photos[162]'),/IMG_0697_IA_luz/);
  assert.match(run('photos[235]'),/IMG_0770_IA_luz/);
  assert.equal(run('photos[0]'),undefined);
});
test('Hidden old selections do not inflate counts or leak into the client report',()=>{
  const {run}=setup();
  run('photoSelections={0:{impresion:true},10:{impresion:true},11:{invitacion:true},69:{invitacion:true},162:{}}');
  assert.deepEqual(JSON.parse(run('JSON.stringify(getStats())')),{impresion:1,invitacion:1,descartada:0,sinClasificar:595});
  const report=run('generateTextSummary(true)');
  assert.match(report,/Total de fotos disponibles: 597/);
  assert.match(report,/IMG_0538/);assert.match(report,/IMG_0597_IA_luz/);
  assert.doesNotMatch(report,/IMG_0528|IMG_0539/);
  assert.equal(run('photoSelections[0].impresion'),true);
});
test('Viewer navigation skips removed frames and wraps across the selected set',()=>{
  const {run}=setup();
  run('saveCurrentSelections=()=>{}; let visited=null; openModal=i=>{visited=i;}; currentPhotoIndex=10; navigatePhoto("next")');
  assert.equal(run('visited'),12);
  run('currentPhotoIndex=260; navigatePhoto("next")');assert.equal(run('visited'),261);
  run('currentPhotoIndex=686; navigatePhoto("next")');assert.equal(run('visited'),10);
  run('currentPhotoIndex=10; navigatePhoto("prev")');assert.equal(run('visited'),686);
});
test('Saving a replacement keeps the old cloud identifier without deleting hidden choices',async()=>{
  const {run,requests}=setup();
  await run('eventoIdCache="test-event"; photoSelections={0:{impresion:true},69:{invitacion:true}}; sbSyncSelections()');
  const rows=JSON.parse(requests[0].options.body);
  assert.deepEqual(rows.map(r=>r.foto_index),[0,69]);
  assert.equal(rows[1].invitacion,true);
});

test('todas.html shows all 1,327 photos from imagenes/ with thumbnails',()=>{
  const {run,cards}=setup('todas');run('renderGallery()');assert.equal(cards.length,1327);
  assert.match(cards[0].innerHTML,/imagenes\/thumb\/IMG_0528.webp/);
  const todas=JSON.parse(fs.readFileSync(path.join(root,'js/fotos-todas.json')));
  assert.equal(new Set(todas.map(p=>p.index)).size,1327);
  for(const photo of todas){
    assert.ok(fs.existsSync(path.join(root,photo.file)),photo.file);
    assert.ok(fs.existsSync(path.join(root,photo.file.replace(/([^/]+)$/,'thumb/$1'))),photo.file);
  }
});
test('Same photo number shares the selection index between both selectors',()=>{
  const cliente=JSON.parse(fs.readFileSync(path.join(root,'js/fotos-cliente.json')));
  const todas=JSON.parse(fs.readFileSync(path.join(root,'js/fotos-todas.json')));
  const num=f=>f.match(/IMG_(\d+)/)[1];
  const byNum=new Map(todas.map(p=>[num(p.file),p.index]));
  for(const c of cliente) assert.equal(byNum.get(num(c.file)),c.index,c.file);
  assert.equal(todas.filter(p=>p.index<10000).length,597);
  const {run}=setup('todas');
  assert.match(run('photos[69]'),/imagenes\/IMG_0597.webp/);
  assert.match(run('photos[10528]'),/imagenes\/IMG_0528.webp/);
});
test('The 200 print limit counts marks made in both selectors together',()=>{
  for(const modo of ['cliente+todas','todas']){
    const {run}=setup(modo);
    run('photoSelections={10:{impresion:true},10528:{impresion:true},17304:{impresion:true}}');
    assert.equal(JSON.parse(run('JSON.stringify(getStats())')).impresion,3,modo);
    const report=run('generateTextSummary(true)');
    assert.match(report,/IMG_0528 \(de todas\)/);assert.match(report,/IMG_0538\b/);
  }
});
