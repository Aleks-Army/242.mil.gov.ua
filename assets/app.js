(function(){var t=document.querySelector('.mtoggle'),d=document.getElementById('drawer');
if(t){t.addEventListener('click',function(){var o=d.classList.toggle('open');t.setAttribute('aria-expanded',o);t.textContent=o?'Закрити':'Меню';if(o){var a=d.querySelector('a');a&&a.focus()}});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&d.classList.contains('open')){d.classList.remove('open');t.setAttribute('aria-expanded','false');t.textContent='Меню';t.focus()}})}
document.querySelectorAll('.chips').forEach(function(g){g.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;g.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x===b)});var k=b.dataset.f,n=0;
document.querySelectorAll('[data-cat]').forEach(function(r){var s=k==='all'||r.dataset.cat===k;r.hidden=!s;if(s)n++});var c=document.getElementById('count');if(c)c.textContent=n})});
document.querySelectorAll('form.mock').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();f.classList.add('sent');f.querySelector('.ok').focus()})});
})();
