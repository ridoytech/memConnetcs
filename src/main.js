import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // === NAVBAR JS ===

  // Hero mobile menu toggle
  const heroBtn = document.getElementById('hero-menu-btn');
  const heroMobileMenu = document.getElementById('hero-mobile-menu');
  if (heroBtn && heroMobileMenu) {
    heroBtn.addEventListener('click', () => heroMobileMenu.classList.toggle('hidden'));
  }

  // Sticky mobile menu toggle
  const stickyBtn = document.getElementById('sticky-menu-btn');
  const stickyMobileMenu = document.getElementById('sticky-mobile-menu');
  if (stickyBtn && stickyMobileMenu) {
    stickyBtn.addEventListener('click', () => stickyMobileMenu.classList.toggle('hidden'));
  }

  // Show/hide sticky navbar on scroll
  const navSticky = document.getElementById('nav-sticky');
  if (navSticky) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        navSticky.classList.remove('opacity-0', '-translate-y-full');
        navSticky.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
      } else {
        navSticky.classList.add('opacity-0', '-translate-y-full');
        navSticky.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
      }
    });
  }

  // Animated Counter for Stats Section
  const counters = document.querySelectorAll('.counter');
  const speed = 200; // The lower the slower

  const animateCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 15);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  }

  // Intersection Observer to trigger counter animation when scrolled into view
  const statsSection = document.querySelector('.bg-primary');
  
  if(statsSection) {
    const observer = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    
    observer.observe(statsSection);
  }

  // Draggable horizontal sliders
  const sliders = document.querySelectorAll('.overflow-x-auto');
  
  sliders.forEach(slider => {
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.style.cursor = 'grabbing';
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      // Disable snap while dragging
      slider.style.scrollSnapType = 'none';
    });
    
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.style.cursor = '';
      slider.style.scrollSnapType = '';
    });
    
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.style.cursor = '';
      slider.style.scrollSnapType = '';
    });
    
    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed
      slider.scrollLeft = scrollLeft - walk;
    });
  });


  // Download Modal Logic
  const modal = document.getElementById('download-modal');
  const modalClose = document.getElementById('modal-close');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const dlTriggers = document.querySelectorAll('.dl-modal-trigger');

  if (modal) {
    const closeModal = () => {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    };

    const openModal = (e) => {
      e.preventDefault();
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    };

    dlTriggers.forEach(trigger => {
      trigger.addEventListener('click', openModal);
    });

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
  }


  // FAQ Accordion Logic
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-btn');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');
    
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      
      // Close all first
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-answer').style.maxHeight = null;
        otherItem.querySelector('.faq-icon').classList.remove('rotate-180');
      });

      if (!isOpen) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.classList.add('rotate-180');
      }
    });
  });

});
