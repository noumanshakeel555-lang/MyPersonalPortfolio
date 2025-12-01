document.getElementById('fbForm').addEventListener('submit', async e => {
e.preventDefault();
const ok = document.getElementById('ok'), bad = document.getElementById('bad');
ok.style.display = bad.style.display = 'none';
const data = new FormData(e.target);
data.append('_subject', 'New portfolio feedback');
data.append('_template', 'table');
try {
const r = await fetch('https://formsubmit.co/ajax/nouman.shakeel161@gmail.com',
{method:'POST', body:data});
if (!r.ok) throw new Error('Network');
ok.style.display = 'block';
e.target.reset();
ok.scrollIntoView({behavior:'smooth', block:'center'});
} catch (err) {
bad.style.display = 'block';
}
});