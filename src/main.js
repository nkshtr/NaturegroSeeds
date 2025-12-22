import './styles/style.css'
import './styles/product.css'
import './styles/practices.css'
import { products } from './data/products.js'

// Wrap initialization logic in a function
function initPage() {
  // Product Details Page Logic
  if (window.location.pathname.includes('product.html')) {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const product = products.find(p => p.id === productId);
    const contentDiv = document.getElementById('product-content');

    if (contentDiv) {
      if (product) {
        document.title = `${product.name} | Naturegro Seeds`;

        contentDiv.innerHTML = `
          <div class="product-detail-img fade-in">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="product-detail-info fade-in">
            <span class="product-category-badge">${product.category} Veg</span>
            <h1>${product.name}</h1>
            <p class="product-detail-desc">${product.description}</p>
            
            ${product.details ? `
            <div class="growing-details">
                <h3>Growing Details</h3>
                <div class="detail-row">
                    <span class="detail-label">Temperature</span>
                    <span>${product.details.temperature || 'N/A'}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Germination</span>
                    <span>${product.details.germination || 'N/A'}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Maturity</span>
                    <span>${product.details.maturity || 'N/A'}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Sunlight</span>
                    <span>${product.details.sunlight || 'N/A'}</span>
                </div>
                 <div class="detail-row">
                    <span class="detail-label">Watering</span>
                    <span>${product.details.water || 'N/A'}</span>
                </div>
            </div>
            ` : ''}

            ${product.practices ? `
            <div style="margin-bottom: 2rem;">
                <a href="/practices.html?id=${product.id}" class="btn-link" style="color: var(--color-primary); font-weight: 600; text-decoration: underline;">View Package of Practices</a>
            </div>
            ` : ''}

            <div class="varieties-section">
                <h3>Available Varieties</h3>
                <div class="varieties-list">
                    ${product.varieties.map(v => `
                        <div class="variety-card">
                            <div class="variety-info">
                                <h4>${v.name}</h4>
                                <p>${v.desc}</p>
                            </div>
                            ${v.image ? `<img src="${v.image}" alt="${v.name}" class="variety-img">` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div style="margin-top: 2rem;">
                <button class="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        `;
      } else {
        contentDiv.innerHTML = '<div class="container"><p>Product not found.</p></div>';
      }
    }
  }

  // Practices Page Logic
  if (window.location.pathname.includes('practices.html')) {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const product = products.find(p => p.id === productId);
    const contentDiv = document.getElementById('practices-content');
    const backLinkContainer = document.getElementById('back-link-container');

    if (contentDiv && backLinkContainer) {
      if (product && product.practices) {
        document.title = `Practices - ${product.name} | Naturegro Seeds`;

        backLinkContainer.innerHTML = `<a href="/product.html?id=${productId}" class="back-link">← Back to ${product.name}</a>`;

        contentDiv.innerHTML = `
            <h1 style="margin-bottom: 2rem;">Package of Practices: ${product.name}</h1>
            
            <div class="practices-section">
                <div class="practice-block">
                    <h4>🌱 Soil and Climate</h4>
                    <ul>
                        <li><strong>Soil Type:</strong> ${product.practices.soilClimate.soil}</li>
                        <li><strong>Climate Sensitivity:</strong> ${product.practices.soilClimate.climate}</li>
                        <li><strong>Crucial Consideration:</strong> ${product.practices.soilClimate.consideration}</li>
                    </ul>
                </div>

                <div class="practice-block">
                    <h4>🚜 Planting Details</h4>
                    <ul>
                        <li><strong>Sowing Period:</strong> ${product.practices.planting.sowing}</li>
                        <li><strong>Seed Rate:</strong> ${product.practices.planting.rate}</li>
                        <li><strong>Spacing:</strong> Row to Row: ${product.practices.planting.spacing.row}, Plant to Plant: ${product.practices.planting.spacing.plant}</li>
                    </ul>
                </div>

                <div class="practice-block">
                    <h4>🧪 Manures and Fertilizers</h4>
                    <div class="table-responsive">
                        <table class="practices-table">
                            <thead>
                                <tr>
                                    <th>Nutrient</th>
                                    <th>Dose (per Ha)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Farm Yard Manure (FYM)</td>
                                    <td>${product.practices.fertilizers.fym}</td>
                                </tr>
                                <tr>
                                    <td>Nitrogen (N)</td>
                                    <td>${product.practices.fertilizers.nitrogen}</td>
                                </tr>
                                <tr>
                                    <td>Phosphorus (P2O5)</td>
                                    <td>${product.practices.fertilizers.phosphorus}</td>
                                </tr>
                                <tr>
                                    <td>Potash (K2O)</td>
                                    <td>${product.practices.fertilizers.potash}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="practice-note"><strong>Application Strategy:</strong> ${product.practices.fertilizers.strategy}</p>
                </div>
            </div>
        `;
      } else {
        contentDiv.innerHTML = '<div class="container"><p>Practices not found for this product.</p></div>';
        backLinkContainer.innerHTML = `<a href="/index.html#products" class="back-link">← Back to Products</a>`;
      }
    }
  }

  // Mobile Menu Toggle
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.nav');

  if (mobileBtn) {
    // Remove old listener to avoid duplicates if re-initializing
    const newBtn = mobileBtn.cloneNode(true);
    mobileBtn.parentNode.replaceChild(newBtn, mobileBtn);

    newBtn.addEventListener('click', () => {
      nav.classList.toggle('active');
      newBtn.classList.toggle('active');
    });
  }

  // Close menu when clicking a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (nav) nav.classList.remove('active');
      const btn = document.querySelector('.mobile-menu-btn');
      if (btn) btn.classList.remove('active');
    });
  });

  // Scroll Animation (Intersection Observer)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });

  // Contact Form Handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerText;
      submitBtn.innerText = 'Sending...';
      submitBtn.disabled = true;

      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());

      fetch('https://script.google.com/macros/s/AKfycbxnJSqF6xhUCCVXsq4R7R0hk8s4Nu1eySVnJ3cnOdVF-pIbPpQP2pYoWS3AKIvZo6Ebog/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain'
        },
        body: JSON.stringify(data)
      })
        .then(() => {
          alert('Thank you for your message! We will get back to you soon.');
          contactForm.reset();
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Something went wrong. Please try again later.');
        })
        .finally(() => {
          submitBtn.innerText = originalText;
          submitBtn.disabled = false;
        });
    });
  }

  // Simple Product Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      productCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Re-attach navigation listeners
  attachNavigationListeners();

  // Active Link Highlighting on Scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= (sectionTop - 150)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });
}

// Soft Navigation Logic
function attachNavigationListeners() {
  document.querySelectorAll('a').forEach(link => {
    // Only internal links, not hash links on same page (unless moving to another page), not external
    const href = link.getAttribute('href');
    if (href && href.startsWith('/') && !href.startsWith('#')) {
      link.addEventListener('click', async (e) => {
        e.preventDefault();
        const url = href;
        const targetPath = url.split('#')[0];
        const currentPath = window.location.pathname;

        // Check if it's a link to the same page
        if (targetPath === currentPath || (targetPath === '/index.html' && currentPath === '/') || (targetPath === '/' && currentPath === '/index.html')) {
          if (url.includes('#')) {
            const hash = url.split('#')[1];
            const el = document.getElementById(hash);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
              window.history.pushState({}, '', url);
            }
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            window.history.pushState({}, '', url);
          }
          return;
        }

        try {
          // Fetch the new page
          const response = await fetch(url);
          const text = await response.text();

          // Parse HTML
          const parser = new DOMParser();
          const doc = parser.parseFromString(text, 'text/html');

          // Replace Main Content
          const newMain = doc.querySelector('main');
          const currentMain = document.querySelector('main');

          if (newMain && currentMain) {
            // Fade out current main
            currentMain.style.opacity = '0';
            currentMain.style.transition = 'opacity 0.3s ease';

            setTimeout(() => {
              currentMain.innerHTML = newMain.innerHTML;
              // Update Title
              document.title = doc.title;
              // Update URL
              window.history.pushState({}, '', url);

              // Scroll to top or hash
              if (url.includes('#')) {
                const hash = url.split('#')[1];
                const el = document.getElementById(hash);
                if (el) el.scrollIntoView();
              } else {
                window.scrollTo(0, 0);
              }

              // Fade in
              currentMain.style.opacity = '1';

              // Re-initialize scripts
              initPage();
            }, 300);
          } else {
            // Fallback if structure is different
            window.location.href = url;
          }
        } catch (err) {
          console.error('Navigation failed', err);
          window.location.href = url;
        }
      });
    }
  });
}

// Handle Back/Forward Browser Buttons
// Handle Back/Forward Browser Buttons
window.addEventListener('popstate', (event) => {
  console.log('Popstate fired:', event);
  // window.location.reload(); // Commented out to test if this is the cause
});

// Debug Explore Seeds
document.addEventListener('click', (e) => {
  if (e.target.innerText === 'Explore Seeds') {
    console.log('Explore Seeds clicked', e.target.getAttribute('href'));
  }
});

// Initial Load
document.addEventListener('DOMContentLoaded', initPage);
