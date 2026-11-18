(function(){var d=document,$=function(s,c){return Array.prototype.slice.call((c||d).querySelectorAll(s))};
var hd=$('.hd')[0];function sc(){hd.classList.toggle('s',scrollY>30)}addEventListener('scroll',sc,{passive:true});sc();
$('.burger')[0].onclick=function(){d.body.classList.toggle('open')};$('.menu a').forEach(function(a){a.onclick=function(){d.body.classList.remove('open')}});
var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
/* hero slider */
var im=$('.hero .sl img'),db=$('.hero .dots button'),cur=0,t;function go(i){cur=i;im.forEach(function(x,k){x.classList.toggle('on',k===i)});db.forEach(function(x,k){x.classList.toggle('on',k===i);x.setAttribute('aria-pressed',k===i)})}
function auto(){clearInterval(t);if(!rm)t=setInterval(function(){if(!d.hidden)go((cur+1)%im.length)},6500)}
db.forEach(function(b,i){b.onclick=function(){go(i);auto()}});go(0);auto();
/* reveal */
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{rootMargin:'0px 0px -8% 0px'});$('[data-r]').forEach(function(el){io.observe(el)})}else $('[data-r]').forEach(function(el){el.classList.add('in')});
/* count-up */
$('[data-count]').forEach(function(el){var n=+el.dataset.count,done=false;var o=new IntersectionObserver(function(e){if(e[0].isIntersecting&&!done){done=true;if(rm)return;var t0=performance.now();(function f(t){var k=Math.min(1,(t-t0)/1400);el.textContent=Math.round(n*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)})(t0)}});o.observe(el)})
})();

(function(){var d=document,$=function(s,c){return Array.prototype.slice.call((c||d).querySelectorAll(s))};
function seen(el){var r=el.getBoundingClientRect();return r.top<innerHeight&&r.bottom>0&&!d.hidden}
/* position hub */
$('.phub').forEach(function(h){var svg=h.querySelector('svg'),ns=$('.hn',h),p=h.querySelector('.hp'),P=[[200,40],[360,200],[200,360],[40,200]],cur=-1,auto=true,s='<circle cx="200" cy="200" r="160" class="o1"/><circle cx="200" cy="200" r="108" class="o2"/>';
P.forEach(function(q,i){var pt='M'+q[0]+' '+q[1]+'L200 200';s+='<path class="lk" d="'+pt+'"/><circle r="3.5" class="pk"><animateMotion dur="'+(3.4+i*.5)+'s" repeatCount="indefinite" keyPoints="0;1;0" keyTimes="0;0.5;1" calcMode="linear" path="'+pt+'"/></circle>'});
svg.innerHTML=s;var lk=$('.lk',svg),dots=h.querySelector('.hdots');dots.innerHTML=ns.map(function(){return '<i></i>'}).join('');var di=$('i',dots);
function show(i){cur=i;ns.forEach(function(n,k){n.classList.toggle('on',k===i);n.setAttribute('aria-pressed',k===i?'true':'false')});lk.forEach(function(l,k){l.classList.toggle('on',k===i)});
di.forEach(function(x,k){x.className=k<i?'done':'';if(k===i){void x.offsetWidth;x.className='on'}});
p.classList.remove('sw');void p.offsetWidth;p.classList.add('sw');
p.querySelector('small').textContent='0'+(i+1)+' / 0'+ns.length;p.querySelector('h3').textContent=ns[i].textContent;var dd=$('dd',p);dd[0].textContent=ns[i].getAttribute('data-a');dd[1].textContent=ns[i].getAttribute('data-b')}
function stop(){auto=false;h.classList.add('man')}
ns.forEach(function(n,i){n.addEventListener('click',function(){stop();show(i)});n.addEventListener('mouseenter',function(){stop();show(i)});n.addEventListener('focus',function(){stop();show(i)})});
show(0);setInterval(function(){if(auto&&seen(h))show((cur+1)%ns.length)},4200)});
})();
/* ===== v2.8: global ECA / IFI / DFI coverage map ===== */
(function(){var d=document,$=function(s,c){return Array.prototype.slice.call((c||d).querySelectorAll(s))},LD=window.LAND||'',PT=[];if(!LD)return;
for(var r=0;r<71;r++){var lat=83-2*r;for(var c=0;c<180;c++){if(+LD.charAt(r*180+c))PT.push([-179+2*c,lat])}}
var rm=matchMedia('(prefers-reduced-motion: reduce)').matches,HUB=[55.3,25.2],BS='../';
$('.cov').forEach(function(sec){var m=sec.querySelector('.covm');if(!m)return;var w=m.dataset.win.split(',').map(Number),cv=d.createElement('canvas');m.insertBefore(cv,m.firstChild);
var pins=$('.pin',m),chips=$('.covl button',sec),P=sec.querySelector('.covp'),ks=pins.map(function(p){return p.dataset.k}),cur=-1,auto=!rm,on=false,t0=0,raf=0,W,H,x,R,F='a',fb=$('.covf button',sec),cn=$('.covs b',sec);
function vis(i){return F==='a'||pins[i].dataset.g===F}
function nxt(i){for(var j=1;j<=pins.length;j++){var q=(i+j)%pins.length;if(vis(q))return q}return -1}
pins.forEach(function(p){var l=p.dataset.ll.split(',').map(Number);p.style.left=(l[0]-w[0])/(w[1]-w[0])*100+'%';p.style.top=(w[2]-l[1])/(w[2]-w[3])*100+'%'});
function size(){W=m.clientWidth;H=W*(w[2]-w[3])/(w[1]-w[0]);var q=Math.min(2,devicePixelRatio||1);cv.width=W*q;cv.height=H*q;cv.style.height=H+'px';x=cv.getContext('2d');x.setTransform(q,0,0,q,0,0);R=Math.max(1,W/(w[1]-w[0])*.62)}
function draw(t){if(!W)return;var sx=W/(w[1]-w[0]),i,p;x.clearRect(0,0,W,H);x.fillStyle='rgba(0,28,53,.48)';
for(i=0;i<PT.length;i++){p=PT[i];if(p[0]<w[0]||p[0]>w[1]||p[1]>w[2]||p[1]<w[3])continue;x.beginPath();x.arc((p[0]-w[0])*sx,(w[2]-p[1])*sx,R*.86,0,7);x.fill()}
var h=[(HUB[0]-w[0])*sx,(w[2]-HUB[1])*sx];
if(cur>=0){var l=pins[cur].dataset.ll.split(',').map(Number),b=[(l[0]-w[0])*sx,(w[2]-l[1])*sx],dx=b[0]-h[0],dy=b[1]-h[1],ds=Math.sqrt(dx*dx+dy*dy);
if(ds>4){var mx=(h[0]+b[0])/2,my=(h[1]+b[1])/2-ds*.3,k=rm?1:Math.min(1,(t-t0)/900),n=48;x.strokeStyle='rgba(138,106,42,.9)';x.lineWidth=1.3;x.setLineDash([4,4]);x.beginPath();x.moveTo(h[0],h[1]);
for(var j=1;j<=n*k;j++){var u=j/n,a=(1-u)*(1-u),e=2*u*(1-u),f=u*u;x.lineTo(a*h[0]+e*mx+f*b[0],a*h[1]+e*my+f*b[1])}x.stroke();x.setLineDash([])}}
x.strokeStyle='#001C35';x.lineWidth=1;x.beginPath();x.arc(h[0],h[1],Math.max(5,R*2.6),0,7);x.stroke();x.fillStyle='#001C35';x.beginPath();x.arc(h[0],h[1],Math.max(2.2,R*1.2),0,7);x.fill()}
function loop(t){draw(t);raf=(!rm&&t-t0<950)?requestAnimationFrame(loop):0}
function show(i,user){if(user)auto=false;if(i<0||i===cur)return;cur=i;var p=pins[i],k=p.dataset.k,ch=chips.filter(function(c){return c.dataset.k===k})[0],names=p.dataset.n.split('|');
pins.forEach(function(q,j){q.classList.toggle('on',j===i);q.setAttribute('aria-pressed',j===i?'true':'false')});
chips.forEach(function(c){var o=c.dataset.k===k;c.classList.toggle('on',o);c.setAttribute('aria-pressed',o?'true':'false')});
P.querySelector('small').textContent=ch?ch.parentNode.parentNode.querySelector('b').textContent:'';P.querySelector('h3').textContent=p.textContent;
var tg=P.querySelector('.covt'),fbt=fb.filter(function(b){return b.dataset.f===p.dataset.g})[0];if(tg){tg.dataset.g=p.dataset.g||'';tg.textContent=fbt?fbt.textContent:''}
P.querySelector('ul').innerHTML=names.map(function(s,n){return '<li><span class="lgo"><img src="'+BS+'img/cov-'+k+'-'+n+'.webp" alt=""></span><span>'+s.replace(/</g,'&lt;')+'</span></li>'}).join('');
P.classList.remove('sw');void P.offsetWidth;P.classList.add('sw');t0=performance.now();if(!raf)raf=requestAnimationFrame(loop)}
pins.forEach(function(p,i){p.addEventListener('click',function(){show(i,true)})});
chips.forEach(function(c){c.addEventListener('click',function(){show(ks.indexOf(c.dataset.k),true);if(innerWidth<1001){var r=P.getBoundingClientRect();if(r.top<70||r.bottom>innerHeight)P.scrollIntoView({behavior:rm?'auto':'smooth',block:'center'})}})});
size();show(0);addEventListener('resize',function(){size();draw(performance.now()+9999)});
new IntersectionObserver(function(e){on=e[0].isIntersecting}).observe(m);
fb.forEach(function(b){b.addEventListener('click',function(){F=b.dataset.f;fb.forEach(function(q){var o=q===b;q.classList.toggle('on',o);q.setAttribute('aria-pressed',o?'true':'false')});
var nc=0,ni=0;pins.forEach(function(q,i){var v=vis(i);q.classList.toggle('off',!v);q.tabIndex=v?0:-1;if(v){nc++;ni+=q.dataset.n.split('|').length}});
chips.forEach(function(c){var v=F==='a'||c.dataset.g===F;c.classList.toggle('off',!v);c.disabled=!v});
if(cn.length>1){cn[0].textContent=nc;cn[1].textContent=ni}
if(!vis(cur)){var j=nxt(cur);cur=-1;show(j)}})});
if(!rm)setInterval(function(){if(auto&&on&&!d.hidden)show(nxt(cur))},3600)})})();
/* ===== v4.1: v2 home modules (readiness radar, workstreams, experience map, back to top) ===== */
(function(){var d=document,$=function(s,c){return Array.prototype.slice.call((c||d).querySelectorAll(s))},rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
function seen(el){var r=el.getBoundingClientRect();return r.top<innerHeight&&r.bottom>0&&!d.hidden}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){io.unobserve(e.target);if(e.target._go)e.target._go()}})},{threshold:.14});
/* segmented control + radar */
var radarSet,rd=$('.radar')[0];
$('.seg').forEach(function(s){$('button',s).forEach(function(b,i){b.onclick=function(){$('button',s).forEach(function(x){x.classList.toggle('on',x===b)});if(s.dataset.radar!=null&&radarSet)radarSet(i)}})});
if(rd){(function(){var L=rd.dataset.labels.split('|'),Q=rd.dataset.q.split('|'),V=[[.5,.36,.56,.3,.42,.34],[.78,.7,.8,.66,.7,.64],[.97,.95,.96,.94,.93,.95]],cx=380,cy=278,R=198,cur,qb=$('.q b')[0],qp=$('.q p')[0],auto=true,ai=0;
function P(i,r){var a=(-90+i*60)*Math.PI/180;return [cx+Math.cos(a)*R*r,cy+Math.sin(a)*R*r]}
function hex(r){return [0,1,2,3,4,5].map(function(i){return P(i,r).map(function(n){return n.toFixed(1)}).join(',')}).join(' ')}
var s='<svg viewBox="0 0 760 560" role="img" aria-label="'+L.join(', ')+'">';[.25,.5,.75,1].forEach(function(r){s+='<polygon class="ring" points="'+hex(r)+'"/>'});
L.forEach(function(l,i){var p=P(i,1),t=P(i,1.11),an=i===0||i===3?'middle':i<3?'start':'end';s+='<line class="ax" x1="'+cx+'" y1="'+cy+'" x2="'+p[0]+'" y2="'+p[1]+'"/><text data-i="'+i+'" x="'+t[0]+'" y="'+(t[1]+(i===3?10:i===0?-2:4))+'" text-anchor="'+an+'">'+l+'</text><text class="rn" data-i="'+i+'" x="'+P(i,1.16)[0]+'" y="'+(P(i,1.16)[1]+11)+'" text-anchor="middle">'+(i+1)+'</text>'});
s+='<polygon class="poly"/>';L.forEach(function(){s+='<circle class="dot" r="3.5"/>'});rd.innerHTML=s+'</svg><ul class="rleg">'+L.map(function(l,i){return '<li><b>'+(i+1)+'</b>'+l+'</li>'}).join('')+'</ul>';
var poly=$('.poly',rd)[0],dots=$('.dot',rd),tx=$('text',rd);
function draw(){poly.setAttribute('points',cur.map(function(v,i){return P(i,v).join(',')}).join(' '));dots.forEach(function(c,i){var p=P(i,cur[i]);c.setAttribute('cx',p[0]);c.setAttribute('cy',p[1])})}
function show(i){tx.forEach(function(t){t.classList.toggle('on',+t.dataset.i===i)});if(qb){qb.textContent=L[i];qp.textContent=Q[i]}}
radarSet=function(k){var a=cur.slice(),b=V[k],t0=performance.now();if(rm){cur=b.slice();draw();return}(function f(t){var u=Math.min(1,(t-t0)/900);u=u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2;cur=a.map(function(v,i){return v+(b[i]-v)*u});draw();if(u<1)requestAnimationFrame(f)})(t0)};
tx.forEach(function(t){var i=+t.dataset.i;t.addEventListener('mouseenter',function(){auto=false;show(i)});t.addEventListener('click',function(){auto=false;show(i)})});
cur=rm?V[0].slice():[0,0,0,0,0,0];draw();show(0);rd._go=function(){radarSet(0);if(!rm)setInterval(function(){if(auto&&seen(rd)){ai=(ai+1)%6;show(ai)}},3600)};io.observe(rd)})()}
/* workstreams */
$('.ws').forEach(function(w){var sg=$('.ws-s',w),ln=$('.ws-l',w),band=w.querySelector('.ws-band'),pa=w.querySelector('.ws-pa'),pb=w.querySelector('.ws-pb'),cur=-1,auto=!rm,sx=w.querySelector('.scrollx'),L=(w.getAttribute('data-l')||'Stage|Workstream').split('|');
function act(i){return i===0?[0]:i===5?[5]:[1,2,3,4]}
function lane(k){ln.forEach(function(l,j){l.classList.toggle('sel',j===k)});pb.classList.remove('sw');void pb.offsetWidth;pb.classList.add('sw');pb.querySelector('small').textContent=L[1];pb.querySelector('h3').textContent=ln[k].textContent;pb.querySelector('p').textContent=ln[k].getAttribute('data-t')}
function show(i,user){cur=i;sg.forEach(function(s,k){s.classList.toggle('on',k===i);s.classList.toggle('done',k<i);s.setAttribute('aria-pressed',k===i?'true':'false')});band.style.transform='translateX('+(i*100)+'%)';var a=act(i);
ln.forEach(function(l,k){l.classList.toggle('on',a.indexOf(k)>-1);l.style.setProperty('--p',k===0?(i>0?1:.5):k===5?(i===5?.5:0):Math.min(i,4)/4)});
pa.classList.remove('sw');void pa.offsetWidth;pa.classList.add('sw');pa.querySelector('small').textContent=L[0]+' '+(i+1)+' / '+sg.length;pa.querySelector('h3').textContent=sg[i].querySelector('b').textContent;pa.querySelector('p').textContent=sg[i].getAttribute('data-t');lane(a[0]);if(user&&sx&&sx.scrollWidth>sx.clientWidth+4)sx.scrollTo({left:sg[i].offsetLeft-(sx.clientWidth-sg[i].offsetWidth)/2,behavior:'smooth'})}
sg.forEach(function(s,i){s.addEventListener('click',function(){auto=false;show(i,true)})});
ln.forEach(function(l,k){l.addEventListener('click',function(){auto=false;if(act(cur).indexOf(k)<0)show(k===0?0:k===5?5:Math.min(Math.max(cur,1),4),true);lane(k)});l.addEventListener('mouseenter',function(){if(act(cur).indexOf(k)>-1)lane(k)})});
w.addEventListener('mouseenter',function(){auto=false});
show(0);setInterval(function(){if(auto&&seen(w))show((cur+1)%sg.length)},3600)});
/* experience flat map */
var LD=window.LAND||'',PT=[];for(var r=0;r<71;r++){var lat=83-2*r;for(var c=0;c<180;c++){var v=+LD.charAt(r*180+c);if(v)PT.push([-179+2*c,lat,v])}}
function fit(cv,w,h){var q=Math.min(2,devicePixelRatio||1);cv.width=w*q;cv.height=h*q;var x=cv.getContext('2d');x.setTransform(q,0,0,q,0,0);return x}
$('.map').forEach(function(m){var w=(m.dataset.win||'-24,96,64,-38').split(',').map(Number),cv=d.createElement('canvas');m.insertBefore(cv,m.firstChild);
var t0=0;function draw(t){var W=m.clientWidth,H=W*(w[2]-w[3])/(w[1]-w[0]),x=fit(cv,W,H);cv.style.height=H+'px';var k=t0?(rm?1:Math.min(1,(t-t0)/2200)):0,sx=W/(w[1]-w[0]),r=Math.max(1.2,sx*.62);
PT.forEach(function(p){if(p[0]<w[0]||p[0]>w[1]||p[1]>w[2]||p[1]<w[3])return;var X=(p[0]-w[0])*sx,Y=(w[2]-p[1])*sx,a=Math.max(0,Math.min(1,k*1.6-X/W*.6));if(!a)return;var hi=p[2]>1;x.fillStyle=hi?'rgba(214,178,104,'+a+')':'rgba(190,206,224,'+a*.32+')';x.beginPath();x.arc(X,Y,hi?r:r*.8,0,7);x.fill()});
var hx=(55.3-w[0])*sx,hy=(w[2]-25.2)*sx;if(k>.6){x.strokeStyle='#fff';x.lineWidth=1;x.beginPath();x.arc(hx,hy,r*3.2,0,7);x.stroke();x.fillStyle='#fff';x.beginPath();x.arc(hx,hy,r*1.2,0,7);x.fill()}
if(t0&&k<1)requestAnimationFrame(draw)}
draw(0);m._go=function(){t0=performance.now();requestAnimationFrame(draw)};io.observe(m);addEventListener('resize',function(){draw(t0?t0+9999:0)})});
/* back to top */
var tt=$('.totop')[0];if(tt){var tq=tt.querySelector('.ttq'),C=2*Math.PI*22;tq.style.strokeDasharray=C;
function ts(){var y=scrollY,h=d.documentElement.scrollHeight-innerHeight;tt.classList.toggle('on',y>innerHeight*.9);tq.style.strokeDashoffset=C*(1-(h>0?Math.min(1,y/h):0))}
addEventListener('scroll',ts,{passive:true});ts();tt.onclick=function(){scrollTo({top:0,behavior:rm?'auto':'smooth'})}}
})();
