// --- Cart Logic ---
const cart = [];
const products = [
  { id: 1, name: "GMS Presets", price: 270, img: "images/product 1.jpg" },
  { id: 2, name: "Viral Tee", price: 360, img: "images/product 2.jpg" },
  { id: 3, name: "Synths and Pianos", price: 450, img: "images/product 3.jpg" }
];

function addToCart(id) {
  const prod = products.find(p => p.id === id);
  if (prod) cart.push(prod);
  renderCart();
}

function renderCart() {
  const cartDiv = document.getElementById('cart-items');
  if (!cartDiv) return;
  cartDiv.innerHTML = cart.length === 0 ? "<p>Cart is empty.</p>" :
    cart.map((item, i) => `<div>${item.name} - R${item.price} <button onclick="removeFromCart(${i})">Remove</button></div>`).join('');
  document.getElementById('cart-total').innerText = cart.reduce((sum, p) => sum + p.price, 0);
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  renderCart();
}

function payCart() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  alert("Payment successful! Thank you for your purchase.");
  cart.length = 0;
  renderCart();
}

// --- Search Logic ---
function searchProducts() {
  const q = document.getElementById('search-input').value.toLowerCase();
  document.querySelectorAll('.product').forEach((el, idx) => {
    const prod = products[idx];
    el.style.display = prod.name.toLowerCase().includes(q) ? "" : "none";
  });
}

// --- Form Handling ---
function handleFormSubmit(e) {
  e.preventDefault();
  alert("Thank you for your submission! We'll get back to you soon.");
  e.target.reset();
}

document.addEventListener('DOMContentLoaded', () => {
  // Attach form handlers
  ['contact-form', 'enquiry-form'].forEach(id => {
    const form = document.getElementById(id);
    if (form) form.addEventListener('submit', handleFormSubmit);
  });
  // Render cart if present
  renderCart();
});
