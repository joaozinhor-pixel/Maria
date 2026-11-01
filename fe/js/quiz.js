const R={
  apa:{e:'💙',n:'Nossa Senhora Aparecida',cor:'#2f5fa7',t:'Acolhedora e de fé firme: você é abrigo para quem está perto.'},
  fat:{e:'🕊️',n:'Nossa Senhora de Fátima',cor:'#cfe3fa',t:'Calma e esperançosa: você leva paz e confiança por onde passa.'},
  lou:{e:'💧',n:'Nossa Senhora de Lourdes',cor:'#b8e0f2',t:'Cuidadosa e humilde: você é quem acolhe e consola.'},
  gua:{e:'🌹',n:'Nossa Senhora de Guadalupe',cor:'#e9b6c4',t:'Carinhosa e alegre: você enche tudo de ternura e cor.'},
  ros:{e:'📿',n:'Nossa Senhora do Rosário',cor:'#f3dca0',t:'Perseverante e dedicada: você sustenta tudo com oração.'}
};
const Q=[
  ['Como você prefere rezar?',[['Em família','apa'],['Na igreja, na missa','fat'],['Em silêncio','lou'],['Cantando','gua'],['Com o terço na mão','ros']]],
  ['Qual é a sua maior qualidade?',[['Fé firme','apa'],['Esperança','fat'],['Humildade','lou'],['Alegria','gua'],['Perseverança','ros']]],
  ['Qual cor você prefere?',[['Azul','apa'],['Branco','fat'],['Azul-claro','lou'],['Rosa','gua'],['Dourado','ros']]],
  ['Como é o seu jeito com os outros?',[['Acolhedora','apa'],['Calma','fat'],['Cuidadosa','lou'],['Carinhosa','gua'],['Dedicada','ros']]],
  ['Qual lugar você escolhe?',[['Uma basílica','apa'],['Um campo aberto','fat'],['Uma gruta','lou'],['Um jardim de rosas','gua'],['Uma capela simples','ros']]]
];
function txt(h){const n=parseInt(h.slice(1),16),l=((n>>16)*299+((n>>8)&255)*587+(n&255)*114)/1000;return l>140?'#222':'#fff';}
const caixa=document.getElementById('caixa'),prog=document.getElementById('prog');
let i=0,pts={};
function mostrar(){
  if(i>=Q.length)return fim();
  prog.textContent='Pergunta '+(i+1)+' de '+Q.length;
  caixa.innerHTML='<h2>'+Q[i][0]+'</h2>';
  Q[i][1].forEach(([t,k])=>{
    const b=document.createElement('button');
    b.className='opcao';b.textContent=t;
    b.onclick=()=>{pts[k]=(pts[k]||0)+1;i++;mostrar();};
    caixa.appendChild(b);
  });
}
function fim(){
  const k=Object.keys(pts).sort((a,b)=>pts[b]-pts[a])[0],r=R[k];
  prog.textContent='';
  caixa.innerHTML='<div class="resultado" style="background:'+r.cor+';color:'+txt(r.cor)+'"><div class="grande">'+r.e+'</div><h2>Você é a era '+r.n+'!</h2><p>'+r.t+'</p></div><p><button class="btn" id="refazer">Refazer o quiz</button></p>';
  document.getElementById('refazer').onclick=()=>{i=0;pts={};mostrar();};
}
mostrar();
