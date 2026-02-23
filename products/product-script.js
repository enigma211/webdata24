// Product Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Image Slider Functionality
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;

    // Show slide function
    function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentSlide = index;
    }

    // Next slide function
    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    // Previous slide function
    function prevSlide() {
        const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
    }

    // Event listeners for navigation buttons
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Auto-play slider (optional)
    let autoPlayInterval = setInterval(nextSlide, 5000);

    // Pause auto-play on hover
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(autoPlayInterval);
    });

    sliderContainer.addEventListener('mouseleave', () => {
        autoPlayInterval = setInterval(nextSlide, 5000);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation classes when elements come into view
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Stop observing this element after it's animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Function to initialize animations
    function initializeAnimations() {
        // Observe feature cards for animation
        document.querySelectorAll('.feature-card').forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(card);
        });

        // Observe description box for animation
        const descriptionBox = document.querySelector('.description-box');
        if (descriptionBox) {
            descriptionBox.style.opacity = '0';
            descriptionBox.style.transform = 'translateY(30px)';
            descriptionBox.style.transition = 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s';
            observer.observe(descriptionBox);
        }

        // Observe contact box for animation
        const contactBox = document.querySelector('.contact-box');
        if (contactBox) {
            contactBox.style.opacity = '0';
            contactBox.style.transform = 'translateY(30px)';
            contactBox.style.transition = 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s';
            observer.observe(contactBox);
        }

        // Observe audience cards if they exist
        document.querySelectorAll('.audience-card').forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(card);
        });

        // Observe workflow steps if they exist
        document.querySelectorAll('.workflow-step').forEach((step, index) => {
            step.style.opacity = '0';
            step.style.transform = 'translateY(30px)';
            step.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(step);
        });

        // Observe section cards if they exist
        document.querySelectorAll('.section-card').forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(card);
        });

        // Observe exam type cards if they exist
        document.querySelectorAll('.exam-type-card').forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(card);
        });

        // Observe category cards if they exist
        document.querySelectorAll('.category-card').forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(card);
        });
    }

    // Initialize animations
    initializeAnimations();

    // Fallback for mobile devices - show elements after a delay
    setTimeout(() => {
        document.querySelectorAll('.feature-card, .description-box, .contact-box, .audience-card, .workflow-step, .section-card, .exam-type-card, .category-card').forEach(element => {
            if (element.style.opacity === '0') {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }, 2000);

    // Add loading animation
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Mobile-specific fixes
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // Force show all elements on mobile after page load
    if (isMobile()) {
        setTimeout(() => {
            document.querySelectorAll('.feature-card, .description-box, .contact-box, .audience-card, .workflow-step, .section-card, .exam-type-card, .category-card').forEach(element => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                element.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            });
        }, 1000);
    }

    // Handle resize events
    window.addEventListener('resize', () => {
        if (isMobile()) {
            document.querySelectorAll('.feature-card, .description-box, .contact-box, .audience-card, .workflow-step, .section-card, .exam-type-card, .category-card').forEach(element => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            });
        }
    });
});
