const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8');
function setup(reject=false){
 const attrs={};const listeners={};const btn={classList:{toggle(){}},setAttribute(k,v){attrs[k]=v;}};
 const icon={};const audio={paused:true,ended:false,addEventListener(k,v){listeners[k]=v;},play(){if(reject)return Promise.reject(Error('blocked'));this.paused=false;listeners.play();return Promise.resolve();},pause(){this.paused=true;listeners.pause();}};
 const c={document:{getElementById(id){return {'music-btn':btn,'music-icon':icon,'invitation-audio':audio}[id]||{};}}};vm.createContext(c);
 const script=html.slice(html.indexOf("    const screen   ="),html.indexOf('    function openEnvelope()'));
 vm.runInContext(script,c);return {c,audio,attrs,listeners,icon};
}
test('Music starts on request and pause matches the actual media state',async()=>{const {c,audio,attrs}=setup();vm.runInContext('playMusic()',c);await Promise.resolve();assert.equal(audio.paused,false);assert.equal(attrs['aria-pressed'],'true');vm.runInContext('pauseMusic()',c);assert.equal(audio.paused,true);assert.equal(attrs['aria-pressed'],'false');});
test('Blocked playback never claims music is playing',async()=>{const {c,attrs}=setup(true);vm.runInContext('playMusic()',c);await new Promise(setImmediate);assert.equal(attrs['aria-pressed'],'false');assert.match(attrs['aria-label'],/Reproducir/);});
test('Audio error offers a retry',()=>{const {listeners,attrs}=setup();listeners.error();assert.equal(attrs['aria-pressed'],'false');assert.match(attrs['aria-label'],/reintentar/);});
test('Invitation uses local custom song and retains reception at 8:30',()=>{assert.match(html,/audio\/mis-quince-mi-historia\.mp3/);assert.match(html,/recepcion-hora">8:30 PM/);assert.doesNotMatch(html,/youtube|YT\.Player/);});

test('Custom song exists as a nonempty MP3',()=>{assert.ok(fs.statSync(path.join(__dirname,'../audio/mis-quince-mi-historia.mp3')).size>100000);});
