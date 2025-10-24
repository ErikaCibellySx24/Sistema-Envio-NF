import React, { useState, useEffect } from 'react';
import { getCredentials, updateCredentials } from '../services/api.jsx';


export default function PaginaCredenciais() {
const [creds, setCreds] = useState({ host: '', port: '', user: '', pass: '', secure: false });


useEffect(() => {
getCredentials().then(setCreds);
}, []);


const handleChange = (e) => setCreds({...creds, [e.target.name]: e.target.value });


const handleSubmit = async () => {
await updateCredentials(creds);
alert('Credenciais salvas!');
};


return (
<div>
<h2>Configuração de Credenciais SMTP</h2>
{Object.keys(creds).map(key => (
<div key={key}>
<label>{key}</label>
<input name={key} value={creds[key]} onChange={handleChange} />
</div>
))}
<button onClick={handleSubmit}>Salvar</button>
</div>
);
}