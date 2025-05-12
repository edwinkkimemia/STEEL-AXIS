document.addEventListener('DOMContentLoaded', function() {
    console.log("Script loaded successfully");

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    let isMenuOpen = false;

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            isMenuOpen = !isMenuOpen;
            mobileMenu.classList.toggle('hidden', !isMenuOpen);
            mobileMenuButton.setAttribute('aria-expanded', isMenuOpen);
            mobileMenuButton.querySelector('i').classList.toggle('ri-menu-line', !isMenuOpen);
            mobileMenuButton.querySelector('i').classList.toggle('ri-close-line', isMenuOpen);
            console.log(`Mobile menu toggled: ${isMenuOpen ? 'Open' : 'Closed'}`);
        });

        // Close menu when a link is clicked
        const mobileLinks = mobileMenu.querySelectorAll('.nav-mobile-link, .quote-button-mobile');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                isMenuOpen = false;
                mobileMenu.classList.add('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
                mobileMenuButton.querySelector('i').classList.remove('ri-close-line');
                mobileMenuButton.querySelector('i').classList.add('ri-menu-line');
                console.log("Mobile menu closed after link click");
            });
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

    // Quote form submission
    const quoteForm = document.getElementById('quote-form');
    
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const termsCheckbox = document.getElementById('terms-checkbox');
            if (termsCheckbox && termsCheckbox.getAttribute('data-checked') !== 'true') {
                alert('Please agree to the Terms & Conditions and Privacy Policy.');
                return;
            }
            alert('Thank you for your inquiry! Our team will get back to you within 24 hours.');
            quoteForm.reset();
            const checkboxes = document.querySelectorAll('.custom-checkbox');
            checkboxes.forEach(checkbox => {
                checkbox.setAttribute('data-checked', 'false');
                checkbox.classList.remove('checked');
            });
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

    // Testimonial slider
    const slider = document.getElementById('testimonials-slider');
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-dot');
    const prevButton = document.getElementById('prev-testimonial');
    const nextButton = document.getElementById('next-testimonial');
    let currentSlide = 0;
    
    if (slider && slides.length > 0) {
        function updateSlider() {
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }
        
        if (prevButton) {
            prevButton.addEventListener('click', function() {
                currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
                updateSlider();
            });
        }
        
        if (nextButton) {
            nextButton.addEventListener('click', function() {
                currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
                updateSlider();
            });
        }
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                currentSlide = index;
                updateSlider();
            });
        });
        
        // Auto slide every 5 seconds
        setInterval(function() {
            currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
            updateSlider();
        }, 5000);
    }

    // Custom checkbox functionality
    const checkboxes = document.querySelectorAll('.custom-checkbox');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', function() {
            const isChecked = this.getAttribute('data-checked') === 'true';
            this.setAttribute('data-checked', !isChecked);
            this.classList.toggle('checked');
            this.setAttribute('aria-checked', !isChecked);
        });
    });
});