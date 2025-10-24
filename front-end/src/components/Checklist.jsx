import React, { useState, useEffect } from 'react';
import { getCredentials, updateCredentials } from '../services/api.jsx';


export default function Checklist({ documentId }) {
const [items, setItems] = useState([]);


useEffect(() => {
getChecklist().then(data => setItems(data[0]?.checklist || []));
}, []);


const toggleCheck = (index) => {
const newItems = [...items];
newItems[index].checked = !newItems[index].checked;
setItems(newItems);
};


const saveChecklist = async () => {
await updateChecklist(documentId, items);
alert('Checklist atualizado!');
};


return (
<div>
<h3>Checklist</h3>
{items.map((item, i) => (
<div key={i}>
<input type="checkbox" checked={item.checked} onChange={() => toggleCheck(i)} /> {item.item}
</div>
))}
<button onClick={saveChecklist}>Salvar Checklist</button>
</div>
);
}