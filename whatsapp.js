document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.getElementById("whatsappWrapper");
  const closeBtn = document.getElementById("whatsappClose");

  if (!wrapper || !closeBtn) return;

  // Hide if user already closed it
  if (localStorage.getItem("whatsappClosed") === "true") {
    wrapper.style.display = "none";
  }

  closeBtn.addEventListener("click", () => {
    wrapper.style.display = "none";
    localStorage.setItem("whatsappClosed", "true");
  });
});
