(function(){
  var slides=document.querySelectorAll('.slide');
  var currEl=document.getElementById('curr');
  var totalEl=document.getElementById('total');
  var menuCurrEl=document.getElementById('menuCurr');
  var menuTotalEl=document.getElementById('menuTotal');
  var sectionEl=document.getElementById('sectionName');
  var prevBtn=document.getElementById('prev');
  var nextBtn=document.getElementById('next');
  var menuBtn=document.getElementById('menuBtn');
  var menuOverlay=document.getElementById('menuOverlay');
  var menuPanel=document.getElementById('menuPanel');
  var menuList=document.getElementById('menuList');
  var idx=0,isAnimating=false,menuOpen=false;
  totalEl.textContent=String(slides.length).padStart(2,'0');
  menuTotalEl.textContent=String(slides.length).padStart(2,'0');

  /* Inject in-flow footer into each slide (only visible on mobile via CSS) */
  slides.forEach(function(s){
    var inner=s.querySelector('.slide-inner');
    if(!inner)return;
    var footer=document.createElement('div');
    footer.className='slide-footer';
    footer.innerHTML='<div class="sf-section"><span class="pip"></span><span>'+s.dataset.section+'</span></div>'+
      '<a class="sf-credit" href="https://templatemo.com" target="_blank" rel="nofollow noopener"><span class="pip"></span><span>Design: TemplateMo</span></a>';
    inner.appendChild(footer);
  });

  /* Build menu items */
  slides.forEach(function(s,i){
    var item=document.createElement('div');
    item.className='menu-item';
    item.dataset.idx=i;
    item.innerHTML='<span class="mi-num">'+String(i+1).padStart(2,'0')+'</span>'+
      '<div style="flex:1"><div class="mi-label">'+s.dataset.section+'</div>'+
      (s.dataset.sub?'<div class="mi-sub">'+s.dataset.sub+'</div>':'')+'</div>'+
      '<span class="mi-arr">&rarr;</span>';
    item.addEventListener('click',function(){
      go(i);
      closeMenu();
    });
    menuList.appendChild(item);
  });
  var menuItems=menuList.querySelectorAll('.menu-item');
  function refreshMenuActive(){
    menuItems.forEach(function(el,i){el.classList.toggle('current',i===idx)});
  }
  refreshMenuActive();

  function go(t){
    if(isAnimating||t===idx||t<0||t>=slides.length)return;
    isAnimating=true;
    var old=slides[idx],next=slides[t];
    old.classList.add('exiting');
    old.classList.remove('active');
    setTimeout(function(){
      next.classList.add('active');
      next.scrollTop=0;
      old.classList.remove('exiting');
      idx=t;
      var n=String(idx+1).padStart(2,'0');
      currEl.textContent=n;
      menuCurrEl.textContent=n;
      sectionEl.textContent=next.dataset.section;
      refreshMenuActive();
      setTimeout(function(){isAnimating=false},900);
    },350);
  }

  function openMenu(){menuOpen=true;menuOverlay.classList.add('open');menuPanel.classList.add('open');menuBtn.classList.add('open')}
  function closeMenu(){menuOpen=false;menuOverlay.classList.remove('open');menuPanel.classList.remove('open');menuBtn.classList.remove('open')}
  function toggleMenu(){menuOpen?closeMenu():openMenu()}

  prevBtn.addEventListener('click',function(){go(idx-1)});
  nextBtn.addEventListener('click',function(){go(idx+1)});
  menuBtn.addEventListener('click',toggleMenu);
  menuOverlay.addEventListener('click',closeMenu);

  /* Delegated handler — any element with data-goto="N" jumps to slide N (1-indexed) */
  document.addEventListener('click',function(e){
    var el=e.target.closest('[data-goto]');
    if(!el)return;
    e.preventDefault();
    var n=parseInt(el.dataset.goto,10);
    if(!isNaN(n)&&n>=1&&n<=slides.length)go(n-1);
  });

  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'&&menuOpen){closeMenu();return}
    if(menuOpen)return;
    if(e.key==='ArrowRight')go(idx+1);
    if(e.key==='ArrowLeft')go(idx-1);
    if(e.key===' '){e.preventDefault();go(idx+1)}
    if(e.key==='m'||e.key==='M')toggleMenu();
    if(/^[1-9]$/.test(e.key))go(parseInt(e.key,10)-1);
  });

  /* Touch swipe — only when not scrolling vertically */
  var tx=0,ty=0,scrolling=false;
  document.addEventListener('touchstart',function(e){
    tx=e.touches[0].clientX;ty=e.touches[0].clientY;scrolling=false;
  },{passive:true});
  document.addEventListener('touchmove',function(e){
    var dx=Math.abs(e.touches[0].clientX-tx);
    var dy=Math.abs(e.touches[0].clientY-ty);
    if(dy>dx)scrolling=true;
  },{passive:true});
  document.addEventListener('touchend',function(e){
    if(scrolling||menuOpen)return;
    var dx=e.changedTouches[0].clientX-tx;
    var dy=Math.abs(e.changedTouches[0].clientY-ty);
    if(Math.abs(dx)>60&&dy<40)dx<0?go(idx+1):go(idx-1);
  },{passive:true});
})();