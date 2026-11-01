const OPCOES=[
  {e:'🙏',t:'Convite para rezar o terço',u:'convite.html'},
  {e:'🌹',t:'Qual devoção de Nossa Senhora é você?',u:'quiz.html'},
  {e:'✝️',t:'A vida de Jesus em uma linha do tempo',u:'timeline.html'},
  {e:'⏳',t:'Contagem para o show do Frei Gilson',u:'contagem.html'},
  {e:'🃏',t:'Jogo da memória',u:'memoria.html'}
];
const menu=document.getElementById('menu');
OPCOES.forEach((o,i)=>{
  const a=document.createElement('a');
  a.className='op';a.href=o.u;
  a.innerHTML='<i>'+(i+1)+'</i><span>'+o.e+' '+o.t+'</span>';
  menu.appendChild(a);
});
addEventListener('keydown',e=>{const o=OPCOES[+e.key-1];if(o)location.href=o.u;});
