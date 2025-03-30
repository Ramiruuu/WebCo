// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Button Click Animation
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);
    });
});

// Fade-in Animation for Sections on Scroll
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    section.style.opacity = '0';
    observer.observe(section);
});

// Add this to styles.css for fade-in effect (you can copy this into your CSS file)
const style = document.createElement('style');
style.innerHTML = `
    .fade-in {
        animation: fadeIn 1s ease forwards;
    }
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// Collection Modal Logic
const viewButtons = document.querySelectorAll('.view-btn');
const collectionModal = document.getElementById('collectionModal');
const modalImage = document.getElementById('modalImage');
const modalQuote = document.getElementById('modalQuote');
const modalDate = document.getElementById('modalDate');
const closeBtn = document.querySelector('.collection-modal .close-btn');

viewButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.parentElement;
        const imageSrc = card.getAttribute('data-image');
        const quote = card.getAttribute('data-quote');
        const date = card.getAttribute('data-date');

        modalImage.src = imageSrc;
        modalQuote.textContent = quote;
        modalDate.textContent = date;

        collectionModal.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    collectionModal.style.display = 'none';
});

// Close Modal on Outside Click
window.addEventListener('click', (e) => {
    if (e.target === collectionModal) {
        collectionModal.style.display = 'none';
    }
});