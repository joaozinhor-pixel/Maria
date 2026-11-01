// ===== EDITE AQUI =====
const TITULO='Faltam para o show do Frei Gilson em Maceió';  // texto de cima
const DATA='2027-07-10T00:00:00';  // dia do show (o horário ainda não foi informado)
// ======================
const CORES=['#e8f1ff','#fdf3d1','#cfe3fa','#f3dca0','#b8e0f2','#fbe9a6'];
const titulo=document.getElementById('titulo'),relogio=document.getElementById('relogio');
titulo.textContent=TITULO;
let c=0;
setInterval(()=>{c=(c+1)%CORES.length;document.body.style.background=CORES[c];},5000);
function pad(n){return String(n).padStart(2,'0');}
function tick(){
  const s=Math.floor((new Date(DATA)-new Date())/1000);
  if(isNaN(s))return relogio.textContent='Data inválida';
  if(s<=0){titulo.textContent='';return relogio.innerHTML='<h1>Chegou o dia! 🎉💜</h1>';}
  const v=[['dias',Math.floor(s/86400)],['horas',Math.floor(s%86400/3600)],['min',Math.floor(s%3600/60)],['seg',s%60]];
  relogio.innerHTML=v.map(([n,x])=>'<div class="bloco"><b>'+pad(x)+'</b>'+n+'</div>').join('');
}
tick();setInterval(tick,1000);
