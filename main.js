const menuBtn = document.querySelector('.menu-btn');
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('overlay');
    const submenuButtons = document.querySelectorAll('.has-submenu');
    const content = document.getElementById('content');

    function toggleMenu(){menuBtn.classList.toggle('active'); menu.classList.toggle('active'); overlay.classList.toggle('active');}
    function closeMenu(){menuBtn.classList.remove('active'); menu.classList.remove('active'); overlay.classList.remove('active');}

    submenuButtons.forEach(btn=>{
      btn.addEventListener('click', ()=>{btn.classList.toggle('active');});
    });


