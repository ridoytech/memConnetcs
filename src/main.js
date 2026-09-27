import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Sticky Navbar Transition
  const navbar = document.getElementById('navbar');
  const navBtnWrapper = document.getElementById('nav-btn-wrapper');
  const navLiquidBg = document.getElementById('nav-liquid-bg');
  const navLinks = document.querySelectorAll('.nav-link');
  const logoContainer = document.getElementById('nav-logo-container');
  const navLogoImg = document.getElementById('nav-logo-img');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      // Scrolled state: Sleek, compact padding, white frosted glass, rounded-xl
      navbar.classList.remove('h-24', 'px-6', 'md:px-12', 'rounded-none', 'md:rounded-full');
      navbar.classList.add(
        'w-full',
        'max-w-6xl',
        'h-[4.25rem]',
        'px-6',
        'md:px-8',
        'mt-3',
        'bg-white/95',
        'backdrop-blur-xl',
        'rounded-xl',
        'border',
        'border-slate-200/80',
        'shadow-xl',
        'shadow-slate-900/5'
      );
      

      if (navLogoImg) navLogoImg.src = '/img/logo.png';

      // Nav links stay dark, make font-semibold
      navLinks.forEach(link => {
        link.classList.remove('font-medium', 'text-white', 'text-slate-900');
        link.classList.add('font-semibold', 'text-slate-700');
      });

      // Mobile button color
      if (mobileBtn) {
        mobileBtn.classList.remove('text-white', 'text-slate-900');
        mobileBtn.classList.add('text-slate-800');
      }

      if (navLiquidBg) {
        navLiquidBg.classList.remove('opacity-0');
        navLiquidBg.classList.add('opacity-30');
      }

      if (navBtnWrapper) {
        navBtnWrapper.classList.remove('w-[320px]');
        navBtnWrapper.classList.add('w-auto');
      }
    } else {
      // Top state (Integrated with Hero)
      navbar.classList.add('h-24', 'px-6', 'md:px-12');
      navbar.classList.remove(
        'max-w-6xl',
        'h-[4.25rem]',
        'px-6',
        'md:px-8',
        'mt-3',
        'bg-white/95',
        'backdrop-blur-xl',
        'rounded-xl',
        'border',
        'border-slate-200/80',
        'shadow-xl',
        'shadow-slate-900/5'
      );

      if (navLogoImg) navLogoImg.src = '/img/logo-light.png';

      // Nav links stay light, revert to font-medium
      navLinks.forEach(link => {
        link.classList.add('font-medium', 'text-white');
        link.classList.remove('font-semibold', 'text-slate-700', 'text-slate-900');
      });

      // Mobile button color
      if (mobileBtn) {
        mobileBtn.classList.add('text-white');
        mobileBtn.classList.remove('text-slate-800', 'text-slate-900');
      }

      if (navLiquidBg) {
        navLiquidBg.classList.add('opacity-0');
        navLiquidBg.classList.remove('opacity-30');
      }

      if (navBtnWrapper) {
        navBtnWrapper.classList.add('w-[320px]');
        navBtnWrapper.classList.remove('w-auto');
      }
    }
  });
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
