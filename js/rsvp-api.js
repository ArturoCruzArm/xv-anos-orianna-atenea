// Shared response validation: HTTP success alone does not prove a row was saved.
(function () {
    async function request(url, options = {}) {
        const method = (options.method || 'GET').toUpperCase();
        const writing = ['POST', 'PATCH', 'DELETE'].includes(method);
        const headers = { ...options.headers };
        if (writing) headers.Prefer = 'return=representation';
        const response = await fetch(url, { ...options, headers });
        if (!response.ok) throw new Error(`No se pudo completar la operación (${response.status}). Intenta de nuevo.`);
        const rows = await response.clone().json();
        if (!Array.isArray(rows)) throw new Error('El servidor devolvió una respuesta no válida.');
        if (writing) {
            const body = options.body ? JSON.parse(options.body) : null;
            const table = new URL(url).pathname.split('/').pop();
            const expected = method === 'POST' ? (Array.isArray(body) ? body.length : 1)
                : (method === 'PATCH' || table === 'invitados' ? 1 : null);
            if (expected !== null && (rows.length !== expected || rows.some(row => !row.id))) {
                throw new Error('No se pudo verificar el registro guardado. Revisa los datos e intenta de nuevo.');
            }
        }
        return response;
    }
    window.RsvpApi = { request };
})();
