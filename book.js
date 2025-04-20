document.addEventListener("DOMContentLoaded", () => {
  const tableGrid = document.getElementById("table-grid");
  const confirmBtn = document.getElementById("confirm-booking");

  for (let i = 1; i <= 35; i++) {
    const seat = document.createElement("div");
    seat.textContent = `Table ${i}`;
    seat.classList.add("seat");
    seat.onclick = () => seat.classList.toggle("selected");
    tableGrid.appendChild(seat);
  }

  confirmBtn.onclick = () => {
    const selectedTables = [...document.querySelectorAll(".selected")].map(el => el.textContent);
    if (selectedTables.length === 0) {
      alert("Please select a table.");
      return;
    }
    localStorage.setItem("bookedTables", JSON.stringify(selectedTables));
    alert("Table(s) booked: " + selectedTables.join(", "));
  };
});