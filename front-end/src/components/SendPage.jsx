import React, { useState } from 'react';
import { sendDocuments } from '../services/api.jsx';


export default function SendPage() {
const [orgao, setOrgao] = useState('');
const [contrato, setContrato] = useState('');
const [competencia, setCompetencia] = useState('');
const [usuario, setUsuario] = useState('');
const [to, setTo] = useState('');


const handleSend = async () => {
const payload = { orgao, contrato, competencia, usuario, to: [to] };
const res = await sendDocuments(payload);
if(res.success) alert('E-mail enviado com sucesso!');
else alert(res.suggestion);
};


return (
<div>
<input placeholder="Órgão" value={orgao} onChange={e => setOrgao(e.target.value)} />
<input placeholder="Contrato" value={contrato} onChange={e => setContrato(e.target.value)} />
<input placeholder="Competência" value={competencia} onChange={e => setCompetencia(e.target.value)} />
<input placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
<input placeholder="Destinatário" value={to} onChange={e => setTo(e.target.value)} />
<button onClick={handleSend}>Enviar Documentos</button>
</div>
);
}