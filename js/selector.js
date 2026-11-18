// ========================================
// SUPABASE CONFIG - XV Años Orianna Atenea
// ========================================
const SUPABASE_URL     = 'https://nzpujmlienzfetqcgsxz.supabase.co';
const SUPABASE_ANON    = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56cHVqbWxpZW56ZmV0cWNnc3h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2ODYzMzYsImV4cCI6MjA5MDI2MjMzNn0.xl3lsb-KYj5tVLKTnzpbsdEGoV9ySnswH4eyRuyEH1s';
const EVENTO_SLUG      = 'xv-anos-orianna-atenea';
const SB_HEADERS       = { 'apikey': SUPABASE_ANON, 'Authorization': `Bearer ${SUPABASE_ANON}`, 'Content-Type': 'application/json' };

function getSessionId() {
    const KEY = 'foro7_sid';
    let sid = localStorage.getItem(KEY);
    if (!sid) { sid = crypto.randomUUID(); localStorage.setItem(KEY, sid); }
    return sid;
}
const SESSION_ID = getSessionId();
let eventoIdCache = null;
let sbDisponible  = true;

async function sbGetEventoId() {
    if (eventoIdCache) return eventoIdCache;
    const r = await fetch(`${SUPABASE_URL}/rest/v1/eventos?slug=eq.${EVENTO_SLUG}&select=id&limit=1`, { headers: SB_HEADERS });
    const [ev] = await r.json();
    eventoIdCache = ev?.id || null;
    return eventoIdCache;
}

async function sbRegistrarVisita(pagina = 'selector') {
    try {
        const evento_id = await sbGetEventoId();
        if (!evento_id) return;
        await fetch(`${SUPABASE_URL}/rest/v1/visitas`, {
            method: 'POST',
            headers: { ...SB_HEADERS, 'Prefer': 'return=minimal' },
            body: JSON.stringify({ evento_id, pagina, session_id: SESSION_ID })
        });
    } catch(e) {}
}

// ========================================
// GLOBAL VARIABLES - XV Años Orianna Atenea
// ========================================
// Sesión fotográfica previa del 7 de noviembre de 2026 (261 fotos).
// Las fotos del evento se AGREGAN AL FINAL para no cambiar los índices ya seleccionados.
const photos = [
    'imagenes/IMG_0528.webp',
    'imagenes/IMG_0529.webp',
    'imagenes/IMG_0530.webp',
    'imagenes/IMG_0531.webp',
    'imagenes/IMG_0532.webp',
    'imagenes/IMG_0533.webp',
    'imagenes/IMG_0534.webp',
    'imagenes/IMG_0535.webp',
    'imagenes/IMG_0536.webp',
    'imagenes/IMG_0537.webp',
    'imagenes/IMG_0538.webp',
    'imagenes/IMG_0539.webp',
    'imagenes/IMG_0540.webp',
    'imagenes/IMG_0541.webp',
    'imagenes/IMG_0542.webp',
    'imagenes/IMG_0543.webp',
    'imagenes/IMG_0544.webp',
    'imagenes/IMG_0545.webp',
    'imagenes/IMG_0546.webp',
    'imagenes/IMG_0547.webp',
    'imagenes/IMG_0548.webp',
    'imagenes/IMG_0549.webp',
    'imagenes/IMG_0550.webp',
    'imagenes/IMG_0551.webp',
    'imagenes/IMG_0552.webp',
    'imagenes/IMG_0553.webp',
    'imagenes/IMG_0554.webp',
    'imagenes/IMG_0555.webp',
    'imagenes/IMG_0556.webp',
    'imagenes/IMG_0557.webp',
    'imagenes/IMG_0558.webp',
    'imagenes/IMG_0559.webp',
    'imagenes/IMG_0560.webp',
    'imagenes/IMG_0561.webp',
    'imagenes/IMG_0562.webp',
    'imagenes/IMG_0563.webp',
    'imagenes/IMG_0564.webp',
    'imagenes/IMG_0565.webp',
    'imagenes/IMG_0566.webp',
    'imagenes/IMG_0567.webp',
    'imagenes/IMG_0568.webp',
    'imagenes/IMG_0569.webp',
    'imagenes/IMG_0570.webp',
    'imagenes/IMG_0571.webp',
    'imagenes/IMG_0572.webp',
    'imagenes/IMG_0573.webp',
    'imagenes/IMG_0574.webp',
    'imagenes/IMG_0575.webp',
    'imagenes/IMG_0576.webp',
    'imagenes/IMG_0577.webp',
    'imagenes/IMG_0578.webp',
    'imagenes/IMG_0579.webp',
    'imagenes/IMG_0580.webp',
    'imagenes/IMG_0581.webp',
    'imagenes/IMG_0582.webp',
    'imagenes/IMG_0583.webp',
    'imagenes/IMG_0584.webp',
    'imagenes/IMG_0585.webp',
    'imagenes/IMG_0586.webp',
    'imagenes/IMG_0587.webp',
    'imagenes/IMG_0588.webp',
    'imagenes/IMG_0589.webp',
    'imagenes/IMG_0590.webp',
    'imagenes/IMG_0591.webp',
    'imagenes/IMG_0592.webp',
    'imagenes/IMG_0593.webp',
    'imagenes/IMG_0594.webp',
    'imagenes/IMG_0595.webp',
    'imagenes/IMG_0596.webp',
    'imagenes/IMG_0597.webp',
    'imagenes/IMG_0598.webp',
    'imagenes/IMG_0599.webp',
    'imagenes/IMG_0600.webp',
    'imagenes/IMG_0601.webp',
    'imagenes/IMG_0602.webp',
    'imagenes/IMG_0603.webp',
    'imagenes/IMG_0604.webp',
    'imagenes/IMG_0605.webp',
    'imagenes/IMG_0606.webp',
    'imagenes/IMG_0607.webp',
    'imagenes/IMG_0608.webp',
    'imagenes/IMG_0609.webp',
    'imagenes/IMG_0610.webp',
    'imagenes/IMG_0611.webp',
    'imagenes/IMG_0612.webp',
    'imagenes/IMG_0613.webp',
    'imagenes/IMG_0614.webp',
    'imagenes/IMG_0615.webp',
    'imagenes/IMG_0616.webp',
    'imagenes/IMG_0617.webp',
    'imagenes/IMG_0618.webp',
    'imagenes/IMG_0619.webp',
    'imagenes/IMG_0620.webp',
    'imagenes/IMG_0621.webp',
    'imagenes/IMG_0622.webp',
    'imagenes/IMG_0623.webp',
    'imagenes/IMG_0624.webp',
    'imagenes/IMG_0625.webp',
    'imagenes/IMG_0626.webp',
    'imagenes/IMG_0627.webp',
    'imagenes/IMG_0628.webp',
    'imagenes/IMG_0629.webp',
    'imagenes/IMG_0630.webp',
    'imagenes/IMG_0631.webp',
    'imagenes/IMG_0632.webp',
    'imagenes/IMG_0633.webp',
    'imagenes/IMG_0634.webp',
    'imagenes/IMG_0635.webp',
    'imagenes/IMG_0639.webp',
    'imagenes/IMG_0640.webp',
    'imagenes/IMG_0641.webp',
    'imagenes/IMG_0643.webp',
    'imagenes/IMG_0644.webp',
    'imagenes/IMG_0645.webp',
    'imagenes/IMG_0646.webp',
    'imagenes/IMG_0647.webp',
    'imagenes/IMG_0648.webp',
    'imagenes/IMG_0649.webp',
    'imagenes/IMG_0650.webp',
    'imagenes/IMG_0651.webp',
    'imagenes/IMG_0652.webp',
    'imagenes/IMG_0653.webp',
    'imagenes/IMG_0654.webp',
    'imagenes/IMG_0655.webp',
    'imagenes/IMG_0659.webp',
    'imagenes/IMG_0660.webp',
    'imagenes/IMG_0661.webp',
    'imagenes/IMG_0662.webp',
    'imagenes/IMG_0663.webp',
    'imagenes/IMG_0664.webp',
    'imagenes/IMG_0665.webp',
    'imagenes/IMG_0666.webp',
    'imagenes/IMG_0667.webp',
    'imagenes/IMG_0668.webp',
    'imagenes/IMG_0669.webp',
    'imagenes/IMG_0670.webp',
    'imagenes/IMG_0671.webp',
    'imagenes/IMG_0672.webp',
    'imagenes/IMG_0673.webp',
    'imagenes/IMG_0674.webp',
    'imagenes/IMG_0675.webp',
    'imagenes/IMG_0676.webp',
    'imagenes/IMG_0677.webp',
    'imagenes/IMG_0678.webp',
    'imagenes/IMG_0679.webp',
    'imagenes/IMG_0680.webp',
    'imagenes/IMG_0681.webp',
    'imagenes/IMG_0682.webp',
    'imagenes/IMG_0683.webp',
    'imagenes/IMG_0684.webp',
    'imagenes/IMG_0685.webp',
    'imagenes/IMG_0686.webp',
    'imagenes/IMG_0687.webp',
    'imagenes/IMG_0688.webp',
    'imagenes/IMG_0689.webp',
    'imagenes/IMG_0690.webp',
    'imagenes/IMG_0691.webp',
    'imagenes/IMG_0692.webp',
    'imagenes/IMG_0693.webp',
    'imagenes/IMG_0694.webp',
    'imagenes/IMG_0695.webp',
    'imagenes/IMG_0696.webp',
    'imagenes/IMG_0697.webp',
    'imagenes/IMG_0698.webp',
    'imagenes/IMG_0699.webp',
    'imagenes/IMG_0700.webp',
    'imagenes/IMG_0701.webp',
    'imagenes/IMG_0702.webp',
    'imagenes/IMG_0703.webp',
    'imagenes/IMG_0704.webp',
    'imagenes/IMG_0705.webp',
    'imagenes/IMG_0706.webp',
    'imagenes/IMG_0707.webp',
    'imagenes/IMG_0708.webp',
    'imagenes/IMG_0709.webp',
    'imagenes/IMG_0710.webp',
    'imagenes/IMG_0711.webp',
    'imagenes/IMG_0712.webp',
    'imagenes/IMG_0713.webp',
    'imagenes/IMG_0714.webp',
    'imagenes/IMG_0715.webp',
    'imagenes/IMG_0716.webp',
    'imagenes/IMG_0717.webp',
    'imagenes/IMG_0718.webp',
    'imagenes/IMG_0719.webp',
    'imagenes/IMG_0720.webp',
    'imagenes/IMG_0721.webp',
    'imagenes/IMG_0722.webp',
    'imagenes/IMG_0723.webp',
    'imagenes/IMG_0724.webp',
    'imagenes/IMG_0725.webp',
    'imagenes/IMG_0726.webp',
    'imagenes/IMG_0727.webp',
    'imagenes/IMG_0728.webp',
    'imagenes/IMG_0729.webp',
    'imagenes/IMG_0730.webp',
    'imagenes/IMG_0731.webp',
    'imagenes/IMG_0732.webp',
    'imagenes/IMG_0733.webp',
    'imagenes/IMG_0734.webp',
    'imagenes/IMG_0735.webp',
    'imagenes/IMG_0736.webp',
    'imagenes/IMG_0737.webp',
    'imagenes/IMG_0738.webp',
    'imagenes/IMG_0739.webp',
    'imagenes/IMG_0740.webp',
    'imagenes/IMG_0741.webp',
    'imagenes/IMG_0742.webp',
    'imagenes/IMG_0743.webp',
    'imagenes/IMG_0744.webp',
    'imagenes/IMG_0745.webp',
    'imagenes/IMG_0746.webp',
    'imagenes/IMG_0747.webp',
    'imagenes/IMG_0748.webp',
    'imagenes/IMG_0749.webp',
    'imagenes/IMG_0750.webp',
    'imagenes/IMG_0751.webp',
    'imagenes/IMG_0752.webp',
    'imagenes/IMG_0753.webp',
    'imagenes/IMG_0754.webp',
    'imagenes/IMG_0755.webp',
    'imagenes/IMG_0756.webp',
    'imagenes/IMG_0757.webp',
    'imagenes/IMG_0758.webp',
    'imagenes/IMG_0759.webp',
    'imagenes/IMG_0760.webp',
    'imagenes/IMG_0761.webp',
    'imagenes/IMG_0762.webp',
    'imagenes/IMG_0763.webp',
    'imagenes/IMG_0764.webp',
    'imagenes/IMG_0765.webp',
    'imagenes/IMG_0766.webp',
    'imagenes/IMG_0767.webp',
    'imagenes/IMG_0768.webp',
    'imagenes/IMG_0769.webp',
    'imagenes/IMG_0770.webp',
    'imagenes/IMG_0771.webp',
    'imagenes/IMG_0772.webp',
    'imagenes/IMG_0773.webp',
    'imagenes/IMG_0778.webp',
    'imagenes/IMG_0779.webp',
    'imagenes/IMG_0780.webp',
    'imagenes/IMG_0781.webp',
    'imagenes/IMG_0782.webp',
    'imagenes/IMG_0783.webp',
    'imagenes/IMG_0784.webp',
    'imagenes/IMG_0785.webp',
    'imagenes/IMG_0786.webp',
    'imagenes/IMG_0787.webp',
    'imagenes/IMG_0788.webp',
    'imagenes/IMG_0789.webp',
    'imagenes/IMG_0790.webp',
    'imagenes/IMG_0791.webp',
    'imagenes/IMG_0792.webp',
    'imagenes/IMG_0793.webp',
    'imagenes/IMG_0794.webp',
    'imagenes/IMG_0795.webp',
    'imagenes/IMG_0796.webp',
    'imagenes/IMG_0797.webp',
    'imagenes/IMG_0798.webp',
    'imagenes/IMG_0799.webp'
];
// Miniatura (300 px) para la cuadrícula; la foto completa se usa en el visor y la descarga
const thumbOf = (p) => p.replace('imagenes/', 'imagenes/thumb/');
const fileOf = (p) => p.split('/').pop().replace('.webp', '');

// ── Configuración del evento (único lugar para cambiar datos del contrato) ──
const CONFIG = {
    slug:               'xv-anos-orianna-atenea',
    nombre:             (window.EVENT_CONFIG && window.EVENT_CONFIG.nombre)             || 'Orianna Atenea García Loera',
    telefono:           (window.EVENT_CONFIG && window.EVENT_CONFIG.telefono)           || '',
    fechaEvento:        (window.EVENT_CONFIG && window.EVENT_CONFIG.fechaEvento)        || new Date(2026, 10, 21, 19, 0, 0),
    limiteImpresion:    200,
    limiteInvitacion:   null,
    costoFotoAdicional: (window.EVENT_CONFIG && window.EVENT_CONFIG.costoFotoAdicional) || 15,
};

const STORAGE_KEY = 'xv_anos_orianna_atenea_photo_selections';
const KEY_FILTER   = 'atenea_filter';
const KEY_SCROLL   = 'atenea_scroll';
const KEY_LAST     = 'atenea_last_photo';
const LIMITES = {
    impresion: CONFIG.limiteImpresion,
    invitacion: CONFIG.limiteInvitacion
};
const COSTO_FOTO_ADICIONAL = CONFIG.costoFotoAdicional;

let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'all';
let touchStartX = 0;
let touchStartY = 0;
let scrollPositionBeforeModal = 0;
let scrollSaveTimer = null;
let modalOpen = false;

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================
function mostrarBannerSinSeleccion() {
    if (document.getElementById('banner-sin-sel')) return;
    if (Object.keys(photoSelections).length > 0) return;
    if (CONFIG.fechaEvento > new Date()) return;
    const banner = document.createElement('div');
    banner.id = 'banner-sin-sel';
    banner.style.cssText = 'background:#78350f;color:#fcd34d;text-align:center;padding:12px 20px;font-size:.88rem;position:sticky;top:0;z-index:200;line-height:1.5;';
    banner.innerHTML = '📸 <strong>¡Tus fotos están listas!</strong> Aún no has seleccionado ninguna foto. ¡Empieza ahora! <button onclick="this.parentElement.remove()" style="margin-left:12px;background:transparent;border:1px solid #fcd34d;color:#fcd34d;padding:1px 8px;border-radius:4px;cursor:pointer;font-size:.85rem;">×</button>';
    document.body.insertBefore(banner, document.body.firstChild);
}

async function loadSelections(isPoll = false) {
    if (!isPoll) {
        // Carga inicial: mostrar localStorage de inmediato (cero latencia)
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) photoSelections = JSON.parse(saved);
        } catch(e) { photoSelections = {}; }
    }

    if (!sbDisponible) return;
    try {
        const evento_id = await sbGetEventoId();
        if (!evento_id) { sbDisponible = false; return; }

        const r = await fetch(
            `${SUPABASE_URL}/rest/v1/selecciones?evento_id=eq.${evento_id}&select=foto_index,impresion,invitacion,descartada`,
            { headers: SB_HEADERS }
        );
        if (!r.ok) throw new Error(r.status);
        const rows = await r.json();

        const sbSelections = {};
        rows.forEach(row => {
            if (row.impresion || row.invitacion || row.descartada) {
                sbSelections[row.foto_index] = {
                    impresion: row.impresion,
                    invitacion: row.invitacion,
                    descartada: row.descartada
                };
            }
        });

        if (!isPoll) {
            // Carga inicial: merge y migrar localStorage a Supabase para que otros lo vean
            const merged = {...sbSelections};
            Object.entries(photoSelections).forEach(([idx, sel]) => {
                if (sel.impresion || sel.invitacion || sel.descartada) merged[idx] = sel;
            });
            photoSelections = merged;
            if (Object.keys(photoSelections).length > 0) {
                sbSyncSelections().catch(e => console.warn('[Supabase] Migración:', e.message));
            }
            sbRegistrarVisita('selector');
            mostrarBannerSinSeleccion();
        } else {
            // Polling: Supabase es la verdad compartida, reemplaza estado local
            photoSelections = sbSelections;
        }

        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections)); } catch(e) {}
        renderGallery(); setupLazyLoad(); updateStats(); updateFilterButtons();
    } catch(e) {
        console.warn('[Supabase] Usando localStorage:', e.message);
        sbDisponible = false;
    }
}

async function saveSelections() {
    // 1. localStorage siempre primero
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections));
    } catch(e) {
        showToast('Error al guardar. Verifica el espacio del navegador.', 'error');
    }

    // 2. Sincronizar con Supabase en background (no bloqueante)
    if (!sbDisponible) return;
    sbSyncSelections().catch(e => { console.warn('[Supabase] Sync error:', e.message); });
}

async function sbSyncSelections() {
    const snapshot = {...photoSelections}; // snapshot BEFORE any await
    const evento_id = await sbGetEventoId();
    if (!evento_id) return;

    const rows = Object.entries(snapshot).map(([idx, sel]) => ({
        evento_id,
        session_id:  SESSION_ID,
        foto_index:  parseInt(idx),
        impresion:   sel.impresion  || false,
        invitacion:  sel.invitacion || false,
        descartada:  sel.descartada || false,
    }));

    if (rows.length === 0) return;

    await fetch(`${SUPABASE_URL}/rest/v1/selecciones?on_conflict=evento_id,foto_index`, {
        method: 'POST',
        headers: { ...SB_HEADERS, 'Prefer': 'resolution=merge-duplicates,return=minimal' },
        body: JSON.stringify(rows)
    });
}

function swipeSaveAndNext() {
    if (currentPhotoIndex === null) return;
    const selectedCategories = {};
    let hasAnySelection = false;
    document.querySelectorAll('.option-btn').forEach(btn => {
        selectedCategories[btn.dataset.category] = btn.classList.contains('selected');
        if (btn.classList.contains('selected')) hasAnySelection = true;
    });
    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        const idx = currentPhotoIndex;
        delete photoSelections[idx];
        if (sbDisponible) sbDeleteSelection(idx).catch(e => console.warn('[Supabase] Delete:', e.message));
    }
    saveSelections();
    updateCard(currentPhotoIndex);
    updateStats();
    updateFilterButtons();
    navigatePhoto('next');
    showToast('Guardado ✓', 'success');
}

function swipeClearAndNext() {
    if (currentPhotoIndex === null) return;
    const idx = currentPhotoIndex;
    if (photoSelections[idx]) {
        delete photoSelections[idx];
        if (sbDisponible) sbDeleteSelection(idx).catch(e => console.warn('[Supabase] Delete:', e.message));
        saveSelections();
        updateCard(idx);
        updateStats();
        updateFilterButtons();
    }
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    navigatePhoto('next');
    showToast('Selección quitada', 'success');
}

async function sbDeleteSelection(foto_index) {
    const evento_id = await sbGetEventoId();
    if (!evento_id) return;
    await fetch(
        `${SUPABASE_URL}/rest/v1/selecciones?evento_id=eq.${evento_id}&foto_index=eq.${foto_index}`,
        { method: 'DELETE', headers: SB_HEADERS }
    );
}

async function clearAllSelections() {
    if (confirm('¿Estás seguro de que quieres borrar TODAS las selecciones? Esta acción no se puede deshacer.')) {
        // Borrar de Supabase primero
        if (sbDisponible) {
            try {
                const evento_id = await sbGetEventoId();
                if (evento_id) {
                    await fetch(
                        `${SUPABASE_URL}/rest/v1/selecciones?evento_id=eq.${evento_id}`,
                        { method: 'DELETE', headers: SB_HEADERS }
                    );
                }
            } catch(e) { console.warn('[Supabase] Error al borrar:', e.message); }
        }
        photoSelections = {};
        try { localStorage.removeItem(STORAGE_KEY); } catch(e) {}
        renderGallery();
        setupLazyLoad();
        updateStats();
        updateFilterButtons();
        showToast('Todas las selecciones han sido eliminadas', 'success');
    }
}

// ========================================
// STATS FUNCTIONS
// ========================================
function getStats() {
    const stats = {
        impresion: 0,
        invitacion: 0,
        descartada: 0,
        sinClasificar: photos.length
    };

    Object.values(photoSelections).forEach(selection => {
        if (selection.impresion) stats.impresion++;
        if (selection.invitacion) stats.invitacion++;
        if (selection.descartada) stats.descartada++;
    });

    stats.sinClasificar = photos.length - Object.keys(photoSelections).length;

    return stats;
}

function updateStats() {
    const stats = getStats();

    document.getElementById('countImpresion').textContent =
        LIMITES.impresion ? `${stats.impresion}/${LIMITES.impresion}` : stats.impresion;
    document.getElementById('countInvitacion').textContent = stats.invitacion;
    document.getElementById('countDescartada').textContent = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;

    const fotosAdicionales = Math.max(0, stats.impresion - LIMITES.impresion);
    const costoExtra = fotosAdicionales * COSTO_FOTO_ADICIONAL;

    const extraCostDisplay = document.getElementById('extraCostDisplay');
    if (extraCostDisplay) {
        if (fotosAdicionales > 0) {
            extraCostDisplay.style.display = 'block';
            document.getElementById('extraCostAmount').textContent = `$${costoExtra} MXN`;
            document.getElementById('extraCostDetail').textContent = `${fotosAdicionales} foto${fotosAdicionales > 1 ? 's' : ''} adicional${fotosAdicionales > 1 ? 'es' : ''} x $${COSTO_FOTO_ADICIONAL}`;
        } else {
            extraCostDisplay.style.display = 'none';
        }
    }

    const impresionCard = document.querySelector('.stat-card.impresion');
    if (impresionCard) {
        if (stats.impresion > LIMITES.impresion) {
            impresionCard.style.borderColor = '#ff9800';
            impresionCard.style.backgroundColor = 'rgba(255, 152, 0, 0.1)';
        } else if (stats.impresion === LIMITES.impresion) {
            impresionCard.style.borderColor = '#4caf50';
            impresionCard.style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
        } else {
            impresionCard.style.borderColor = '';
            impresionCard.style.backgroundColor = '';
        }
    }
}

// ========================================
// GALLERY FUNCTIONS
// ========================================
function renderGallery() {
    const grid = document.getElementById('photosGrid');
    if (!grid) return;

    grid.innerHTML = '';

    if (photos.length === 0) {
        grid.innerHTML = '<div class="no-photos-message">Las fotos estarán disponibles después del evento (21 de noviembre de 2026)</div>';
        return;
    }

    photos.forEach((photo, index) => {
        const selection = photoSelections[index] || {};
        const hasAny = selection.impresion || selection.invitacion || selection.descartada;

        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;

        if (selection.descartada) {
            card.classList.add('has-descartada');
        } else {
            const categories = [];
            if (selection.impresion) categories.push('impresion');
            if (selection.invitacion) categories.push('invitacion');
            if (categories.length > 1) card.classList.add('has-multiple');
            else if (categories.length === 1) card.classList.add(`has-${categories[0]}`);
        }

        let badgesHTML = '';
        if (hasAny) {
            badgesHTML = '<div class="photo-badges">';
            if (selection.impresion) badgesHTML += '<span class="badge badge-impresion">📸 Impresión</span>';
            if (selection.invitacion) badgesHTML += '<span class="badge badge-invitacion">💌 Invitación</span>';
            if (selection.descartada) badgesHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
            badgesHTML += '</div>';
        }

        const displayNumber = `Foto ${index + 1}`;
        const mediaHTML = `
            <div class="photo-image-container">
                <img data-src="${thumbOf(photo)}" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E" alt="${displayNumber}" class="lazy-img">
            </div>
        `;

        card.innerHTML = `
            ${mediaHTML}
            <div class="photo-number">${displayNumber}</div>
            ${badgesHTML}
        `;

        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    });

    applyFilter();
}

// ========================================
// LAZY LOADER CON COLA (máx 4 concurrentes)
// ========================================
let lazyObserver = null;
let lazyQueue = [];
let lazyActive = 0;
const LAZY_MAX = 4;

function lazyLoadNext() {
    while (lazyActive < LAZY_MAX && lazyQueue.length > 0) {
        const img = lazyQueue.shift();
        if (!img.dataset.src || img.classList.contains('lazy-loaded')) continue;
        lazyActive++;
        img.onload = img.onerror = () => { lazyActive--; lazyLoadNext(); };
        img.src = img.dataset.src;
        img.classList.add('lazy-loaded');
    }
}

function setupLazyLoad() {
    if (lazyObserver) lazyObserver.disconnect();
    lazyQueue = [];
    lazyActive = 0;

    lazyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                lazyObserver.unobserve(img);
                if (!img.classList.contains('lazy-loaded')) {
                    lazyQueue.push(img);
                    lazyLoadNext();
                }
            }
        });
    }, { rootMargin: '300px 0px' });

    document.querySelectorAll('img.lazy-img:not(.lazy-loaded)').forEach(img => {
        lazyObserver.observe(img);
    });
}

// ========================================
// FILTER FUNCTIONS
// ========================================
function applyFilter() {
    const cards = document.querySelectorAll('.photo-card');
    cards.forEach(card => {
        const index = parseInt(card.dataset.index);
        const selection = photoSelections[index] || {};
        let show = false;
        switch (currentFilter) {
            case 'all': show = true; break;
            case 'impresion': show = selection.impresion === true; break;
            case 'invitacion': show = selection.invitacion === true; break;
            case 'descartada': show = selection.descartada === true; break;
            case 'sin-clasificar': show = !selection.impresion && !selection.invitacion && !selection.descartada; break;
        }
        card.classList.toggle('hidden', !show);
    });
}

function setFilter(filter) {
    currentFilter = filter;
    applyFilter();
    document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (activeBtn) activeBtn.classList.add('active');
    try { localStorage.setItem(KEY_FILTER, filter); } catch (e) {}
}

function updateFilterButtons() {
    const stats = getStats();
    const btnAll = document.getElementById('btnFilterAll');
    const btnImpresion = document.getElementById('btnFilterImpresion');
    const btnInvitacion = document.getElementById('btnFilterInvitacion');
    const btnDescartada = document.getElementById('btnFilterDescartada');
    const btnSinClasificar = document.getElementById('btnFilterSinClasificar');

    if (btnAll) btnAll.textContent = `Todas (${photos.length})`;
    if (btnImpresion) btnImpresion.textContent = `Impresión (${stats.impresion})`;
    if (btnInvitacion) btnInvitacion.textContent = `Invitación (${stats.invitacion})`;
    if (btnDescartada) btnDescartada.textContent = `Descartadas (${stats.descartada})`;
    if (btnSinClasificar) btnSinClasificar.textContent = `Sin Clasificar (${stats.sinClasificar})`;
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    try { localStorage.setItem(KEY_LAST, index); } catch (e) {}
    const modal = document.getElementById('photoModal');
    const modalPhotoNumber = document.getElementById('modalPhotoNumber');

    const photo = photos[index];
    const displayNumber = `Foto ${index + 1}`;

    modalPhotoNumber.textContent = displayNumber;
    document.getElementById('modalImage').src = photo;
    document.getElementById('modalImage').alt = displayNumber;

    const selection = photoSelections[index] || {};
    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        btn.classList.toggle('selected', selection[category] === true);
    });

    modal.classList.add('active');
    updateNavigationButtons();
    modalOpen = true;
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('photoModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    modalOpen = false;
    currentPhotoIndex = null;
}

function navigatePhoto(direction) {
    if (currentPhotoIndex === null) return;
    let newIndex;
    if (direction === "next") {
        newIndex = currentPhotoIndex + 1;
        if (newIndex >= photos.length) newIndex = 0;
    } else {
        newIndex = currentPhotoIndex - 1;
        if (newIndex < 0) newIndex = photos.length - 1;
    }
    saveCurrentSelections();
    openModal(newIndex);
}

function saveCurrentSelections() {
    if (currentPhotoIndex === null) return;
    const selectedCategories = {};
    let hasAnySelection = false;
    document.querySelectorAll(".option-btn").forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains("selected");
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });
    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        delete photoSelections[currentPhotoIndex];
    }
    saveSelections();
    updateStats();
    updateFilterButtons();
}

function updateNavigationButtons() {
    const btnPrev = document.getElementById("btnPrevPhoto");
    const btnNext = document.getElementById("btnNextPhoto");
    if (btnPrev && btnNext) {
        btnPrev.disabled = false;
        btnNext.disabled = false;
    }
}

function updateCard(index) {
    const card = document.querySelector(`.photo-card[data-index="${index}"]`);
    if (!card) return;
    const selection = photoSelections[index] || {};
    const hasAny = selection.impresion || selection.invitacion || selection.descartada;
    card.className = 'photo-card';
    if (selection.descartada) {
        card.classList.add('has-descartada');
    } else {
        const cats = [];
        if (selection.impresion) cats.push('impresion');
        if (selection.invitacion) cats.push('invitacion');
        if (cats.length > 1) card.classList.add('has-multiple');
        else if (cats.length === 1) card.classList.add(`has-${cats[0]}`);
    }
    const existing = card.querySelector('.photo-badges');
    if (existing) existing.remove();
    if (hasAny) {
        const badges = document.createElement('div');
        badges.className = 'photo-badges';
        if (selection.impresion) badges.innerHTML += '<span class="badge badge-impresion">📸 Impresión</span>';
        if (selection.invitacion) badges.innerHTML += '<span class="badge badge-invitacion">💌 Invitación</span>';
        if (selection.descartada) badges.innerHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
        card.appendChild(badges);
    }
    let show = false;
    switch (currentFilter) {
        case 'all': show = true; break;
        case 'impresion': show = selection.impresion === true; break;
        case 'invitacion': show = selection.invitacion === true; break;
        case 'descartada': show = selection.descartada === true; break;
        case 'sin-clasificar': show = !selection.impresion && !selection.invitacion && !selection.descartada; break;
    }
    card.classList.toggle('hidden', !show);
}

function saveModalSelection() {
    if (currentPhotoIndex === null) return;
    const selectedCategories = {};
    let hasAnySelection = false;
    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains('selected');
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });
    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        delete photoSelections[currentPhotoIndex];
        if (sbDisponible) sbDeleteSelection(currentPhotoIndex).catch(e => console.warn('[Supabase] Delete:', e.message));
    }
    saveSelections();
    updateCard(currentPhotoIndex);
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección guardada correctamente', 'success');
}

// ========================================
// EXPORT FUNCTIONS
// ========================================
function generateTextSummary(detalle = false) {
    const stats = getStats();
    const fotosAdicionales = Math.max(0, stats.impresion - LIMITES.impresion);
    const costoExtra = fotosAdicionales * COSTO_FOTO_ADICIONAL;

    let summary = '💜 SELECCIÓN DE FOTOS - XV AÑOS ORIANNA ATENEA GARCÍA LOERA\n';
    summary += '═══════════════════════════════════════════════════\n\n';
    summary += `📋 SEGÚN CONTRATO:\n`;
    summary += `   📸 Impresión incluida: ${LIMITES.impresion} fotos\n\n`;
    summary += `📊 RESUMEN ACTUAL:\n`;
    summary += `   Total de fotos disponibles: ${photos.length}\n`;
    summary += `   📸 Para impresión: ${stats.impresion}/${LIMITES.impresion} ${stats.impresion === LIMITES.impresion ? '✓' : stats.impresion > LIMITES.impresion ? '⚠️ ADICIONALES' : ''}\n`;
    summary += `   💌 Para invitación: ${stats.invitacion}\n`;
    summary += `   ❌ Descartadas: ${stats.descartada}\n`;
    summary += `   ⭕ Sin clasificar: ${stats.sinClasificar}\n\n`;

    if (fotosAdicionales > 0) {
        summary += `💰 COSTO ADICIONAL:\n`;
        summary += `   Fotos adicionales: ${fotosAdicionales}\n`;
        summary += `   Costo por foto: $${COSTO_FOTO_ADICIONAL} MXN\n`;
        summary += `   TOTAL ADICIONAL: $${costoExtra} MXN\n\n`;
    }

    if (detalle) {
        const lista = (cat) => photos.map((p, i) => ({ p, i }))
            .filter(({ i }) => photoSelections[i] && photoSelections[i][cat])
            .map(({ p, i }) => `   Foto ${i + 1} (${fileOf(p)})`).join('\n') || '   (ninguna)';
        summary += `📸 FOTOS PARA IMPRESIÓN:\n${lista('impresion')}\n\n`;
        summary += `💌 FOTOS PARA INVITACIÓN:\n${lista('invitacion')}\n\n`;
    }
    summary += `\n📅 Generado el: ${new Date().toLocaleString('es-MX')}\n`;
    return summary;
}

function copyToClipboard() {
    const summary = generateTextSummary();
    navigator.clipboard.writeText(summary).then(() => {
        showToast('Resumen copiado al portapapeles', 'success');
    }).catch(() => {
        showToast('No se pudo copiar. Selecciona el texto manualmente.', 'error');
    });
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.className = `toast ${type}`;
    setTimeout(() => { toast.classList.add('show'); }, 100);
    setTimeout(() => { toast.classList.remove('show'); }, 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
    setupLazyLoad();
    updateStats();
    updateFilterButtons();
    loadSelections();

    const savedFilter = localStorage.getItem(KEY_FILTER);
    if (savedFilter) setFilter(savedFilter);
    const savedScroll = parseInt(localStorage.getItem(KEY_SCROLL) || '0');
    if (savedScroll > 0) {
        requestAnimationFrame(() => requestAnimationFrame(() => window.scrollTo(0, savedScroll)));
    }

    document.getElementById('btnFilterAll')?.addEventListener('click', () => setFilter('all'));
    document.getElementById('btnFilterImpresion')?.addEventListener('click', () => setFilter('impresion'));
    document.getElementById('btnFilterInvitacion')?.addEventListener('click', () => setFilter('invitacion'));
    document.getElementById('btnFilterDescartada')?.addEventListener('click', () => setFilter('descartada'));
    document.getElementById('btnFilterSinClasificar')?.addEventListener('click', () => setFilter('sin-clasificar'));

    document.getElementById('btnExport')?.addEventListener('click', () => {
        const text = generateTextSummary(true);
        const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
        const url  = URL.createObjectURL(blob);
        const a    = document.createElement('a');
        a.href     = url;
        a.download = 'seleccion-fotos-atenea.txt';
        a.click();
        URL.revokeObjectURL(url);
    });
    document.getElementById('btnShare')?.addEventListener('click', copyToClipboard);
    document.getElementById('btnClear')?.addEventListener('click', clearAllSelections);

    document.querySelector('.modal-close')?.addEventListener('click', closeModal);
    document.getElementById('btnCancelSelection')?.addEventListener('click', closeModal);
    document.getElementById('btnSaveSelection')?.addEventListener('click', saveModalSelection);

    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => btn.classList.toggle('selected'));
    });

    const photoModal = document.getElementById('photoModal');
    if (photoModal) {
        photoModal.addEventListener('click', (e) => {
            if (e.target.id === 'photoModal') closeModal();
        });
        photoModal.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        }, { passive: true });
        photoModal.addEventListener('touchend', (e) => {
            const deltaX = e.changedTouches[0].clientX - touchStartX;
            const deltaY = e.changedTouches[0].clientY - touchStartY;
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                if (deltaX > 0) swipeSaveAndNext();
                else swipeClearAndNext();
            }
        }, { passive: true });
    }

    document.getElementById('btnPrevPhoto')?.addEventListener('click', () => navigatePhoto('prev'));
    document.getElementById('btnNextPhoto')?.addEventListener('click', () => navigatePhoto('next'));

    // Polling: sincronizar con otros usuarios cada 30 segundos
    if (sbDisponible) {
        setInterval(() => { if (!modalOpen) loadSelections(true); }, 30000);
    }

    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('photoModal');
        if (modal && modal.classList.contains('active')) {
            if (e.key === 'Escape') closeModal();
            else if (e.key === 'Enter') saveModalSelection();
            else if (e.key === 'ArrowLeft') navigatePhoto('prev');
            else if (e.key === 'ArrowRight') navigatePhoto('next');
        }
    });
});

window.addEventListener('scroll', () => {
    if (modalOpen) return;
    clearTimeout(scrollSaveTimer);
    scrollSaveTimer = setTimeout(() => {
        try { localStorage.setItem(KEY_SCROLL, window.scrollY); } catch (e) {}
    }, 300);
}, { passive: true });

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        saveSelections();
        try { localStorage.setItem(KEY_SCROLL, window.scrollY); } catch (e) {}
    }
});

window.addEventListener('beforeunload', () => {
    saveSelections();
    try { localStorage.setItem(KEY_SCROLL, window.scrollY); } catch (e) {}
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
}

// ========================================
// DOWNLOAD FUNCTIONS
// ========================================
async function downloadCurrentPhoto() {
    if (currentPhotoIndex === null) return;
    const url = photos[currentPhotoIndex];
    if (!url) return;
    const filename = 'foto-' + (currentPhotoIndex + 1) + '.jpg';
    showToast('Descargando...', 'success');
    try {
        const resp = await fetch(url, { mode: 'cors' });
        const blob = await resp.blob();
        let finalBlob = blob;
        if (!blob.type.includes('jpeg') && !blob.type.includes('jpg')) {
            const bmp = await createImageBitmap(blob);
            const canvas = document.createElement('canvas');
            canvas.width = bmp.width; canvas.height = bmp.height;
            canvas.getContext('2d').drawImage(bmp, 0, 0);
            finalBlob = await new Promise(function(res){ canvas.toBlob(res, 'image/jpeg', 0.95); });
        }
        const a = document.createElement('a');
        const objUrl = URL.createObjectURL(finalBlob);
        a.href = objUrl; a.download = filename;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        setTimeout(function(){ URL.revokeObjectURL(objUrl); }, 2000);
        sbRegistrarVisita('descarga');
        showToast('Descargando ' + filename, 'success');
    } catch(e) {
        window.open(url, '_blank');
        showToast('Abriendo foto...', 'success');
    }
}

function downloadAndClose() {
    downloadCurrentPhoto();
    closeModal();
}

// Inyectar botones de descarga en el modal al cargar
(function injectDownloadButtons(){
    function tryInject(){
        var actions = document.querySelector('.modal-actions');
        if (!actions) return;
        if (document.getElementById('btnDownloadClose')) return;
        var btnDlClose = document.createElement('button');
        btnDlClose.id = 'btnDownloadClose';
        btnDlClose.className = 'btn';
        btnDlClose.textContent = '\u2B07 Descargar y Cerrar';
        btnDlClose.style.cssText = 'background:#6c5ce7;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:.85rem;margin-right:4px;';
        btnDlClose.addEventListener('click', downloadAndClose);
        var btnDl = document.createElement('button');
        btnDl.id = 'btnDownloadPhoto';
        btnDl.className = 'btn';
        btnDl.textContent = '\u2B07 JPG';
        btnDl.style.cssText = 'background:#0984e3;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:.85rem;margin-right:4px;';
        btnDl.addEventListener('click', downloadCurrentPhoto);
        actions.insertBefore(btnDlClose, actions.firstChild);
        actions.insertBefore(btnDl, btnDlClose);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tryInject);
    else tryInject();
})();
