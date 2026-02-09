  // Menunggu dokumen selesai dimuat agar elemen ditemukan
  document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('overlay');
    const submenuButtons = document.querySelectorAll('.has-submenu');
    
    // Fungsi Toggle Menu
    function toggleMenu() {
      menuBtn.classList.toggle('active');
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
    }

    // Fungsi Tutup Menu
    function closeMenu() {
      menuBtn.classList.remove('active');
      menu.classList.remove('active');
      overlay.classList.remove('active');
    }

    // Event Listener untuk Tombol Menu
    menuBtn.addEventListener('click', toggleMenu);
    
    // Event Listener untuk Overlay (Klik di luar menu untuk menutup)
    overlay.addEventListener('click', closeMenu);

    // Logic Submenu Accordion
    submenuButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        // Opsional: Tutup submenu lain saat satu dibuka
        // submenuButtons.forEach(otherBtn => {
        //   if (otherBtn !== this) otherBtn.classList.remove('active');
        // });
        
        this.classList.toggle('active');
        
        // Update aria-expanded untuk aksesibilitas
        const isExpanded = this.classList.contains('active');
        this.setAttribute('aria-expanded', isExpanded);
      });
    });

    // Dummy Function loadPage (Agar tidak error saat link diklik)
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // e.preventDefault(); // Uncomment jika ingin mencegah reload
            const page = link.getAttribute('data-page');
            console.log("Loading page: " + page);
            // closeMenu(); // Opsional: tutup menu setelah klik link
        });
    });
  });