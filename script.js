const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    // Cierra todas las tooltips
    cards.forEach(c => c.classList.remove("active"));
    // Activa la seleccionada
    card.classList.add("active");
  });
});
