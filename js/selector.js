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
// Selección de entrega: originales, correcciones de luz y tres versiones con luz guiada por IA.
// El índice histórico identifica la misma foto en localStorage y Supabase.
// Se conserva aunque se retire una toma o se sustituya por su versión editada.
const photoCatalog = [
  {
    "index": 10,
    "file": "imagenes/cliente/IMG_0538.webp"
  },
  {
    "index": 12,
    "file": "imagenes/cliente/IMG_0540.webp"
  },
  {
    "index": 15,
    "file": "imagenes/cliente/IMG_0543.webp"
  },
  {
    "index": 17,
    "file": "imagenes/cliente/IMG_0545.webp"
  },
  {
    "index": 18,
    "file": "imagenes/cliente/IMG_0546.webp"
  },
  {
    "index": 19,
    "file": "imagenes/cliente/IMG_0547.webp"
  },
  {
    "index": 21,
    "file": "imagenes/cliente/IMG_0549.webp"
  },
  {
    "index": 24,
    "file": "imagenes/cliente/IMG_0552.webp"
  },
  {
    "index": 25,
    "file": "imagenes/cliente/IMG_0553.webp"
  },
  {
    "index": 26,
    "file": "imagenes/cliente/IMG_0554.webp"
  },
  {
    "index": 27,
    "file": "imagenes/cliente/IMG_0555.webp"
  },
  {
    "index": 30,
    "file": "imagenes/cliente/IMG_0558.webp"
  },
  {
    "index": 33,
    "file": "imagenes/cliente/IMG_0561.webp"
  },
  {
    "index": 35,
    "file": "imagenes/cliente/IMG_0563.webp"
  },
  {
    "index": 38,
    "file": "imagenes/cliente/IMG_0566.webp"
  },
  {
    "index": 41,
    "file": "imagenes/cliente/IMG_0569.webp"
  },
  {
    "index": 42,
    "file": "imagenes/cliente/IMG_0570.webp"
  },
  {
    "index": 44,
    "file": "imagenes/cliente/IMG_0572.webp"
  },
  {
    "index": 47,
    "file": "imagenes/cliente/IMG_0575.webp"
  },
  {
    "index": 49,
    "file": "imagenes/cliente/IMG_0577.webp"
  },
  {
    "index": 51,
    "file": "imagenes/cliente/IMG_0579.webp"
  },
  {
    "index": 54,
    "file": "imagenes/cliente/IMG_0582.webp"
  },
  {
    "index": 56,
    "file": "imagenes/cliente/IMG_0584.webp"
  },
  {
    "index": 57,
    "file": "imagenes/cliente/IMG_0585.webp"
  },
  {
    "index": 60,
    "file": "imagenes/cliente/IMG_0588.webp"
  },
  {
    "index": 62,
    "file": "imagenes/cliente/IMG_0590.webp"
  },
  {
    "index": 64,
    "file": "imagenes/cliente/IMG_0592.webp"
  },
  {
    "index": 67,
    "file": "imagenes/cliente/IMG_0595.webp"
  },
  {
    "index": 68,
    "file": "imagenes/cliente/IMG_0596.webp"
  },
  {
    "index": 69,
    "file": "imagenes/cliente/IMG_0597_IA_luz.webp"
  },
  {
    "index": 70,
    "file": "imagenes/cliente/IMG_0598.webp"
  },
  {
    "index": 72,
    "file": "imagenes/cliente/IMG_0600.webp"
  },
  {
    "index": 73,
    "file": "imagenes/cliente/IMG_0601.webp"
  },
  {
    "index": 76,
    "file": "imagenes/cliente/IMG_0604.webp"
  },
  {
    "index": 78,
    "file": "imagenes/cliente/IMG_0606.webp"
  },
  {
    "index": 79,
    "file": "imagenes/cliente/IMG_0607.webp"
  },
  {
    "index": 82,
    "file": "imagenes/cliente/IMG_0610.webp"
  },
  {
    "index": 86,
    "file": "imagenes/cliente/IMG_0614.webp"
  },
  {
    "index": 87,
    "file": "imagenes/cliente/IMG_0615.webp"
  },
  {
    "index": 89,
    "file": "imagenes/cliente/IMG_0617.webp"
  },
  {
    "index": 91,
    "file": "imagenes/cliente/IMG_0619.webp"
  },
  {
    "index": 93,
    "file": "imagenes/cliente/IMG_0621.webp"
  },
  {
    "index": 99,
    "file": "imagenes/cliente/IMG_0627.webp"
  },
  {
    "index": 102,
    "file": "imagenes/cliente/IMG_0630.webp"
  },
  {
    "index": 103,
    "file": "imagenes/cliente/IMG_0631.webp"
  },
  {
    "index": 105,
    "file": "imagenes/cliente/IMG_0633.webp"
  },
  {
    "index": 109,
    "file": "imagenes/cliente/IMG_0640.webp"
  },
  {
    "index": 118,
    "file": "imagenes/cliente/IMG_0650.webp"
  },
  {
    "index": 121,
    "file": "imagenes/cliente/IMG_0653.webp"
  },
  {
    "index": 123,
    "file": "imagenes/cliente/IMG_0655.webp"
  },
  {
    "index": 129,
    "file": "imagenes/cliente/IMG_0664.webp"
  },
  {
    "index": 130,
    "file": "imagenes/cliente/IMG_0665.webp"
  },
  {
    "index": 133,
    "file": "imagenes/cliente/IMG_0668.webp"
  },
  {
    "index": 139,
    "file": "imagenes/cliente/IMG_0674.webp"
  },
  {
    "index": 143,
    "file": "imagenes/cliente/IMG_0678.webp"
  },
  {
    "index": 149,
    "file": "imagenes/cliente/IMG_0684.webp"
  },
  {
    "index": 150,
    "file": "imagenes/cliente/IMG_0685.webp"
  },
  {
    "index": 151,
    "file": "imagenes/cliente/IMG_0686.webp"
  },
  {
    "index": 153,
    "file": "imagenes/cliente/IMG_0688.webp"
  },
  {
    "index": 157,
    "file": "imagenes/cliente/IMG_0692.webp"
  },
  {
    "index": 159,
    "file": "imagenes/cliente/IMG_0694.webp"
  },
  {
    "index": 161,
    "file": "imagenes/cliente/IMG_0696.webp"
  },
  {
    "index": 162,
    "file": "imagenes/cliente/IMG_0697_IA_luz.webp"
  },
  {
    "index": 170,
    "file": "imagenes/cliente/IMG_0705.webp"
  },
  {
    "index": 173,
    "file": "imagenes/cliente/IMG_0708.webp"
  },
  {
    "index": 175,
    "file": "imagenes/cliente/IMG_0710.webp"
  },
  {
    "index": 176,
    "file": "imagenes/cliente/IMG_0711.webp"
  },
  {
    "index": 179,
    "file": "imagenes/cliente/IMG_0714.webp"
  },
  {
    "index": 181,
    "file": "imagenes/cliente/IMG_0716.webp"
  },
  {
    "index": 186,
    "file": "imagenes/cliente/IMG_0721.webp"
  },
  {
    "index": 189,
    "file": "imagenes/cliente/IMG_0724.webp"
  },
  {
    "index": 191,
    "file": "imagenes/cliente/IMG_0726.webp"
  },
  {
    "index": 195,
    "file": "imagenes/cliente/IMG_0730.webp"
  },
  {
    "index": 199,
    "file": "imagenes/cliente/IMG_0734.webp"
  },
  {
    "index": 212,
    "file": "imagenes/cliente/IMG_0747.webp"
  },
  {
    "index": 214,
    "file": "imagenes/cliente/IMG_0749.webp"
  },
  {
    "index": 215,
    "file": "imagenes/cliente/IMG_0750.webp"
  },
  {
    "index": 217,
    "file": "imagenes/cliente/IMG_0752.webp"
  },
  {
    "index": 220,
    "file": "imagenes/cliente/IMG_0755.webp"
  },
  {
    "index": 221,
    "file": "imagenes/cliente/IMG_0756.webp"
  },
  {
    "index": 224,
    "file": "imagenes/cliente/IMG_0759.webp"
  },
  {
    "index": 227,
    "file": "imagenes/cliente/IMG_0762.webp"
  },
  {
    "index": 229,
    "file": "imagenes/cliente/IMG_0764.webp"
  },
  {
    "index": 231,
    "file": "imagenes/cliente/IMG_0766.webp"
  },
  {
    "index": 234,
    "file": "imagenes/cliente/IMG_0769.webp"
  },
  {
    "index": 235,
    "file": "imagenes/cliente/IMG_0770_IA_luz.webp"
  },
  {
    "index": 237,
    "file": "imagenes/cliente/IMG_0772.webp"
  },
  {
    "index": 246,
    "file": "imagenes/cliente/IMG_0785.webp"
  },
  {
    "index": 248,
    "file": "imagenes/cliente/IMG_0787.webp"
  },
  {
    "index": 249,
    "file": "imagenes/cliente/IMG_0788.webp"
  },
  {
    "index": 252,
    "file": "imagenes/cliente/IMG_0791.webp"
  },
  {
    "index": 254,
    "file": "imagenes/cliente/IMG_0793.webp"
  },
  {
    "index": 256,
    "file": "imagenes/cliente/IMG_0795.webp"
  },
  {
    "index": 260,
    "file": "imagenes/cliente/IMG_0799.webp"
  }
];
const photos = [];
photoCatalog.forEach(({index, file}) => { photos[index] = file; });
const visiblePhotoIndexes = photoCatalog.map(photo => photo.index);
const photoNumber = index => visiblePhotoIndexes.indexOf(index) + 1;

// Miniatura (300 px) para la cuadrícula; la foto completa se usa en el visor y la descarga
const thumbOf = (p) => p.replace(/([^/]+)$/, 'thumb/$1');
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
    if (visiblePhotoIndexes.some(index => { const sel = photoSelections[index]; return sel && (sel.impresion || sel.invitacion || sel.descartada); })) return;
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
        sinClasificar: visiblePhotoIndexes.length
    };

    Object.entries(photoSelections).forEach(([index, selection]) => {
        if (!photos[index]) return;
        if (selection.impresion) stats.impresion++;
        if (selection.invitacion) stats.invitacion++;
        if (selection.descartada) stats.descartada++;
    });

    stats.sinClasificar = visiblePhotoIndexes.filter(index => {
        const selection = photoSelections[index] || {};
        return !selection.impresion && !selection.invitacion && !selection.descartada;
    }).length;

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

    if (visiblePhotoIndexes.length === 0) {
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

        const displayNumber = `Foto ${photoNumber(index)} · ${fileOf(photo)}`;
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

    if (btnAll) btnAll.textContent = `Todas (${visiblePhotoIndexes.length})`;
    if (btnImpresion) btnImpresion.textContent = `Impresión (${stats.impresion})`;
    if (btnInvitacion) btnInvitacion.textContent = `Invitación (${stats.invitacion})`;
    if (btnDescartada) btnDescartada.textContent = `Descartadas (${stats.descartada})`;
    if (btnSinClasificar) btnSinClasificar.textContent = `Sin Clasificar (${stats.sinClasificar})`;
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    if (!photos[index]) return;
    currentPhotoIndex = index;
    try { localStorage.setItem(KEY_LAST, index); } catch (e) {}
    const modal = document.getElementById('photoModal');
    const modalPhotoNumber = document.getElementById('modalPhotoNumber');

    const photo = photos[index];
    const displayNumber = `Foto ${photoNumber(index)} · ${fileOf(photo)}`;

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
    const position = visiblePhotoIndexes.indexOf(currentPhotoIndex);
    if (position < 0 || !visiblePhotoIndexes.length) return;
    const step = direction === 'next' ? 1 : -1;
    const newIndex = visiblePhotoIndexes[(position + step + visiblePhotoIndexes.length) % visiblePhotoIndexes.length];
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
    summary += `   Total de fotos disponibles: ${visiblePhotoIndexes.length}\n`;
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
            .map(({ p, i }) => `   Foto ${photoNumber(i)} (${fileOf(p)})`).join('\n') || '   (ninguna)';
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
    const filename = fileOf(url) + '.jpg';
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
