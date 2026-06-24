/* ==========================================================================
   INTERACTIVITY & FUNCTIONS: ARROCITAS PREMIUM
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Behavior
    initNavigation();

    // 2. Testimonials Slider
    initTestimonials();

    // 3. WhatsApp Order Builder
    initOrderBuilder();

    // 4. Scroll Animations (Intersection Observer)
    initScrollAnimations();
});

/**
 * Navigation Bar Scroll Effect & Mobile Menu Toggle
 */
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Toggle hamburger icon between ☰ and ✕
            const icon = navToggle.querySelector('i');
            if (icon) {
                if (navMenu.classList.contains('active')) {
                    icon.className = 'fa fa-times';
                } else {
                    icon.className = 'fa fa-bars';
                }
            }
        });
    }

    // Close menu when link is clicked (mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = navToggle.querySelector('i');
                if (icon) icon.className = 'fa fa-bars';
            }
        });
    });
}

/**
 * Testimonial Slider / Carousel
 */
function initTestimonials() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dotsContainer = document.getElementById('sliderDots');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    
    if (slides.length === 0) return;

    let currentSlide = 0;
    const totalSlides = slides.length;

    // Create Navigation Dots
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        dot.setAttribute('aria-label', `Ir al testimonio ${index + 1}`);
        dot.addEventListener('click', () => goToSlide(index));
        if (dotsContainer) dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.slider-dot');

    function updateSlidePosition() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlidePosition();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    }

    function goToSlide(index) {
        currentSlide = index;
        updateSlidePosition();
    }

    // Event Listeners
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    // Auto Play every 6 seconds
    let autoPlayInterval = setInterval(nextSlide, 6000);

    // Reset interval when user interacts
    const resetInterval = () => {
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(nextSlide, 8000);
    };

    if (prevBtn) prevBtn.addEventListener('click', resetInterval);
    if (nextBtn) nextBtn.addEventListener('click', resetInterval);
    if (dotsContainer) dotsContainer.addEventListener('click', resetInterval);
}

/**
 * WhatsApp Order Builder Widget
 */
function initOrderBuilder() {
    const orderItems = document.querySelectorAll('.order-item');
    const subtotalEl = document.getElementById('orderSubtotal');
    const totalEl = document.getElementById('orderTotal');
    const nameInput = document.getElementById('clientName');
    const addressInput = document.getElementById('clientAddress');
    const sendOrderBtn = document.getElementById('sendOrderBtn');

    if (orderItems.length === 0) return;

    // Prices in COP
    const PRICES = {
        tradicional: 5500,
        integral: 6000,
        cookies: 6500
    };

    let quantities = {
        tradicional: 0,
        integral: 0,
        cookies: 0
    };

    // Add click listeners to plus/minus buttons
    orderItems.forEach(item => {
        const id = item.dataset.id;
        const minusBtn = item.querySelector('.qty-minus');
        const plusBtn = item.querySelector('.qty-plus');
        const qtyVal = item.querySelector('.qty-val');

        if (!minusBtn || !plusBtn || !qtyVal) return;

        minusBtn.addEventListener('click', () => {
            if (quantities[id] > 0) {
                quantities[id]--;
                qtyVal.textContent = quantities[id];
                calculateTotal();
            }
        });

        plusBtn.addEventListener('click', () => {
            quantities[id]++;
            qtyVal.textContent = quantities[id];
            calculateTotal();
        });
    });

    function calculateTotal() {
        let subtotal = 0;
        
        for (const [key, qty] of Object.entries(quantities)) {
            subtotal += qty * PRICES[key];
        }

        // Format to COP (e.g. 5.500)
        const formatCOP = (num) => {
            return '$' + num.toLocaleString('es-CO');
        };

        if (subtotalEl) subtotalEl.textContent = formatCOP(subtotal);
        if (totalEl) totalEl.textContent = formatCOP(subtotal);
    }

    // Submit Order to WhatsApp
    if (sendOrderBtn) {
        sendOrderBtn.addEventListener('click', (e) => {
            e.preventDefault();

            const name = nameInput ? nameInput.value.trim() : '';
            const address = addressInput ? addressInput.value.trim() : '';

            // Validation
            let totalItems = 0;
            for (const qty of Object.values(quantities)) {
                totalItems += qty;
            }

            if (totalItems === 0) {
                alert('Por favor selecciona al menos 1 producto para armar tu pedido.');
                return;
            }

            if (!name) {
                alert('Por favor ingresa tu nombre.');
                if (nameInput) nameInput.focus();
                return;
            }

            if (!address) {
                alert('Por favor ingresa tu ciudad y dirección.');
                if (addressInput) addressInput.focus();
                return;
            }

            // Create message text
            let itemsText = '';
            let totalValue = 0;

            const namesFriendly = {
                tradicional: 'Arrocitas Tradicionales',
                integral: 'Arrocitas Integrales',
                cookies: 'Arrocitas Cookies and Cream'
            };

            for (const [key, qty] of Object.entries(quantities)) {
                if (qty > 0) {
                    const price = PRICES[key];
                    const itemTotal = qty * price;
                    totalValue += itemTotal;
                    itemsText += `• ${qty}x ${namesFriendly[key]} ($${price.toLocaleString('es-CO')} c/u) = $${itemTotal.toLocaleString('es-CO')}\n`;
                }
            }

            const message = `¡Hola Arrocitas! 🌾\nMe gustaría hacer un pedido desde la página web. Aquí están mis datos:\n\n*Cliente:* ${name}\n*Dirección/Ciudad:* ${address}\n\n*Pedido:* \n${itemsText}\n*Total del Pedido:* $${totalValue.toLocaleString('es-CO')} COP\n\n¡Muchas gracias! Espero su confirmación. 😊`;

            // Encode message for URL
            const encodedMessage = encodeURIComponent(message);
            const phoneNumber = '573218414224'; // Client contact number
            const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

            // Redirect to WhatsApp
            window.open(whatsappUrl, '_blank');
        });
    }
}

/**
 * Simple animation on scroll
 */
function initScrollAnimations() {
    const animationElements = document.querySelectorAll('.feature-card, .product-card, .about-img-box, .about-text, .order-card-wrapper');
    
    // Add CSS initial state to elements
    animationElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });

    const observerOptions = {
        root: null,
        threshold: 0.15,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                observer.unobserve(el);
            }
        });
    }, observerOptions);

    animationElements.forEach(el => {
        observer.observe(el);
    });
}
