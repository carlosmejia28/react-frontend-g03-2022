const BASE_URL = "http://129.213.43.131:8080/"


export async function listaAgendas() {
    const options = { method: 'GET' };
    const res = await fetch(BASE_URL + 'agendas', options);
    return await res.json();
};

export async function guardarAgenda(agenda) {
    const options = {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(agenda)
    };
    const res = await fetch(BASE_URL+"agendas", options);
    return await res.json();
};

export async function eliminarAgendaPorId(id) {
    const options = {method: 'DELETE'};
    const res = await fetch(BASE_URL+"agendas/"+id, options);
    return await res.text();
};

export async function findAllMedicos() {
    const res = await fetch(BASE_URL+"medicos");
    return await res.json();
};

export async function findAgendaById(id) {
    const res = await fetch(BASE_URL+"agendas/"+id);
    return await res.json();
};

export async function existPacienteByNdocumento(id) {
    const res = await fetch(BASE_URL+"pacientes/existe/query?ndocumento="+id);
    return await res.json();
};

export async function findPacienteByNdocumento(ndocumento) {
    const res = await fetch(BASE_URL+"pacientes/ndocumento/"+ndocumento);
    return await res.json();
};

export async function listPacientes() {
    const res = await fetch(BASE_URL+"pacientes");
    return await res.json();
}

export async function findPacienteById(id) {
    const res = await fetch(BASE_URL + "pacientes/"+id);
    return await res.json();
}

export async function deletePacienteById(id) {
    const options = { method: "DELETE" }
    const res = await fetch(BASE_URL +"pacientes/"+ id, options);
    return await res.text();
}

export async function savePaciente(paciente) {
    const options = {
        method: "POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(paciente)
    }
    const res = await fetch(BASE_URL+"pacientes/", options);
    return await res.text();
}


