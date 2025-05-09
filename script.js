document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will respond as soon as possible.');
            contactForm.reset();
        });
    }

    // Quote form submission (for index.html)
    const quoteForm = document.getElementById('quote-form');
    
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your quote request! We will get back to you soon.');
            quoteForm.reset();
        });
    }

    // WhatsApp button hover effect
    const whatsappButton = document.querySelector('.whatsapp-button');
    
    if (whatsappButton) {
        whatsappButton.addEventListener('mouseenter', function() {
            const tooltip = this.querySelector('.whatsapp-tooltip');
            if (tooltip) {
                tooltip.style.opacity = '1';
                tooltip.style.visibility = 'visible';
            }
        });
        whatsappButton.addEventListener('mouseleave', function() {
            const tooltip = this.querySelector('.whatsapp-tooltip');
            if (tooltip) {
                tooltip.style.opacity = '0';
                tooltip.style.visibility = 'hidden';
            }
        });
    }
});