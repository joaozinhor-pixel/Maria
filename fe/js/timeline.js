const ALBUNS=[
  [1,'🕊️','Anunciação','#cfe3fa','O anjo Gabriel anuncia a Maria que ela será a mãe de Jesus.'],
  [2,'⭐','Nascimento em Belém','#f3dca0','Jesus nasce em Belém e é visitado pelos pastores.'],
  [3,'💧','Batismo no rio Jordão','#b8e0f2','João Batista batiza Jesus, e o Espírito Santo desce como uma pomba.'],
  [4,'🍷','Bodas de Caná','#e3a8a8','Primeiro milagre: a pedido de Maria, Jesus transforma água em vinho.'],
  [5,'⛰️','Sermão da Montanha','#b9d8b0','Jesus ensina as Bem-aventuranças.'],
  [6,'🍞','Multiplicação dos pães','#e6c88f','Jesus alimenta uma multidão com cinco pães e dois peixes.'],
  [7,'🍽️','Última Ceia','#d8c3a5','Jesus partilha a ceia com os apóstolos e deixa a Eucaristia.'],
  [8,'✝️','Paixão e morte na cruz','#5a3b3b','Jesus é crucificado, e Maria permanece ao pé da cruz.'],
  [9,'🌅','Ressurreição','#fbe9a6','Ao terceiro dia, Jesus ressuscita: é a alegria da Páscoa.'],
  [10,'🔥','Ascensão e Pentecostes','#f28c5b','Jesus sobe ao céu, e o Espírito Santo desce sobre os apóstolos, que rezavam com Maria.']
];
function txt(h){const n=parseInt(h.slice(1),16),l=((n>>16)*299+((n>>8)&255)*587+(n&255)*114)/1000;return l>140?'#222':'#fff';}
const lista=document.getElementById('lista');
ALBUNS.forEach(([ano,e,nome,cor,c])=>{
  const b=document.createElement('button');
  b.className='album';b.setAttribute('aria-expanded','false');
  b.style.setProperty('--c',cor);b.style.setProperty('--t',txt(cor));
  b.innerHTML=ano+'. '+e+' <b>'+nome+'</b><small>'+c+'</small>';
  b.onclick=()=>b.setAttribute('aria-expanded',b.getAttribute('aria-expanded')==='false');
  lista.appendChild(b);
});
