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
