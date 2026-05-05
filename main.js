document.addEventListener('DOMContentLoaded', () => {
    // Sticky Navbar
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
            navbar.classList.add('scrolled');
        } else {
            navbar.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
            navbar.classList.remove('scrolled');
        }
    });

    // Dropdown Menu Toggle (funziona su desktop e mobile)
    const menuBtn = document.getElementById('mobile-menu-btn');
    const dropdown = document.getElementById('nav-dropdown');

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = dropdown.classList.toggle('active');
        menuBtn.classList.toggle('active', isOpen);
        dropdown.setAttribute('aria-hidden', !isOpen);

        // Toggle icona: lista → X quando aperto
        const icon = menuBtn.querySelector('i');
        if (isOpen) {
            icon.classList.replace('ph-list', 'ph-x');
        } else {
            icon.classList.replace('ph-x', 'ph-list');
        }
    });

    // Chiudi dropdown cliccando su un link
    dropdown.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            closeDropdown();
        });
    });

    // Chiudi dropdown cliccando fuori
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target)) {
            closeDropdown();
        }
    });

    // Chiudi dropdown premendo Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeDropdown();
    });

    function closeDropdown() {
        dropdown.classList.remove('active');
        menuBtn.classList.remove('active');
        dropdown.setAttribute('aria-hidden', 'true');
        const icon = menuBtn.querySelector('i');
        icon.classList.replace('ph-x', 'ph-list');
    }
});
