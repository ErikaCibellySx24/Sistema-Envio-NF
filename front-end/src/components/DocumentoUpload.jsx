import { useState } from 'react';
import axios from 'axios';


export default function DocumentUpload() {
const [orgao, setOrgao] = useState('');
const [contrato, setContrato] = useState('');
const [competencia, setCompetencia] = useState('');
const [usuario, setUsuario] = useState('');
const [files, setFiles] = useState([]);


const handleSubmit = async (e) => {
e.preventDefault();
const formData = new FormData();
files.forEach(f => formData.append('file', f));
formData.append('orgao', orgao);
formData.append('contrato', contrato);
formData.append('competencia', competencia);
formData.append('usuario', usuario);


await axios.post('http://localhost:3000/documents', formData);
alert('Documentos incluídos com sucesso!');
};


return (
<div className="p-6 bg-white rounded-2xl shadow">
<h2 className="text-xl font-bold mb-4">Inclusão de Documentos</h2>
<form onSubmit={handleSubmit} className="space-y-3">
<input className="border p-2 w-full" placeholder="Órgão" value={orgao} onChange={e => setOrgao(e.target.value)} />
<input className="border p-2 w-full" placeholder="Contrato" value={contrato} onChange={e => setContrato(e.target.value)} />
<input className="border p-2 w-full" placeholder="Competência (YYYY-MM)" value={competencia} onChange={e => setCompetencia(e.target.value)} />
<input className="border p-2 w-full" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
<input type="file" multiple accept="application/pdf" onChange={e => setFiles(Array.from(e.target.files))} />
<button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">Enviar</button>
</form>
</div>
);
}