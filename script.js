// Nova Bistro interactions

(()=>{
    "use strict";

    const headerElement = document.querySelector('.site-header');
    const navToggleButton = document.getElementById('navToggle');
    const navigation = document.getElementById('siteNav');
    const navLinks = navigation ? navigation.querySelectorAll('a[href^="#"]') : [];
    const currentYearElement = document.getElementById('year');

    // Set current year in footer
    if (currentYearElement) {
        currentYearElement.textContent = String(new Date().getFullYear());
    }

    // Sticky header shadow on scroll
    const onScrollUpdateHeader = () => {
        if (!headerElement) return;
        const scrolled = window.scrollY > 8;
        headerElement.classList.toggle('scrolled', scrolled);
    };
    window.addEventListener('scroll', onScrollUpdateHeader, { passive: true });
    onScrollUpdateHeader();

    // Mobile nav toggle
    if (navToggleButton && headerElement) {
        navToggleButton.addEventListener('click', () => {
            const isOpen = headerElement.classList.toggle('nav-open');
            navToggleButton.classList.toggle('open', isOpen);
            navToggleButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
    }

    // Close mobile nav when clicking a link
    if (navLinks && navLinks.length && headerElement && navToggleButton) {
        navLinks.forEach(link => link.addEventListener('click', () => {
            headerElement.classList.remove('nav-open');
            navToggleButton.classList.remove('open');
            navToggleButton.setAttribute('aria-expanded', 'false');
        }));
    }

    // Enhanced contact form handling with Formspree integration
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const messageError = document.getElementById('messageError');
        const formStatus = document.getElementById('formStatus');
        const submitButton = contactForm.querySelector('button[type="submit"]');

        /**
         * Validate email string using a comprehensive pattern
         */
        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(String(email).toLowerCase());
        };

        /**
         * Clear all error messages
         */
        const clearErrors = () => {
            if (nameError) nameError.textContent = '';
            if (emailError) emailError.textContent = '';
            if (messageError) messageError.textContent = '';
            if (formStatus) formStatus.textContent = '';
        };

        /**
         * Set form loading state
         */
        const setLoadingState = (isLoading) => {
            if (submitButton) {
                submitButton.disabled = isLoading;
                submitButton.textContent = isLoading ? 'Sending…' : 'Send Message';
            }
        };

        /**
         * Handle form submission
         */
        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            clearErrors();

            let hasError = false;

            // Validate name
            if (!nameInput.value.trim()) {
                hasError = true;
                if (nameError) nameError.textContent = 'Please enter your name.';
            }

            // Validate email
            if (!emailInput.value.trim()) {
                hasError = true;
                if (emailError) emailError.textContent = 'Please enter your email address.';
            } else if (!isValidEmail(emailInput.value)) {
                hasError = true;
                if (emailError) emailError.textContent = 'Please enter a valid email address.';
            }

            // Validate message
            if (!messageInput.value.trim()) {
                hasError = true;
                if (messageError) messageError.textContent = 'Please enter a message.';
            }

            if (hasError) {
                return;
            }

            // Get Formspree endpoint from data attribute
            const formspreeEndpoint = contactForm.getAttribute('data-formspree');
            
            if (!formspreeEndpoint || formspreeEndpoint.includes('YOUR_FORM_ID')) {
                // Fallback: simulate successful submission
                setLoadingState(true);
                setTimeout(() => {
                    setLoadingState(false);
                    if (formStatus) {
                        formStatus.textContent = 'Thanks! Your message has been sent.';
                    }
                    contactForm.reset();
                }, 1000);
                return;
            }

            // Submit to Formspree
            setLoadingState(true);
            
            try {
                const formData = new FormData(contactForm);
                const response = await fetch(formspreeEndpoint, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    if (formStatus) {
                        formStatus.textContent = 'Thanks! Your message has been sent.';
                    }
                    contactForm.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                if (formStatus) {
                    formStatus.textContent = 'Sorry, there was an error sending your message. Please try again.';
                }
            } finally {
                setLoadingState(false);
            }
        });

        // Real-time validation on blur
        nameInput.addEventListener('blur', () => {
            if (!nameInput.value.trim() && nameError) {
                nameError.textContent = 'Please enter your name.';
            } else if (nameError) {
                nameError.textContent = '';
            }
        });

        emailInput.addEventListener('blur', () => {
            if (!emailInput.value.trim() && emailError) {
                emailError.textContent = 'Please enter your email address.';
            } else if (emailInput.value.trim() && !isValidEmail(emailInput.value) && emailError) {
                emailError.textContent = 'Please enter a valid email address.';
            } else if (emailError) {
                emailError.textContent = '';
            }
        });

        messageInput.addEventListener('blur', () => {
            if (!messageInput.value.trim() && messageError) {
                messageError.textContent = 'Please enter a message.';
            } else if (messageError) {
                messageError.textContent = '';
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = headerElement ? headerElement.offsetHeight : 0;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Keyboard navigation improvements
    document.addEventListener('keydown', (e) => {
        // Close mobile nav with Escape key
        if (e.key === 'Escape' && headerElement && headerElement.classList.contains('nav-open')) {
            headerElement.classList.remove('nav-open');
            if (navToggleButton) {
                navToggleButton.classList.remove('open');
                navToggleButton.setAttribute('aria-expanded', 'false');
                navToggleButton.focus();
            }
        }
    });

    // Focus management for accessibility
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    // Trap focus in mobile nav when open
    if (navigation && navToggleButton) {
        const focusableNavElements = navigation.querySelectorAll(focusableElements);
        const firstFocusableElement = focusableNavElements[0];
        const lastFocusableElement = focusableNavElements[focusableNavElements.length - 1];

        navigation.addEventListener('keydown', (e) => {
            if (!headerElement.classList.contains('nav-open')) return;

            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusableElement) {
                        lastFocusableElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusableElement) {
                        firstFocusableElement.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    }
})();