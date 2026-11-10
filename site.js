(function(){
var d=document,fr=d.documentElement.lang==='fr',pg=d.body.dataset.p||'',$=function(s,c){return Array.prototype.slice.call((c||d).querySelectorAll(s))};
var T=fr?{home:'fr.html',nav:[['Services','fr.html#services','services'],['Secteurs','fr.html#secteurs','sectors'],['Méthode','fr.html#methode','method'],['Expérience','experience.html','experience']],cta:'Parlons de votre projet',tag:'Conseil intégré en financement, ingénierie et approvisionnement pour des projets bancables.',off:'Bureau de Dubaï',site:'Plan du site',ct:'Contact',disc:'Les références à des institutions reflètent une connaissance générale du marché et n’impliquent ni partenariat exclusif, ni mandat formel, ni représentation officielle, sauf mention expresse.',pr:'Confidentialité',lg:'Mentions légales',uae:'Dubaï, Émirats arabes unis'}
:{home:'index.html',nav:[['Services','services.html','services'],['Sectors','index.html#sectors','sectors'],['Experience','experience.html','experience'],['Solutions','solutions.html','solutions'],['Insights','index.html#insights','insights']],cta:'Discuss your project',tag:'Integrated finance, engineering and procurement advisory for bankable projects.',off:'Dubai office',site:'Site',ct:'Contact',disc:'References to institutions reflect broader market familiarity and ecosystem exposure and do not imply exclusive partnership, formal mandate or official representation unless expressly stated.',pr:'Privacy',lg:'Legal notice',uae:'Dubai, UAE'};
var links=T.nav.map(function(n){return '<a href="'+n[1]+'"'+(n[2]===pg?' class="on"':'')+'>'+n[0]+'</a>'}).join('');
var lang=fr?'<a href="index.html">EN</a><span></span><b>FR</b>':'<b>EN</b><span></span><a href="fr.html">FR</a>';
d.body.insertAdjacentHTML('afterbegin','<header class="hd"><div class="hi"><a href="'+T.home+'"><img src="logo.png" alt="CSM2 Financial Solutions"></a><nav>'+links+'</nav><div class="r"><div class="lang">'+lang+'</div><a class="btn" href="contact.html">'+T.cta+'<i></i></a><button class="burger" aria-label="Menu"></button></div></div><div class="prog"></div></header><div class="menu">'+links+'<a href="contact.html">'+T.ct+'</a></div>');
d.body.insertAdjacentHTML('beforeend','<footer class="ft"><div class="wrap"><div class="g"><div><img src="logo.png" alt="CSM2 Financial Solutions"><p style="max-width:34ch">'+T.tag+'</p></div><div><b>'+T.off+'</b><p>CSM2 – Global Finance and Capital Advisory Group L.L.C-FZ<br>Meydan Grandstand, 6th Floor, Meydan Road<br>Nad Al Sheba, '+T.uae+'</p><p style="margin-top:14px"><a class="gold" href="tel:+971503491172">+971 50 349 1172</a><br><a class="gold" href="mailto:info@csm2finance.com">info@csm2finance.com</a></p></div><div><b>'+T.site+'</b><nav>'+T.nav.map(function(n){return '<a href="'+n[1]+'">'+n[0]+'</a>'}).join('')+'<a href="contact.html">'+T.ct+'</a><a href="#">LinkedIn</a></nav></div></div><div class="bt"><p>'+T.disc+'</p><div>© 2026 CSM2 Finance · <a href="#">'+T.pr+'</a> · <a href="#">'+T.lg+'</a></div></div></div></footer>');
var hd=$('.hd')[0],prog=$('.prog')[0],gl=$('.globe')[0];
$('.burger')[0].onclick=function(){d.body.classList.toggle('open')};
$('.menu a').forEach(function(a){a.addEventListener('click',function(){d.body.classList.remove('open')})});
function onScroll(){var y=window.scrollY,h=d.documentElement.scrollHeight-innerHeight;hd.classList.toggle('s',y>40);prog.style.transform='scaleX('+(h>0?y/h:0)+')';if(gl&&y<innerHeight*1.2)gl.style.transform='translateY(calc(-50% + '+(y*.14)+'px))'}
addEventListener('scroll',onScroll,{passive:true});onScroll();
requestAnimationFrame(function(){d.body.classList.add('ready')});
addEventListener('pageshow',function(){d.body.classList.remove('leaving');d.body.classList.add('ready')});
d.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href]');if(!a||a.target||e.metaKey||e.ctrlKey)return;var h=a.getAttribute('href');if(!/^[\w-]+\.html(#.*)?$/.test(h))return;if(h.split('#')[0]===(location.pathname.split('/').pop()||'index.html')&&h.indexOf('#')>-1)return;e.preventDefault();d.body.classList.add('leaving');setTimeout(function(){location.href=h},240)});
/* reveal */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);if(e.target.dataset.count!=null)count(e.target);if(e.target._go)e.target._go()}})},{threshold:.14,rootMargin:'0px 0px -7% 0px'});
$('[data-r],[data-io],[data-count]').forEach(function(e){io.observe(e)});
function count(el){var to=+el.dataset.count,t0=performance.now(),pre=el.dataset.pre||'',suf=el.dataset.suf||'';(function f(t){var k=Math.min(1,(t-t0)/1700);k=1-Math.pow(1-k,4);el.textContent=pre+Math.round(to*k)+suf;if(k<1)requestAnimationFrame(f)})(t0)}
$('.bridge .d').forEach(function(p){p.style.setProperty('--l',Math.ceil(p.getTotalLength())+2)});
$('.tick p').forEach(function(p){p.style.setProperty('--t',Math.max(40,p.textContent.length/7)+'s');p.innerHTML+=p.innerHTML});
/* segmented controls */
$('.seg').forEach(function(s){$('button',s).forEach(function(b,i){b.onclick=function(){$('button',s).forEach(function(x){x.classList.toggle('on',x===b)});if(s.dataset.radar!=null&&radarSet)radarSet(i);if(s.dataset.struct!=null)$('.struct g[data-v]').forEach(function(g){g.classList.toggle('off',g.dataset.v!==b.dataset.v)})}})});
/* radar */
var radarSet,rd=$('.radar')[0];
if(rd){(function(){var L=rd.dataset.labels.split('|'),Q=rd.dataset.q.split('|'),V=[[.5,.36,.56,.3,.42,.34],[.78,.7,.8,.66,.7,.64],[.97,.95,.96,.94,.93,.95]],cx=380,cy=278,R=198,cur=V[0].slice(),ns='http://www.w3.org/2000/svg',qb=$('.q b')[0],qp=$('.q p')[0],auto=true,ai=0;
function P(i,r){var a=(-90+i*60)*Math.PI/180;return [cx+Math.cos(a)*R*r,cy+Math.sin(a)*R*r]}
function hex(r){return [0,1,2,3,4,5].map(function(i){return P(i,r).map(function(n){return n.toFixed(1)}).join(',')}).join(' ')}
var s='<svg viewBox="0 0 760 560" role="img" aria-label="'+L.join(', ')+'">';[.25,.5,.75,1].forEach(function(r){s+='<polygon class="ring" points="'+hex(r)+'"/>'});
L.forEach(function(l,i){var p=P(i,1),t=P(i,1.11),an=i===0||i===3?'middle':i<3?'start':'end';s+='<line class="ax" x1="'+cx+'" y1="'+cy+'" x2="'+p[0]+'" y2="'+p[1]+'"/><text data-i="'+i+'" x="'+t[0]+'" y="'+(t[1]+(i===3?10:i===0?-2:4))+'" text-anchor="'+an+'">'+l+'</text><text class="rn" data-i="'+i+'" x="'+P(i,1.16)[0]+'" y="'+(P(i,1.16)[1]+11)+'" text-anchor="middle">'+(i+1)+'</text>'});
s+='<polygon class="poly"/>';L.forEach(function(){s+='<circle class="dot" r="3.5"/>'});rd.innerHTML=s+'</svg><ul class="rleg">'+L.map(function(l,i){return '<li><b>'+(i+1)+'</b>'+l+'</li>'}).join('')+'</ul>';
var poly=$('.poly',rd)[0],dots=$('.dot',rd),tx=$('text',rd);
function draw(){poly.setAttribute('points',cur.map(function(v,i){return P(i,v).join(',')}).join(' '));dots.forEach(function(c,i){var p=P(i,cur[i]);c.setAttribute('cx',p[0]);c.setAttribute('cy',p[1])})}
function show(i){tx.forEach(function(t){t.classList.toggle('on',+t.dataset.i===i)});if(qb){qb.textContent=L[i];qp.textContent=Q[i]}}
radarSet=function(k){var a=cur.slice(),b=V[k],t0=performance.now();(function f(t){var u=Math.min(1,(t-t0)/900);u=u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2;cur=a.map(function(v,i){return v+(b[i]-v)*u});draw();if(u<1)requestAnimationFrame(f)})(t0)};
tx.forEach(function(t){var i=+t.dataset.i;t.addEventListener('mouseenter',function(){auto=false;show(i)});t.addEventListener('click',function(){auto=false;show(i)})});
cur=[0,0,0,0,0,0];draw();show(0);rd.setAttribute('data-io','');rd._go=function(){radarSet(0);setInterval(function(){if(auto){ai=(ai+1)%6;show(ai)}},3600)};io.observe(rd)})()}
/* land dots */
var LD=window.LAND||'',PT=[];
(function(){for(var r=0;r<71;r++){var lat=83-2*r,st=Math.max(1,Math.round(1/Math.cos(lat*Math.PI/180)));for(var c=0;c<180;c++){var v=+LD.charAt(r*180+c);if(v)PT.push([-179+2*c,lat,v,c%st===0])}}})();
function fit(cv,w,h){var r=Math.min(2,devicePixelRatio||1);cv.width=w*r;cv.height=h*r;var x=cv.getContext('2d');x.setTransform(r,0,0,r,0,0);return x}
/* globe */
if(gl&&PT.length){(function(){var cv=d.createElement('canvas');gl.appendChild(cv);var x,S,on=true,rad=Math.PI/180,lon0=+(gl.dataset.lon||40),lat0=+(gl.dataset.lat||17),osc=+(gl.dataset.osc||26),HUB=[55.3,25.2],TG=[[29,41],[9,50],[4,7],[37,-1],[69,41],[28,-26]];
function size(){S=gl.clientWidth;x=fit(cv,S,S)}size();addEventListener('resize',size);
new IntersectionObserver(function(e){on=e[0].isIntersecting}).observe(gl);
function v3(lo,la){lo*=rad;la*=rad;return [Math.cos(la)*Math.sin(lo),Math.sin(la),Math.cos(la)*Math.cos(lo)]}
function frame(t){requestAnimationFrame(frame);if(!on)return;var R=S*.46,c=S/2,l0=(lon0+osc*Math.sin(t/11000))*rad,p0=lat0*rad,sp=Math.sin(p0),cp=Math.cos(p0),sl=Math.sin(l0),cl=Math.cos(l0);
function pr(v){var X=v[0]*cl-v[2]*sl,Z=v[0]*sl+v[2]*cl;return [c+R*X,c-R*(v[1]*cp-Z*sp),v[1]*sp+Z*cp]}
x.clearRect(0,0,S,S);var g=x.createRadialGradient(c-R*.3,c-R*.35,R*.1,c,c,R);g.addColorStop(0,'rgba(22,58,96,.55)');g.addColorStop(1,'rgba(0,28,53,0)');x.fillStyle=g;x.beginPath();x.arc(c,c,R,0,7);x.fill();
x.strokeStyle='rgba(201,169,97,.35)';x.lineWidth=1;x.beginPath();x.arc(c,c,R,0,7);x.stroke();x.strokeStyle='rgba(201,169,97,.12)';x.beginPath();x.arc(c,c,R*1.09,0,7);x.stroke();
for(var i=0;i<PT.length;i++){var p=PT[i];if(!p[3])continue;var q=pr(p._v||(p._v=v3(p[0],p[1])));if(q[2]<.02)continue;var hi=p[2]>1,z=q[2];x.fillStyle=hi?'rgba(214,183,112,'+(.35+.65*z)+')':'rgba(132,154,180,'+(.14+.32*z)+')';var s=R*(hi?.0078:.0062)*(.45+.55*z);x.beginPath();x.arc(q[0],q[1],s,0,7);x.fill()}
var h=v3(HUB[0],HUB[1]);TG.forEach(function(tg,k){var b=v3(tg[0],tg[1]),om=Math.acos(h[0]*b[0]+h[1]*b[1]+h[2]*b[2]),so=Math.sin(om),ph=((t/2600)+k*.37)%1.6,prev=null;
for(var j=0;j<=40;j++){var u=j/40,a1=Math.sin((1-u)*om)/so,a2=Math.sin(u*om)/so,lift=1+.16*Math.sin(Math.PI*u),v=[(h[0]*a1+b[0]*a2)*lift,(h[1]*a1+b[1]*a2)*lift,(h[2]*a1+b[2]*a2)*lift],q=pr(v);if(prev&&q[2]>0&&prev[2]>0){var near=Math.max(0,1-Math.abs(u-ph)*5);x.strokeStyle='rgba(230,210,160,'+(.16+.84*near)+')';x.lineWidth=.7+1.3*near;x.beginPath();x.moveTo(prev[0],prev[1]);x.lineTo(q[0],q[1]);x.stroke()}prev=q}
var e=pr(b);if(e[2]>0){x.fillStyle='#E6D2A0';x.beginPath();x.arc(e[0],e[1],2.4,0,7);x.fill()}});
var hp=pr(h);if(hp[2]>0){var k=(t/1800)%1;x.strokeStyle='rgba(230,210,160,'+(1-k)+')';x.lineWidth=1;x.beginPath();x.arc(hp[0],hp[1],4+k*16,0,7);x.stroke();x.fillStyle='#fff';x.beginPath();x.arc(hp[0],hp[1],3.2,0,7);x.fill()}}
requestAnimationFrame(frame)})()}
/* flat map */
$('.map').forEach(function(m){var w=(m.dataset.win||'-24,96,64,-38').split(',').map(Number),cv=d.createElement('canvas');m.insertBefore(cv,m.firstChild);var dark=m.dataset.light==null;
$('i[data-ll]',m).forEach(function(i){var p=i.dataset.ll.split(',');i.style.left=((p[0]-w[0])/(w[1]-w[0])*100)+'%';i.style.top=((w[2]-p[1])/(w[2]-w[3])*100)+'%'});
var t0=0;function draw(t){var W=m.clientWidth,H=W*(w[2]-w[3])/(w[1]-w[0]),x=fit(cv,W,H);cv.style.height=H+'px';var k=t0?Math.min(1,(t-t0)/2200):0,sx=W/(w[1]-w[0]),r=Math.max(1.2,sx*.62);
PT.forEach(function(p){if(p[0]<w[0]||p[0]>w[1]||p[1]>w[2]||p[1]<w[3])return;var X=(p[0]-w[0])*sx,Y=(w[2]-p[1])*sx,a=Math.max(0,Math.min(1,k*1.6-X/W*.6));if(!a)return;var hi=p[2]>1;x.fillStyle=hi?'rgba(201,169,97,'+a+')':(dark?'rgba(132,154,180,'+a*.3+')':'rgba(0,28,53,'+a*.16+')');x.beginPath();x.arc(X,Y,hi?r:r*.8,0,7);x.fill()});
var hx=(55.3-w[0])*sx,hy=(w[2]-25.2)*sx;if(k>.6){x.strokeStyle=dark?'#fff':'#001C35';x.lineWidth=1;x.beginPath();x.arc(hx,hy,r*3.2,0,7);x.stroke();x.fillStyle=dark?'#fff':'#001C35';x.beginPath();x.arc(hx,hy,r*1.2,0,7);x.fill()}
if(t0&&k<1)requestAnimationFrame(draw)}
m.setAttribute('data-io','');m._go=function(){t0=performance.now();requestAnimationFrame(draw)};io.observe(m);addEventListener('resize',function(){if(t0)draw(t0+9999)})});
})();
(function(){var o='<svg class="orn" viewBox="0 0 560 560" aria-hidden="true"><g><circle cx="280" cy="280" r="270"/><ellipse cx="280" cy="280" rx="270" ry="92"/><ellipse cx="280" cy="280" rx="270" ry="184"/><ellipse cx="280" cy="280" rx="92" ry="270"/><ellipse cx="280" cy="280" rx="184" ry="270"/><path d="M10 280h540M280 10v540"/></g></svg>';Array.prototype.forEach.call(document.querySelectorAll('.ph'),function(p){p.insertAdjacentHTML('afterbegin',o)})})();
