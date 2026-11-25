(function(){
var d=document,root=d.documentElement;
var tog=d.getElementById('mob-toggle'),dr=d.getElementById('mob-drawer'),ov=d.getElementById('mob-overlay'),cl=d.getElementById('drawer-close');
function openM(){dr.hidden=false;ov.classList.add('visible');tog.setAttribute('aria-expanded','true');root.style.overflow='hidden';}
function closeM(){dr.hidden=true;ov.classList.remove('visible');tog.setAttribute('aria-expanded','false');root.style.overflow='';}
if(tog&&dr){tog.addEventListener('click',function(){dr.hidden?openM():closeM();});
if(cl)cl.addEventListener('click',closeM);if(ov)ov.addEventListener('click',closeM);
d.addEventListener('keydown',function(e){if(e.key==='Escape'&&!dr.hidden)closeM();});
dr.addEventListener('click',function(e){if(e.target.tagName==='A')closeM();});
window.addEventListener('resize',function(){if(window.innerWidth>768&&!dr.hidden)closeM();});}
var qs=d.querySelectorAll('.faq-q');
for(var i=0;i<qs.length;i++){qs[i].addEventListener('click',function(){
var it=this.parentNode,open=it.classList.contains('open');
it.classList.toggle('open');this.setAttribute('aria-expanded',open?'false':'true');});}
})();
