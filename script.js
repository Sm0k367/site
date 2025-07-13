// Epic Tech AI Landing Page Scripts
// Custom JavaScript for enhanced functionality

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
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
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Apply fade-in animation to elements
    document.querySelectorAll('.fade-in-up').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Enhanced Intercom integration
    if (window.Intercom) {
        // Custom Intercom events
        window.Intercom('onShow', function() {
            console.log('Epic Tech AI Chat opened');
        });
        
        window.Intercom('onHide', function() {
            console.log('Epic Tech AI Chat closed');
        });
    }
    
    // Performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Epic Tech AI Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
            }, 0);
        });
    }
    
    // Enhanced Stripe button styling
    const stripeButtons = document.querySelectorAll('stripe-buy-button');
    stripeButtons.forEach(button => {
        button.addEventListener('load', function() {
            console.log('Epic Tech AI Stripe button loaded');
        });
    });
    
    // Custom analytics tracking
    function trackEvent(eventName, properties = {}) {
        console.log('Epic Tech AI Event:', eventName, properties);
        
        // Track with Intercom if available
        if (window.Intercom) {
            window.Intercom('trackEvent', eventName, properties);
        }
    }
    
    // Track navigation clicks
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            trackEvent('Navigation Click', {
                section: this.textContent,
                url: this.href
            });
        });
    });
    
    // Track CTA interactions
    document.querySelectorAll('stripe-buy-button').forEach(button => {
        button.addEventListener('click', function() {
            trackEvent('Purchase Intent', {
                button_location: 'hero_section'
            });
        });
    });
    
    // Mobile menu toggle (if needed)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Form validation and enhancement
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            trackEvent('Form Submission', {
                form_id: this.id || 'unknown',
                form_action: this.action
            });
        });
    });
    
    // Lazy loading for images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Enhanced error handling
    window.addEventListener('error', function(e) {
        console.error('Epic Tech AI Page Error:', e.error);
    });
    
    // Service Worker registration for PWA
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                    console.log('Epic Tech AI SW registered:', registration.scope);
                })
                .catch(function(error) {
                    console.log('Epic Tech AI SW registration failed:', error);
                });
        });
    }
});

// Global functions for Epic Tech AI
window.EpicTechAI = {
    // Open Intercom chat programmatically
    openChat: function() {
        if (window.Intercom) {
            window.Intercom('show');
        }
    },
    
    // Track custom events
    track: function(eventName, properties) {
        console.log('Epic Tech AI Custom Event:', eventName, properties);
        if (window.Intercom) {
            window.Intercom('trackEvent', eventName, properties);
        }
    },
    
    // Update user information
    updateUser: function(userData) {
        if (window.Intercom) {
            window.Intercom('update', userData);
        }
    }
};

// Console branding
console.log('%c🚀 Epic Tech AI', 'color: #1f8ce6; font-size: 24px; font-weight: bold;');
console.log('%cCustomer Communication Platform Loaded Successfully', 'color: #0d47a1; font-size: 14px;');