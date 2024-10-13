function animateLoadingDots() {
    const loadingDots = document.querySelector('.loading-dots');
    const dots = [
        ' ','a', 'al', 'ali', 'alia', 'aliad', 'aliado', 'aliado ', 'aliado d', 'aliado di', 'aliado dig', 'aliado digi', 'aliado digit', 'aliado digita', 'aliado digital',
        ' ', ' ', 'e', 'es', 'est', 'estr', 'estra', 'estrat', 'estrate', 'estrateg', 'estratega', ' ', 'o', 'op', 'opc', 'opci', 'opció', 'opción'
    ];
    let index = 0;

    setInterval(() => {
        loadingDots.textContent = dots[index];
        index = (index + 1) % dots.length;
    }, 180);
}

document.addEventListener('DOMContentLoaded', animateLoadingDots);

document.addEventListener('DOMContentLoaded', function() {
    const loader = document.querySelector('.loading');
    
    function hideLoader() {
        loader.classList.add('hidden');
    }
    
    window.addEventListener('load', function() {
        setTimeout(hideLoader, 1000);
    });
    
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.indexOf('#') !== 0 && !e.ctrlKey && !e.metaKey) {
                e.preventDefault();
                loader.classList.remove('hidden');
                setTimeout(() => {
                    window.location = href;
                }, 500);
            }
        });
    });
});