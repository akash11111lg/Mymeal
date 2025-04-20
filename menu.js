const menuItems = [
  { name: "Paneer Tikka", price: 250 },
  { name: "Butter Naan", price: 40 },
  { name: "Chicken Biryani", price: 300 },
  { name: "Gulab Jamun", price: 80 },
];

document.addEventListener("DOMContentLoaded", () => {
  const menuDiv = document.getElementById("menu-items");

  menuItems.forEach(item => {
    const div = document.createElement("div");
    div.innerHTML = `<strong>${item.name}</strong><br/>₹${item.price}<br/>
      <button onclick="addToCart('${item.name}', ${item.price})">Add</button>`;
    menuDiv.appendChild(div);
  });
});

function addToCart(name, price) {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to your order.`);
}