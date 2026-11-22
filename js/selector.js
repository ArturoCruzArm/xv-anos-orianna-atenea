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
  },
  {
    "index": 261,
    "file": "imagenes/cliente/IMG_7302.webp"
  },
  {
    "index": 262,
    "file": "imagenes/cliente/IMG_7303.webp"
  },
  {
    "index": 263,
    "file": "imagenes/cliente/IMG_7306.webp"
  },
  {
    "index": 264,
    "file": "imagenes/cliente/IMG_7308.webp"
  },
  {
    "index": 265,
    "file": "imagenes/cliente/IMG_7309.webp"
  },
  {
    "index": 266,
    "file": "imagenes/cliente/IMG_7312.webp"
  },
  {
    "index": 267,
    "file": "imagenes/cliente/IMG_7313.webp"
  },
  {
    "index": 268,
    "file": "imagenes/cliente/IMG_7314.webp"
  },
  {
    "index": 269,
    "file": "imagenes/cliente/IMG_7316.webp"
  },
  {
    "index": 270,
    "file": "imagenes/cliente/IMG_7317.webp"
  },
  {
    "index": 271,
    "file": "imagenes/cliente/IMG_7318.webp"
  },
  {
    "index": 272,
    "file": "imagenes/cliente/IMG_7320.webp"
  },
  {
    "index": 273,
    "file": "imagenes/cliente/IMG_7323.webp"
  },
  {
    "index": 274,
    "file": "imagenes/cliente/IMG_7324.webp"
  },
  {
    "index": 275,
    "file": "imagenes/cliente/IMG_7325.webp"
  },
  {
    "index": 276,
    "file": "imagenes/cliente/IMG_7327.webp"
  },
  {
    "index": 277,
    "file": "imagenes/cliente/IMG_7330.webp"
  },
  {
    "index": 278,
    "file": "imagenes/cliente/IMG_7333.webp"
  },
  {
    "index": 279,
    "file": "imagenes/cliente/IMG_7335.webp"
  },
  {
    "index": 280,
    "file": "imagenes/cliente/IMG_7338.webp"
  },
  {
    "index": 281,
    "file": "imagenes/cliente/IMG_7341.webp"
  },
  {
    "index": 282,
    "file": "imagenes/cliente/IMG_7343.webp"
  },
  {
    "index": 283,
    "file": "imagenes/cliente/IMG_7344.webp"
  },
  {
    "index": 284,
    "file": "imagenes/cliente/IMG_7346.webp"
  },
  {
    "index": 285,
    "file": "imagenes/cliente/IMG_7348.webp"
  },
  {
    "index": 286,
    "file": "imagenes/cliente/IMG_7350.webp"
  },
  {
    "index": 287,
    "file": "imagenes/cliente/IMG_7352.webp"
  },
  {
    "index": 288,
    "file": "imagenes/cliente/IMG_7355.webp"
  },
  {
    "index": 289,
    "file": "imagenes/cliente/IMG_7357.webp"
  },
  {
    "index": 290,
    "file": "imagenes/cliente/IMG_7361.webp"
  },
  {
    "index": 291,
    "file": "imagenes/cliente/IMG_7364.webp"
  },
  {
    "index": 292,
    "file": "imagenes/cliente/IMG_7367.webp"
  },
  {
    "index": 293,
    "file": "imagenes/cliente/IMG_7370.webp"
  },
  {
    "index": 294,
    "file": "imagenes/cliente/IMG_7373.webp"
  },
  {
    "index": 295,
    "file": "imagenes/cliente/IMG_7376.webp"
  },
  {
    "index": 296,
    "file": "imagenes/cliente/IMG_7377.webp"
  },
  {
    "index": 297,
    "file": "imagenes/cliente/IMG_7378.webp"
  },
  {
    "index": 298,
    "file": "imagenes/cliente/IMG_7381.webp"
  },
  {
    "index": 299,
    "file": "imagenes/cliente/IMG_7384.webp"
  },
  {
    "index": 300,
    "file": "imagenes/cliente/IMG_7387.webp"
  },
  {
    "index": 301,
    "file": "imagenes/cliente/IMG_7390.webp"
  },
  {
    "index": 302,
    "file": "imagenes/cliente/IMG_7394.webp"
  },
  {
    "index": 303,
    "file": "imagenes/cliente/IMG_7396.webp"
  },
  {
    "index": 304,
    "file": "imagenes/cliente/IMG_7399.webp"
  },
  {
    "index": 305,
    "file": "imagenes/cliente/IMG_7401.webp"
  },
  {
    "index": 306,
    "file": "imagenes/cliente/IMG_7403.webp"
  },
  {
    "index": 307,
    "file": "imagenes/cliente/IMG_7405.webp"
  },
  {
    "index": 308,
    "file": "imagenes/cliente/IMG_7408.webp"
  },
  {
    "index": 309,
    "file": "imagenes/cliente/IMG_7411.webp"
  },
  {
    "index": 310,
    "file": "imagenes/cliente/IMG_7414.webp"
  },
  {
    "index": 311,
    "file": "imagenes/cliente/IMG_7417.webp"
  },
  {
    "index": 312,
    "file": "imagenes/cliente/IMG_7420.webp"
  },
  {
    "index": 313,
    "file": "imagenes/cliente/IMG_7423.webp"
  },
  {
    "index": 314,
    "file": "imagenes/cliente/IMG_7429.webp"
  },
  {
    "index": 315,
    "file": "imagenes/cliente/IMG_7430.webp"
  },
  {
    "index": 316,
    "file": "imagenes/cliente/IMG_7431.webp"
  },
  {
    "index": 317,
    "file": "imagenes/cliente/IMG_7434.webp"
  },
  {
    "index": 318,
    "file": "imagenes/cliente/IMG_7438.webp"
  },
  {
    "index": 319,
    "file": "imagenes/cliente/IMG_7442.webp"
  },
  {
    "index": 320,
    "file": "imagenes/cliente/IMG_7443.webp"
  },
  {
    "index": 321,
    "file": "imagenes/cliente/IMG_7445.webp"
  },
  {
    "index": 322,
    "file": "imagenes/cliente/IMG_7447.webp"
  },
  {
    "index": 323,
    "file": "imagenes/cliente/IMG_7450.webp"
  },
  {
    "index": 324,
    "file": "imagenes/cliente/IMG_7451.webp"
  },
  {
    "index": 325,
    "file": "imagenes/cliente/IMG_7456.webp"
  },
  {
    "index": 326,
    "file": "imagenes/cliente/IMG_7458.webp"
  },
  {
    "index": 327,
    "file": "imagenes/cliente/IMG_7460.webp"
  },
  {
    "index": 328,
    "file": "imagenes/cliente/IMG_7465.webp"
  },
  {
    "index": 329,
    "file": "imagenes/cliente/IMG_7470.webp"
  },
  {
    "index": 330,
    "file": "imagenes/cliente/IMG_7472.webp"
  },
  {
    "index": 331,
    "file": "imagenes/cliente/IMG_7475.webp"
  },
  {
    "index": 332,
    "file": "imagenes/cliente/IMG_7478.webp"
  },
  {
    "index": 333,
    "file": "imagenes/cliente/IMG_7481.webp"
  },
  {
    "index": 334,
    "file": "imagenes/cliente/IMG_7484.webp"
  },
  {
    "index": 335,
    "file": "imagenes/cliente/IMG_7486.webp"
  },
  {
    "index": 336,
    "file": "imagenes/cliente/IMG_7489.webp"
  },
  {
    "index": 337,
    "file": "imagenes/cliente/IMG_7493.webp"
  },
  {
    "index": 338,
    "file": "imagenes/cliente/IMG_7495.webp"
  },
  {
    "index": 339,
    "file": "imagenes/cliente/IMG_7497.webp"
  },
  {
    "index": 340,
    "file": "imagenes/cliente/IMG_7499.webp"
  },
  {
    "index": 341,
    "file": "imagenes/cliente/IMG_7500.webp"
  },
  {
    "index": 342,
    "file": "imagenes/cliente/IMG_7505.webp"
  },
  {
    "index": 343,
    "file": "imagenes/cliente/IMG_7508.webp"
  },
  {
    "index": 344,
    "file": "imagenes/cliente/IMG_7510.webp"
  },
  {
    "index": 345,
    "file": "imagenes/cliente/IMG_7512.webp"
  },
  {
    "index": 346,
    "file": "imagenes/cliente/IMG_7513.webp"
  },
  {
    "index": 347,
    "file": "imagenes/cliente/IMG_7515.webp"
  },
  {
    "index": 348,
    "file": "imagenes/cliente/IMG_7518.webp"
  },
  {
    "index": 349,
    "file": "imagenes/cliente/IMG_7520.webp"
  },
  {
    "index": 350,
    "file": "imagenes/cliente/IMG_7522.webp"
  },
  {
    "index": 351,
    "file": "imagenes/cliente/IMG_7526.webp"
  },
  {
    "index": 352,
    "file": "imagenes/cliente/IMG_7528.webp"
  },
  {
    "index": 353,
    "file": "imagenes/cliente/IMG_7531.webp"
  },
  {
    "index": 354,
    "file": "imagenes/cliente/IMG_7533.webp"
  },
  {
    "index": 355,
    "file": "imagenes/cliente/IMG_7535.webp"
  },
  {
    "index": 356,
    "file": "imagenes/cliente/IMG_7538.webp"
  },
  {
    "index": 357,
    "file": "imagenes/cliente/IMG_7541.webp"
  },
  {
    "index": 358,
    "file": "imagenes/cliente/IMG_7542.webp"
  },
  {
    "index": 359,
    "file": "imagenes/cliente/IMG_7543.webp"
  },
  {
    "index": 360,
    "file": "imagenes/cliente/IMG_7544.webp"
  },
  {
    "index": 361,
    "file": "imagenes/cliente/IMG_7546.webp"
  },
  {
    "index": 362,
    "file": "imagenes/cliente/IMG_7548.webp"
  },
  {
    "index": 363,
    "file": "imagenes/cliente/IMG_7550.webp"
  },
  {
    "index": 364,
    "file": "imagenes/cliente/IMG_7554.webp"
  },
  {
    "index": 365,
    "file": "imagenes/cliente/IMG_7555.webp"
  },
  {
    "index": 366,
    "file": "imagenes/cliente/IMG_7556.webp"
  },
  {
    "index": 367,
    "file": "imagenes/cliente/IMG_7558.webp"
  },
  {
    "index": 368,
    "file": "imagenes/cliente/IMG_7559.webp"
  },
  {
    "index": 369,
    "file": "imagenes/cliente/IMG_7561.webp"
  },
  {
    "index": 370,
    "file": "imagenes/cliente/IMG_7563.webp"
  },
  {
    "index": 371,
    "file": "imagenes/cliente/IMG_7565.webp"
  },
  {
    "index": 372,
    "file": "imagenes/cliente/IMG_7567.webp"
  },
  {
    "index": 373,
    "file": "imagenes/cliente/IMG_7569.webp"
  },
  {
    "index": 374,
    "file": "imagenes/cliente/IMG_7570.webp"
  },
  {
    "index": 375,
    "file": "imagenes/cliente/IMG_7573.webp"
  },
  {
    "index": 376,
    "file": "imagenes/cliente/IMG_7574.webp"
  },
  {
    "index": 377,
    "file": "imagenes/cliente/IMG_7576.webp"
  },
  {
    "index": 378,
    "file": "imagenes/cliente/IMG_7579.webp"
  },
  {
    "index": 379,
    "file": "imagenes/cliente/IMG_7581.webp"
  },
  {
    "index": 380,
    "file": "imagenes/cliente/IMG_7583.webp"
  },
  {
    "index": 381,
    "file": "imagenes/cliente/IMG_7585.webp"
  },
  {
    "index": 382,
    "file": "imagenes/cliente/IMG_7588.webp"
  },
  {
    "index": 383,
    "file": "imagenes/cliente/IMG_7590.webp"
  },
  {
    "index": 384,
    "file": "imagenes/cliente/IMG_7593.webp"
  },
  {
    "index": 385,
    "file": "imagenes/cliente/IMG_7596.webp"
  },
  {
    "index": 386,
    "file": "imagenes/cliente/IMG_7599.webp"
  },
  {
    "index": 387,
    "file": "imagenes/cliente/IMG_7603.webp"
  },
  {
    "index": 388,
    "file": "imagenes/cliente/IMG_7605.webp"
  },
  {
    "index": 389,
    "file": "imagenes/cliente/IMG_7607.webp"
  },
  {
    "index": 390,
    "file": "imagenes/cliente/IMG_7610.webp"
  },
  {
    "index": 391,
    "file": "imagenes/cliente/IMG_7612.webp"
  },
  {
    "index": 392,
    "file": "imagenes/cliente/IMG_7613.webp"
  },
  {
    "index": 393,
    "file": "imagenes/cliente/IMG_7616.webp"
  },
  {
    "index": 394,
    "file": "imagenes/cliente/IMG_7618.webp"
  },
  {
    "index": 395,
    "file": "imagenes/cliente/IMG_7621.webp"
  },
  {
    "index": 396,
    "file": "imagenes/cliente/IMG_7624.webp"
  },
  {
    "index": 397,
    "file": "imagenes/cliente/IMG_7626.webp"
  },
  {
    "index": 398,
    "file": "imagenes/cliente/IMG_7628.webp"
  },
  {
    "index": 399,
    "file": "imagenes/cliente/IMG_7631.webp"
  },
  {
    "index": 400,
    "file": "imagenes/cliente/IMG_7633.webp"
  },
  {
    "index": 401,
    "file": "imagenes/cliente/IMG_7635.webp"
  },
  {
    "index": 402,
    "file": "imagenes/cliente/IMG_7638.webp"
  },
  {
    "index": 403,
    "file": "imagenes/cliente/IMG_7641.webp"
  },
  {
    "index": 404,
    "file": "imagenes/cliente/IMG_7643.webp"
  },
  {
    "index": 405,
    "file": "imagenes/cliente/IMG_7644.webp"
  },
  {
    "index": 406,
    "file": "imagenes/cliente/IMG_7650.webp"
  },
  {
    "index": 407,
    "file": "imagenes/cliente/IMG_7652.webp"
  },
  {
    "index": 408,
    "file": "imagenes/cliente/IMG_7659.webp"
  },
  {
    "index": 409,
    "file": "imagenes/cliente/IMG_7660.webp"
  },
  {
    "index": 410,
    "file": "imagenes/cliente/IMG_7666.webp"
  },
  {
    "index": 411,
    "file": "imagenes/cliente/IMG_7669.webp"
  },
  {
    "index": 412,
    "file": "imagenes/cliente/IMG_7674.webp"
  },
  {
    "index": 413,
    "file": "imagenes/cliente/IMG_7676.webp"
  },
  {
    "index": 414,
    "file": "imagenes/cliente/IMG_7680.webp"
  },
  {
    "index": 415,
    "file": "imagenes/cliente/IMG_7681.webp"
  },
  {
    "index": 416,
    "file": "imagenes/cliente/IMG_7686.webp"
  },
  {
    "index": 417,
    "file": "imagenes/cliente/IMG_7692.webp"
  },
  {
    "index": 418,
    "file": "imagenes/cliente/IMG_7700.webp"
  },
  {
    "index": 419,
    "file": "imagenes/cliente/IMG_7701.webp"
  },
  {
    "index": 420,
    "file": "imagenes/cliente/IMG_7705.webp"
  },
  {
    "index": 421,
    "file": "imagenes/cliente/IMG_7707.webp"
  },
  {
    "index": 422,
    "file": "imagenes/cliente/IMG_7711.webp"
  },
  {
    "index": 423,
    "file": "imagenes/cliente/IMG_7712.webp"
  },
  {
    "index": 424,
    "file": "imagenes/cliente/IMG_7717.webp"
  },
  {
    "index": 425,
    "file": "imagenes/cliente/IMG_7719.webp"
  },
  {
    "index": 426,
    "file": "imagenes/cliente/IMG_7725.webp"
  },
  {
    "index": 427,
    "file": "imagenes/cliente/IMG_7726.webp"
  },
  {
    "index": 428,
    "file": "imagenes/cliente/IMG_7731.webp"
  },
  {
    "index": 429,
    "file": "imagenes/cliente/IMG_7737.webp"
  },
  {
    "index": 430,
    "file": "imagenes/cliente/IMG_7738.webp"
  },
  {
    "index": 431,
    "file": "imagenes/cliente/IMG_7742.webp"
  },
  {
    "index": 432,
    "file": "imagenes/cliente/IMG_7743.webp"
  },
  {
    "index": 433,
    "file": "imagenes/cliente/IMG_7749.webp"
  },
  {
    "index": 434,
    "file": "imagenes/cliente/IMG_7760.webp"
  },
  {
    "index": 435,
    "file": "imagenes/cliente/IMG_7761.webp"
  },
  {
    "index": 436,
    "file": "imagenes/cliente/IMG_7820.webp"
  },
  {
    "index": 437,
    "file": "imagenes/cliente/IMG_7822.webp"
  },
  {
    "index": 438,
    "file": "imagenes/cliente/IMG_7826.webp"
  },
  {
    "index": 439,
    "file": "imagenes/cliente/IMG_7832.webp"
  },
  {
    "index": 440,
    "file": "imagenes/cliente/IMG_7842.webp"
  },
  {
    "index": 441,
    "file": "imagenes/cliente/IMG_7843.webp"
  },
  {
    "index": 442,
    "file": "imagenes/cliente/IMG_7851.webp"
  },
  {
    "index": 443,
    "file": "imagenes/cliente/IMG_7854.webp"
  },
  {
    "index": 444,
    "file": "imagenes/cliente/IMG_7859.webp"
  },
  {
    "index": 445,
    "file": "imagenes/cliente/IMG_7861.webp"
  },
  {
    "index": 446,
    "file": "imagenes/cliente/IMG_7866.webp"
  },
  {
    "index": 447,
    "file": "imagenes/cliente/IMG_7867.webp"
  },
  {
    "index": 448,
    "file": "imagenes/cliente/IMG_7872.webp"
  },
  {
    "index": 449,
    "file": "imagenes/cliente/IMG_7873.webp"
  },
  {
    "index": 450,
    "file": "imagenes/cliente/IMG_7877.webp"
  },
  {
    "index": 451,
    "file": "imagenes/cliente/IMG_7879.webp"
  },
  {
    "index": 452,
    "file": "imagenes/cliente/IMG_7884.webp"
  },
  {
    "index": 453,
    "file": "imagenes/cliente/IMG_7887.webp"
  },
  {
    "index": 454,
    "file": "imagenes/cliente/IMG_7891.webp"
  },
  {
    "index": 455,
    "file": "imagenes/cliente/IMG_7894.webp"
  },
  {
    "index": 456,
    "file": "imagenes/cliente/IMG_7899.webp"
  },
  {
    "index": 457,
    "file": "imagenes/cliente/IMG_7901.webp"
  },
  {
    "index": 458,
    "file": "imagenes/cliente/IMG_7905.webp"
  },
  {
    "index": 459,
    "file": "imagenes/cliente/IMG_7908.webp"
  },
  {
    "index": 460,
    "file": "imagenes/cliente/IMG_7912.webp"
  },
  {
    "index": 461,
    "file": "imagenes/cliente/IMG_7913.webp"
  },
  {
    "index": 462,
    "file": "imagenes/cliente/IMG_7920.webp"
  },
  {
    "index": 463,
    "file": "imagenes/cliente/IMG_7927.webp"
  },
  {
    "index": 464,
    "file": "imagenes/cliente/IMG_7935.webp"
  },
  {
    "index": 465,
    "file": "imagenes/cliente/IMG_7937.webp"
  },
  {
    "index": 466,
    "file": "imagenes/cliente/IMG_7938.webp"
  },
  {
    "index": 467,
    "file": "imagenes/cliente/IMG_7940.webp"
  },
  {
    "index": 468,
    "file": "imagenes/cliente/IMG_7943.webp"
  },
  {
    "index": 469,
    "file": "imagenes/cliente/IMG_7946.webp"
  },
  {
    "index": 470,
    "file": "imagenes/cliente/IMG_7947.webp"
  },
  {
    "index": 471,
    "file": "imagenes/cliente/IMG_7949.webp"
  },
  {
    "index": 472,
    "file": "imagenes/cliente/IMG_7952.webp"
  },
  {
    "index": 473,
    "file": "imagenes/cliente/IMG_7954.webp"
  },
  {
    "index": 474,
    "file": "imagenes/cliente/IMG_7956.webp"
  },
  {
    "index": 475,
    "file": "imagenes/cliente/IMG_7957.webp"
  },
  {
    "index": 476,
    "file": "imagenes/cliente/IMG_7959.webp"
  },
  {
    "index": 477,
    "file": "imagenes/cliente/IMG_7961.webp"
  },
  {
    "index": 478,
    "file": "imagenes/cliente/IMG_7964.webp"
  },
  {
    "index": 479,
    "file": "imagenes/cliente/IMG_7965.webp"
  },
  {
    "index": 480,
    "file": "imagenes/cliente/IMG_7968.webp"
  },
  {
    "index": 481,
    "file": "imagenes/cliente/IMG_7970.webp"
  },
  {
    "index": 482,
    "file": "imagenes/cliente/IMG_7972.webp"
  },
  {
    "index": 483,
    "file": "imagenes/cliente/IMG_7974.webp"
  },
  {
    "index": 484,
    "file": "imagenes/cliente/IMG_7977.webp"
  },
  {
    "index": 485,
    "file": "imagenes/cliente/IMG_7979.webp"
  },
  {
    "index": 486,
    "file": "imagenes/cliente/IMG_7981.webp"
  },
  {
    "index": 487,
    "file": "imagenes/cliente/IMG_7983.webp"
  },
  {
    "index": 488,
    "file": "imagenes/cliente/IMG_7984.webp"
  },
  {
    "index": 489,
    "file": "imagenes/cliente/IMG_7985.webp"
  },
  {
    "index": 490,
    "file": "imagenes/cliente/IMG_7987.webp"
  },
  {
    "index": 491,
    "file": "imagenes/cliente/IMG_7989.webp"
  },
  {
    "index": 492,
    "file": "imagenes/cliente/IMG_7991.webp"
  },
  {
    "index": 493,
    "file": "imagenes/cliente/IMG_7993.webp"
  },
  {
    "index": 494,
    "file": "imagenes/cliente/IMG_7996.webp"
  },
  {
    "index": 495,
    "file": "imagenes/cliente/IMG_7999.webp"
  },
  {
    "index": 496,
    "file": "imagenes/cliente/IMG_8001.webp"
  },
  {
    "index": 497,
    "file": "imagenes/cliente/IMG_8004.webp"
  },
  {
    "index": 498,
    "file": "imagenes/cliente/IMG_8006.webp"
  },
  {
    "index": 499,
    "file": "imagenes/cliente/IMG_8009.webp"
  },
  {
    "index": 500,
    "file": "imagenes/cliente/IMG_8011.webp"
  },
  {
    "index": 501,
    "file": "imagenes/cliente/IMG_8013.webp"
  },
  {
    "index": 502,
    "file": "imagenes/cliente/IMG_8014.webp"
  },
  {
    "index": 503,
    "file": "imagenes/cliente/IMG_8016.webp"
  },
  {
    "index": 504,
    "file": "imagenes/cliente/IMG_8017.webp"
  },
  {
    "index": 505,
    "file": "imagenes/cliente/IMG_8020.webp"
  },
  {
    "index": 506,
    "file": "imagenes/cliente/IMG_8023.webp"
  },
  {
    "index": 507,
    "file": "imagenes/cliente/IMG_8024.webp"
  },
  {
    "index": 508,
    "file": "imagenes/cliente/IMG_8028.webp"
  },
  {
    "index": 509,
    "file": "imagenes/cliente/IMG_8030.webp"
  },
  {
    "index": 510,
    "file": "imagenes/cliente/IMG_8032.webp"
  },
  {
    "index": 511,
    "file": "imagenes/cliente/IMG_8034.webp"
  },
  {
    "index": 512,
    "file": "imagenes/cliente/IMG_8036.webp"
  },
  {
    "index": 513,
    "file": "imagenes/cliente/IMG_8037.webp"
  },
  {
    "index": 514,
    "file": "imagenes/cliente/IMG_8039.webp"
  },
  {
    "index": 515,
    "file": "imagenes/cliente/IMG_8044.webp"
  },
  {
    "index": 516,
    "file": "imagenes/cliente/IMG_8046.webp"
  },
  {
    "index": 517,
    "file": "imagenes/cliente/IMG_8048.webp"
  },
  {
    "index": 518,
    "file": "imagenes/cliente/IMG_8049.webp"
  },
  {
    "index": 519,
    "file": "imagenes/cliente/IMG_8052.webp"
  },
  {
    "index": 520,
    "file": "imagenes/cliente/IMG_8054.webp"
  },
  {
    "index": 521,
    "file": "imagenes/cliente/IMG_8058.webp"
  },
  {
    "index": 522,
    "file": "imagenes/cliente/IMG_8059.webp"
  },
  {
    "index": 523,
    "file": "imagenes/cliente/IMG_8061.webp"
  },
  {
    "index": 524,
    "file": "imagenes/cliente/IMG_8064.webp"
  },
  {
    "index": 525,
    "file": "imagenes/cliente/IMG_8066.webp"
  },
  {
    "index": 526,
    "file": "imagenes/cliente/IMG_8068.webp"
  },
  {
    "index": 527,
    "file": "imagenes/cliente/IMG_8070.webp"
  },
  {
    "index": 528,
    "file": "imagenes/cliente/IMG_8072.webp"
  },
  {
    "index": 529,
    "file": "imagenes/cliente/IMG_8073.webp"
  },
  {
    "index": 530,
    "file": "imagenes/cliente/IMG_8076.webp"
  },
  {
    "index": 531,
    "file": "imagenes/cliente/IMG_8078.webp"
  },
  {
    "index": 532,
    "file": "imagenes/cliente/IMG_8081.webp"
  },
  {
    "index": 533,
    "file": "imagenes/cliente/IMG_8083.webp"
  },
  {
    "index": 534,
    "file": "imagenes/cliente/IMG_8086.webp"
  },
  {
    "index": 535,
    "file": "imagenes/cliente/IMG_8088.webp"
  },
  {
    "index": 536,
    "file": "imagenes/cliente/IMG_8090.webp"
  },
  {
    "index": 537,
    "file": "imagenes/cliente/IMG_8093.webp"
  },
  {
    "index": 538,
    "file": "imagenes/cliente/IMG_8096.webp"
  },
  {
    "index": 539,
    "file": "imagenes/cliente/IMG_8099.webp"
  },
  {
    "index": 540,
    "file": "imagenes/cliente/IMG_8101.webp"
  },
  {
    "index": 541,
    "file": "imagenes/cliente/IMG_8105.webp"
  },
  {
    "index": 542,
    "file": "imagenes/cliente/IMG_8107.webp"
  },
  {
    "index": 543,
    "file": "imagenes/cliente/IMG_8109.webp"
  },
  {
    "index": 544,
    "file": "imagenes/cliente/IMG_8111.webp"
  },
  {
    "index": 545,
    "file": "imagenes/cliente/IMG_8114.webp"
  },
  {
    "index": 546,
    "file": "imagenes/cliente/IMG_8117.webp"
  },
  {
    "index": 547,
    "file": "imagenes/cliente/IMG_8120.webp"
  },
  {
    "index": 548,
    "file": "imagenes/cliente/IMG_8122.webp"
  },
  {
    "index": 549,
    "file": "imagenes/cliente/IMG_8124.webp"
  },
  {
    "index": 550,
    "file": "imagenes/cliente/IMG_8125.webp"
  },
  {
    "index": 551,
    "file": "imagenes/cliente/IMG_8127.webp"
  },
  {
    "index": 552,
    "file": "imagenes/cliente/IMG_8130.webp"
  },
  {
    "index": 553,
    "file": "imagenes/cliente/IMG_8131.webp"
  },
  {
    "index": 554,
    "file": "imagenes/cliente/IMG_8134.webp"
  },
  {
    "index": 555,
    "file": "imagenes/cliente/IMG_8137.webp"
  },
  {
    "index": 556,
    "file": "imagenes/cliente/IMG_8139.webp"
  },
  {
    "index": 557,
    "file": "imagenes/cliente/IMG_8142.webp"
  },
  {
    "index": 558,
    "file": "imagenes/cliente/IMG_8144.webp"
  },
  {
    "index": 559,
    "file": "imagenes/cliente/IMG_8146.webp"
  },
  {
    "index": 560,
    "file": "imagenes/cliente/IMG_8148.webp"
  },
  {
    "index": 561,
    "file": "imagenes/cliente/IMG_8150.webp"
  },
  {
    "index": 562,
    "file": "imagenes/cliente/IMG_8152.webp"
  },
  {
    "index": 563,
    "file": "imagenes/cliente/IMG_8155.webp"
  },
  {
    "index": 564,
    "file": "imagenes/cliente/IMG_8158.webp"
  },
  {
    "index": 565,
    "file": "imagenes/cliente/IMG_8159.webp"
  },
  {
    "index": 566,
    "file": "imagenes/cliente/IMG_8161.webp"
  },
  {
    "index": 567,
    "file": "imagenes/cliente/IMG_8163.webp"
  },
  {
    "index": 568,
    "file": "imagenes/cliente/IMG_8165.webp"
  },
  {
    "index": 569,
    "file": "imagenes/cliente/IMG_8167.webp"
  },
  {
    "index": 570,
    "file": "imagenes/cliente/IMG_8168.webp"
  },
  {
    "index": 571,
    "file": "imagenes/cliente/IMG_8170.webp"
  },
  {
    "index": 572,
    "file": "imagenes/cliente/IMG_8172.webp"
  },
  {
    "index": 573,
    "file": "imagenes/cliente/IMG_8174.webp"
  },
  {
    "index": 574,
    "file": "imagenes/cliente/IMG_8177.webp"
  },
  {
    "index": 575,
    "file": "imagenes/cliente/IMG_8178.webp"
  },
  {
    "index": 576,
    "file": "imagenes/cliente/IMG_8180.webp"
  },
  {
    "index": 577,
    "file": "imagenes/cliente/IMG_8182.webp"
  },
  {
    "index": 578,
    "file": "imagenes/cliente/IMG_8184.webp"
  },
  {
    "index": 579,
    "file": "imagenes/cliente/IMG_8185.webp"
  },
  {
    "index": 580,
    "file": "imagenes/cliente/IMG_8187.webp"
  },
  {
    "index": 581,
    "file": "imagenes/cliente/IMG_8189.webp"
  },
  {
    "index": 582,
    "file": "imagenes/cliente/IMG_8191.webp"
  },
  {
    "index": 583,
    "file": "imagenes/cliente/IMG_8192.webp"
  },
  {
    "index": 584,
    "file": "imagenes/cliente/IMG_8194.webp"
  },
  {
    "index": 585,
    "file": "imagenes/cliente/IMG_8196.webp"
  },
  {
    "index": 586,
    "file": "imagenes/cliente/IMG_8197.webp"
  },
  {
    "index": 587,
    "file": "imagenes/cliente/IMG_8199.webp"
  },
  {
    "index": 588,
    "file": "imagenes/cliente/IMG_8201.webp"
  },
  {
    "index": 589,
    "file": "imagenes/cliente/IMG_8204.webp"
  },
  {
    "index": 590,
    "file": "imagenes/cliente/IMG_8207.webp"
  },
  {
    "index": 591,
    "file": "imagenes/cliente/IMG_8208.webp"
  },
  {
    "index": 592,
    "file": "imagenes/cliente/IMG_8210.webp"
  },
  {
    "index": 593,
    "file": "imagenes/cliente/IMG_8212.webp"
  },
  {
    "index": 594,
    "file": "imagenes/cliente/IMG_8214.webp"
  },
  {
    "index": 595,
    "file": "imagenes/cliente/IMG_8215.webp"
  },
  {
    "index": 596,
    "file": "imagenes/cliente/IMG_8217.webp"
  },
  {
    "index": 597,
    "file": "imagenes/cliente/IMG_8219.webp"
  },
  {
    "index": 598,
    "file": "imagenes/cliente/IMG_8221.webp"
  },
  {
    "index": 599,
    "file": "imagenes/cliente/IMG_8224.webp"
  },
  {
    "index": 600,
    "file": "imagenes/cliente/IMG_8226.webp"
  },
  {
    "index": 601,
    "file": "imagenes/cliente/IMG_8229.webp"
  },
  {
    "index": 602,
    "file": "imagenes/cliente/IMG_8231.webp"
  },
  {
    "index": 603,
    "file": "imagenes/cliente/IMG_8234.webp"
  },
  {
    "index": 604,
    "file": "imagenes/cliente/IMG_8236.webp"
  },
  {
    "index": 605,
    "file": "imagenes/cliente/IMG_8238.webp"
  },
  {
    "index": 606,
    "file": "imagenes/cliente/IMG_8240.webp"
  },
  {
    "index": 607,
    "file": "imagenes/cliente/IMG_8242.webp"
  },
  {
    "index": 608,
    "file": "imagenes/cliente/IMG_8244.webp"
  },
  {
    "index": 609,
    "file": "imagenes/cliente/IMG_8247.webp"
  },
  {
    "index": 610,
    "file": "imagenes/cliente/IMG_8249.webp"
  },
  {
    "index": 611,
    "file": "imagenes/cliente/IMG_8252.webp"
  },
  {
    "index": 612,
    "file": "imagenes/cliente/IMG_8253.webp"
  },
  {
    "index": 613,
    "file": "imagenes/cliente/IMG_8256.webp"
  },
  {
    "index": 614,
    "file": "imagenes/cliente/IMG_8258.webp"
  },
  {
    "index": 615,
    "file": "imagenes/cliente/IMG_8260.webp"
  },
  {
    "index": 616,
    "file": "imagenes/cliente/IMG_8262.webp"
  },
  {
    "index": 617,
    "file": "imagenes/cliente/IMG_8264.webp"
  },
  {
    "index": 618,
    "file": "imagenes/cliente/IMG_8267.webp"
  },
  {
    "index": 619,
    "file": "imagenes/cliente/IMG_8269.webp"
  },
  {
    "index": 620,
    "file": "imagenes/cliente/IMG_8272.webp"
  },
  {
    "index": 621,
    "file": "imagenes/cliente/IMG_8274.webp"
  },
  {
    "index": 622,
    "file": "imagenes/cliente/IMG_8277.webp"
  },
  {
    "index": 623,
    "file": "imagenes/cliente/IMG_8280.webp"
  },
  {
    "index": 624,
    "file": "imagenes/cliente/IMG_8282.webp"
  },
  {
    "index": 625,
    "file": "imagenes/cliente/IMG_8285.webp"
  },
  {
    "index": 626,
    "file": "imagenes/cliente/IMG_8287.webp"
  },
  {
    "index": 627,
    "file": "imagenes/cliente/IMG_8290.webp"
  },
  {
    "index": 628,
    "file": "imagenes/cliente/IMG_8293.webp"
  },
  {
    "index": 629,
    "file": "imagenes/cliente/IMG_8296.webp"
  },
  {
    "index": 630,
    "file": "imagenes/cliente/IMG_8299.webp"
  },
  {
    "index": 631,
    "file": "imagenes/cliente/IMG_8301.webp"
  },
  {
    "index": 632,
    "file": "imagenes/cliente/IMG_8304.webp"
  },
  {
    "index": 633,
    "file": "imagenes/cliente/IMG_8307.webp"
  },
  {
    "index": 634,
    "file": "imagenes/cliente/IMG_8310.webp"
  },
  {
    "index": 635,
    "file": "imagenes/cliente/IMG_8314.webp"
  },
  {
    "index": 636,
    "file": "imagenes/cliente/IMG_8318.webp"
  },
  {
    "index": 637,
    "file": "imagenes/cliente/IMG_8321.webp"
  },
  {
    "index": 638,
    "file": "imagenes/cliente/IMG_8323.webp"
  },
  {
    "index": 639,
    "file": "imagenes/cliente/IMG_8325.webp"
  },
  {
    "index": 640,
    "file": "imagenes/cliente/IMG_8327.webp"
  },
  {
    "index": 641,
    "file": "imagenes/cliente/IMG_8328.webp"
  },
  {
    "index": 642,
    "file": "imagenes/cliente/IMG_8330.webp"
  },
  {
    "index": 643,
    "file": "imagenes/cliente/IMG_8332.webp"
  },
  {
    "index": 644,
    "file": "imagenes/cliente/IMG_8334.webp"
  },
  {
    "index": 645,
    "file": "imagenes/cliente/IMG_8335.webp"
  },
  {
    "index": 646,
    "file": "imagenes/cliente/IMG_8337.webp"
  },
  {
    "index": 647,
    "file": "imagenes/cliente/IMG_8340.webp"
  },
  {
    "index": 648,
    "file": "imagenes/cliente/IMG_8342.webp"
  },
  {
    "index": 649,
    "file": "imagenes/cliente/IMG_8344.webp"
  },
  {
    "index": 650,
    "file": "imagenes/cliente/IMG_8347.webp"
  },
  {
    "index": 651,
    "file": "imagenes/cliente/IMG_8350.webp"
  },
  {
    "index": 652,
    "file": "imagenes/cliente/IMG_8351.webp"
  },
  {
    "index": 653,
    "file": "imagenes/cliente/IMG_8353.webp"
  },
  {
    "index": 654,
    "file": "imagenes/cliente/IMG_8355.webp"
  },
  {
    "index": 655,
    "file": "imagenes/cliente/IMG_8357.webp"
  },
  {
    "index": 656,
    "file": "imagenes/cliente/IMG_8358.webp"
  },
  {
    "index": 657,
    "file": "imagenes/cliente/IMG_8360.webp"
  },
  {
    "index": 658,
    "file": "imagenes/cliente/IMG_8362.webp"
  },
  {
    "index": 659,
    "file": "imagenes/cliente/IMG_8365.webp"
  },
  {
    "index": 660,
    "file": "imagenes/cliente/IMG_8367.webp"
  },
  {
    "index": 661,
    "file": "imagenes/cliente/IMG_8368.webp"
  },
  {
    "index": 662,
    "file": "imagenes/cliente/IMG_8370.webp"
  },
  {
    "index": 663,
    "file": "imagenes/cliente/IMG_8372.webp"
  },
  {
    "index": 664,
    "file": "imagenes/cliente/IMG_8374.webp"
  },
  {
    "index": 665,
    "file": "imagenes/cliente/IMG_8375.webp"
  },
  {
    "index": 666,
    "file": "imagenes/cliente/IMG_8376.webp"
  },
  {
    "index": 667,
    "file": "imagenes/cliente/IMG_8378.webp"
  },
  {
    "index": 668,
    "file": "imagenes/cliente/IMG_8380.webp"
  },
  {
    "index": 669,
    "file": "imagenes/cliente/IMG_8382.webp"
  },
  {
    "index": 670,
    "file": "imagenes/cliente/IMG_8383.webp"
  },
  {
    "index": 671,
    "file": "imagenes/cliente/IMG_8385.webp"
  },
  {
    "index": 672,
    "file": "imagenes/cliente/IMG_8387.webp"
  },
  {
    "index": 673,
    "file": "imagenes/cliente/IMG_8389.webp"
  },
  {
    "index": 674,
    "file": "imagenes/cliente/IMG_8392.webp"
  },
  {
    "index": 675,
    "file": "imagenes/cliente/IMG_8394.webp"
  },
  {
    "index": 676,
    "file": "imagenes/cliente/IMG_8395.webp"
  },
  {
    "index": 677,
    "file": "imagenes/cliente/IMG_8397.webp"
  },
  {
    "index": 678,
    "file": "imagenes/cliente/IMG_8399.webp"
  },
  {
    "index": 679,
    "file": "imagenes/cliente/IMG_8402.webp"
  },
  {
    "index": 680,
    "file": "imagenes/cliente/IMG_8404.webp"
  },
  {
    "index": 681,
    "file": "imagenes/cliente/IMG_8406.webp"
  },
  {
    "index": 682,
    "file": "imagenes/cliente/IMG_8407.webp"
  },
  {
    "index": 683,
    "file": "imagenes/cliente/IMG_8409.webp"
  },
  {
    "index": 684,
    "file": "imagenes/cliente/IMG_8413.webp"
  },
  {
    "index": 685,
    "file": "imagenes/cliente/IMG_8414.webp"
  },
  {
    "index": 686,
    "file": "imagenes/cliente/IMG_8418.webp"
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
