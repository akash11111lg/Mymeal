document.addEventListener("DOMContentLoaded", () => {
  const summaryDiv = document.getElementById("order-summary");
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  if (cart.length === 0) {
    summaryDiv.innerHTML = "<p>No items in your order.</p>";
    return;
  }

  let total = 0;
  summaryDiv.innerHTML = "<ul>" + cart.map(item => {
    total += item.price;
    return `<li>${item.name} - ₹${item.price}</li>`;
  }).join("") + "</ul>";
  summaryDiv.innerHTML += `<h3>Total: ₹${total}</h3>`;
});

function confirmOrder() {
  alert("Order confirmed! Enjoy your meal 🍽️");
  localStorage.removeItem("cart");
  window.location.href = "thankyou.html";
}