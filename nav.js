// Phebe Travel - Shared Navigation & Footer
const CURRENT_PAGE = window.location.pathname.split('/').pop() || 'index.html';

function isActive(page) {
  return CURRENT_PAGE === page ? 'text-gold border-b-2 border-gold' : 'text-white hover:text-gold';
}

function renderNav() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  nav.innerHTML = `
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" id="navbar">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <a href="index.html" class="flex items-center space-x-3">
          <div class="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <img class="rounded-full " src="./phebe.jpeg">
          </div>
          <div>
          </div>
        </a>

        <!-- Desktop Nav -->
        <div class="hidden lg:flex items-center space-x-1">
          <a href="index.html" class="nav-link px-4 py-2 text-sm font-inter font-medium transition-all duration-200 ${isActive('index.html')}">Home</a>
          <a href="about.html" class="nav-link px-4 py-2 text-sm font-inter font-medium transition-all duration-200 ${isActive('about.html')}">About</a>
          
          <!-- Services Dropdown -->
          <div class="relative group">
            <button class="nav-link px-4 py-2 text-sm font-inter font-medium text-white hover:text-gold flex items-center gap-1 transition-all duration-200">
              Services <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div class="absolute top-full left-0 mt-2 w-56 bg-navy-dark border border-gold/20 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
              <a href="flights.html" class="flex items-center gap-3 px-4 py-3 text-sm text-white hover:text-gold hover:bg-white/5 transition-all">
                 Flight Booking
              </a>
              <a href="consultation.html" class="flex items-center gap-3 px-4 py-3 text-sm text-white hover:text-gold hover:bg-white/5 transition-all">
                 Travel Consultation
              </a>
              <a href="visa.html" class="flex items-center gap-3 px-4 py-3 text-sm text-white hover:text-gold hover:bg-white/5 transition-all">
                 Visa Assistance
              </a>
              <a href="packages.html" class="flex items-center gap-3 px-4 py-3 text-sm text-white hover:text-gold hover:bg-white/5 transition-all">
                 Travel Packages
              </a>
            </div>
          </div>

          <a href="destinations.html" class="nav-link px-4 py-2 text-sm font-inter font-medium transition-all duration-200 ${isActive('destinations.html')}">Study Abroad</a>
          <a href="blog.html" class="nav-link px-4 py-2 text-sm font-inter font-medium transition-all duration-200 ${isActive('blog.html')}">Blog</a>
          <a href="contact.html" class="nav-link px-4 py-2 text-sm font-inter font-medium transition-all duration-200 ${isActive('contact.html')}">Contact</a>
        </div>

        <!-- Right Actions -->
        <div class="hidden lg:flex items-center space-x-3">
          <a href="flights.html" class="bg-gold hover:bg-blue-300 text-navy-dark font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 font-inter shadow-lg hover:shadow-black/50 hover:-translate-y-0.5">
            Book Consultation
          </a>
        </div>

        <!-- Mobile menu button -->
        <button id="mobileMenuBtn" class="lg:hidden text-white p-2">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div id="mobileMenu" class="hidden lg:hidden bg-navy-dark border-t border-white/10">
      <div class="px-4 py-4 space-y-2">
        <a href="index.html" class="block px-4 py-3 text-white hover:text-gold hover:bg-white/5 rounded-lg font-inter text-sm transition-all">Home</a>
        <a href="about.html" class="block px-4 py-3 text-white hover:text-gold hover:bg-white/5 rounded-lg font-inter text-sm transition-all">About</a>
        <a href="flights.html" class="block px-4 py-3 text-white hover:text-gold hover:bg-white/5 rounded-lg font-inter text-sm transition-all">✈ Flight Booking</a>
        <a href="consultation.html" class="block px-4 py-3 text-white hover:text-gold hover:bg-white/5 rounded-lg font-inter text-sm transition-all">💼 Travel Consultation</a>
        <a href="visa.html" class="block px-4 py-3 text-white hover:text-gold hover:bg-white/5 rounded-lg font-inter text-sm transition-all">📋 Visa Assistance</a>
        <a href="packages.html" class="block px-4 py-3 text-white hover:text-gold hover:bg-white/5 rounded-lg font-inter text-sm transition-all">🌍 Travel Packages</a>
        <a href="destinations.html" class="block px-4 py-3 text-white hover:text-gold hover:bg-white/5 rounded-lg font-inter text-sm transition-all">Study Abroad</a>
        <a href="blog.html" class="block px-4 py-3 text-white hover:text-gold hover:bg-white/5 rounded-lg font-inter text-sm transition-all">Blog</a>
        <a href="faq.html" class="block px-4 py-3 text-white hover:text-gold hover:bg-white/5 rounded-lg font-inter text-sm transition-all">FAQ</a>
        <a href="contact.html" class="block px-4 py-3 text-white hover:text-gold hover:bg-white/5 rounded-lg font-inter text-sm transition-all">Contact</a>
        <a href="flights.html" class="block px-4 py-3 bg-gold text-navy-dark font-semibold rounded-lg font-inter text-sm text-center mt-4">Book a consultation</a>
      </div>
    </div>
  </nav>`;

  // Mobile menu toggle
  document.getElementById('mobileMenuBtn').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('hidden');
  });

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('bg-navy-dark/95', 'backdrop-blur-md', 'shadow-2xl', 'border-b', 'border-white/10');
    } else {
      navbar.classList.remove('bg-navy-dark/95', 'backdrop-blur-md', 'shadow-2xl', 'border-b', 'border-white/10');
    }
  });

  // Dark mode toggle
  const dmToggle = document.getElementById('darkModeToggle');
  if (dmToggle) {
    dmToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
    });
  }
  if (localStorage.getItem('darkMode') === 'true') {
    document.documentElement.classList.add('dark');
  }
}

function renderFooter() {
  const footer = document.getElementById('main-footer');
  if (!footer) return;
  footer.innerHTML = `
  <footer class="bg-navy-dark text-white">
    <!-- Newsletter -->
    <div class="bg-gold/10 border-t border-gold/20 border-b border-gold/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 class="text-xl font-bold font-poppins text-white">Get Travel Deals & Updates</h3>
            <p class="text-white/60 font-inter text-sm mt-1">Subscribe to our newsletter for exclusive offers and travel inspiration.</p>
          </div>
          <div class="flex w-full md:w-auto gap-3">
            <input type="email" placeholder="Enter your email" class="flex-1 md:w-72 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 font-inter text-sm focus:outline-none focus:border-gold">
            <button class="bg-gold hover:bg-yellow-400 text-navy-dark font-semibold px-6 py-3 rounded-full font-inter text-sm transition-all whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Footer -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Brand -->
        <div class="lg:col-span-1">
          <a href="index.html" class="flex items-center space-x-3 mb-4">
            <div class="w-10 h-10 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center">
              <span class="text-gold font-bold text-lg font-poppins">P</span>
            </div>
            <div>
              <div class="text-white font-bold text-lg font-poppins">PHEBE</div>
              <div class="text-gold/70 text-xs font-inter tracking-widest uppercase">Travel & Consultancy</div>
            </div>
          </a>
          <p class="text-white/50 font-inter text-sm leading-relaxed mb-6">
            Your trusted partner for seamless flight bookings, visa assistance, and unforgettable travel experiences worldwide.
          </p>
          <div class="flex space-x-3">
            <a href="#" class="w-9 h-9 bg-white/10 hover:bg-gold/20 border border-white/10 hover:border-gold/30 rounded-full flex items-center justify-center text-white hover:text-gold transition-all text-sm">f</a>
            <a href="#" class="w-9 h-9 bg-white/10 hover:bg-gold/20 border border-white/10 hover:border-gold/30 rounded-full flex items-center justify-center text-white hover:text-gold transition-all text-sm">in</a>
            <a href="#" class="w-9 h-9 bg-white/10 hover:bg-gold/20 border border-white/10 hover:border-gold/30 rounded-full flex items-center justify-center text-white hover:text-gold transition-all text-sm">ig</a>
            <a href="#" class="w-9 h-9 bg-white/10 hover:bg-gold/20 border border-white/10 hover:border-gold/30 rounded-full flex items-center justify-center text-white hover:text-gold transition-all text-sm">tw</a>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-white font-semibold font-poppins mb-5 text-sm uppercase tracking-wider">Our Services</h4>
          <ul class="space-y-3">
            <li><a href="flights.html" class="text-white/50 hover:text-gold font-inter text-sm transition-all">Flight Booking</a></li>
            <li><a href="consultation.html" class="text-white/50 hover:text-gold font-inter text-sm transition-all">Travel Consultation</a></li>
            <li><a href="visa.html" class="text-white/50 hover:text-gold font-inter text-sm transition-all">Visa Assistance</a></li>
            <li><a href="packages.html" class="text-white/50 hover:text-gold font-inter text-sm transition-all">Travel Packages</a></li>
            <li><a href="destinations.html" class="text-white/50 hover:text-gold font-inter text-sm transition-all">Study Abroad</a></li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-white font-semibold font-poppins mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
          <ul class="space-y-3">
            <li><a href="about.html" class="text-white/50 hover:text-gold font-inter text-sm transition-all">About Phebe</a></li>
            <li><a href="blog.html" class="text-white/50 hover:text-gold font-inter text-sm transition-all">Travel Blog</a></li>
            <li><a href="faq.html" class="text-white/50 hover:text-gold font-inter text-sm transition-all">FAQ</a></li>
            <li><a href="contact.html" class="text-white/50 hover:text-gold font-inter text-sm transition-all">Contact Us</a></li>
            <li><a href="#" class="text-white/50 hover:text-gold font-inter text-sm transition-all">Privacy Policy</a></li>
            <li><a href="#" class="text-white/50 hover:text-gold font-inter text-sm transition-all">Terms of Service</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-white font-semibold font-poppins mb-5 text-sm uppercase tracking-wider">Contact Us</h4>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <span class="text-white/50 font-inter text-sm">18, Pipeline Road, Ajagbole, Ogun State, Nigeria</span>
            </div>
            <div class="flex items-center gap-3">
              <a href="tel:+2349016520888" class="text-white/50 hover:text-gold font-inter text-sm transition-all">+234 901 652 0888</a>
            </div>
            <div class="flex items-center gap-3">
              <a href="mailto:Educationserphebe@gmail.com" class="text-white/50 hover:text-gold font-inter text-sm transition-all">Educationserphebe@gmail.com</a>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-white/50 font-inter text-sm">Mon–Sat: 8am – 8pm</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-white/40 font-inter text-xs">© 2026 Phebe Consultancy & Educational Management Services. All rights reserved.</p>
        <div class="flex items-center gap-4">
          <span class="text-white/40 font-inter text-xs">🔒 SSL Secured</span>
          <span class="text-white/40 font-inter text-xs">IATA Accredited</span>
        </div>
      </div>
    </div>
  </footer>`;
}

function renderFloatingWidgets() {
  const container = document.createElement('div');
  container.innerHTML = `
    <!-- WhatsApp Float -->
    <a href="https://wa.me/2349016520888" target="_blank" 
       class="fixed bottom-6 left-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-xl hover:shadow-green-500/40 transition-all duration-300 hover:-translate-y-1 group">
      <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12.004 2C6.492 2 2 6.49 2 11.999c0 1.777.467 3.449 1.28 4.9L2 22l5.233-1.261A10.008 10.008 0 0012.004 22C17.516 22 22 17.51 22 12.001 22 6.491 17.516 2 12.004 2zm0 18.182a8.178 8.178 0 01-4.162-1.133l-.298-.177-3.106.748.784-2.977-.194-.307a8.151 8.151 0 01-1.264-4.337c0-4.515 3.68-8.183 8.24-8.183 4.561 0 8.24 3.668 8.24 8.183 0 4.514-3.679 8.183-8.24 8.183z"/>
      </svg>
      <span class="absolute left-16 bg-gray-900 text-white text-xs font-inter px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap shadow-xl">Chat on WhatsApp</span>
    </a>

    <!-- Back to Top -->
    <button id="backToTop" class="fixed bottom-6 right-6 z-50 w-12 h-12 bg-navy border-2 border-gold text-gold rounded-full flex items-center justify-center shadow-xl opacity-0 invisible transition-all duration-300 hover:-translate-y-1 hover:bg-gold hover:text-navy">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 15l7-7 7 7"/></svg>
    </button>`;
  document.body.appendChild(container);

  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.remove('opacity-0', 'invisible');
      backToTop.classList.add('opacity-100', 'visible');
    } else {
      backToTop.classList.add('opacity-0', 'invisible');
      backToTop.classList.remove('opacity-100', 'visible');
    }
  });
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
  renderFloatingWidgets();
  // Animate elements on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
