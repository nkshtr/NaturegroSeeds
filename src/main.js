import './styles/style.css'
import './styles/product.css'
import { products } from './data/products.js'

// Product Details Page Logic
if (window.location.pathname.includes('product.html')) {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  const product = products.find(p => p.id === productId);
  const contentDiv = document.getElementById('product-content');

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
        
        <div class="growing-details">
            <h3>Growing Details</h3>
            <div class="detail-row">
                <span class="detail-label">Temperature</span>
                <span>${product.details.temperature}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Germination</span>
                <span>${product.details.germination}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Maturity</span>
                <span>${product.details.maturity}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Sunlight</span>
                <span>${product.details.sunlight}</span>
            </div>
             <div class="detail-row">
                <span class="detail-label">Watering</span>
                <span>${product.details.water}</span>
            </div>
        </div>

        <div class="varieties-section">
            <h3>Available Varieties</h3>
            <div class="varieties-list">
                ${product.varieties.map(v => `
                    <div class="variety-card">
                        <h4>${v.name}</h4>
                        <p>${v.desc}</p>
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


// Mobile Menu Toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

if (mobileBtn) {
  mobileBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileBtn.classList.toggle('active');
  });
}

// Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    mobileBtn.classList.remove('active');
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

// Simple Product Filter (Optional enhancement)
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all
    filterBtns.forEach(b => b.classList.remove('active'));
    // Add active to clicked
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    productCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'block';
        // Re-trigger animation if needed, or just show
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
