// Pour cacher la page du dessus
setTimeout(function() {
    var overlay = document.getElementById('overlay');
    overlay.classList.add('hidden');
}, 1000); // 1000 millisecondes = 1 secondes

// Animation d'apparition des sections
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

