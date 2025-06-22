document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("cookieNotice");
  const button = document.getElementById("cookieAcceptBtn");

  if (!localStorage.getItem("cookieConsentGiven")) {
    banner.classList.remove("d-none");
  }

  button.addEventListener("click", function () {
    localStorage.setItem("cookieConsentGiven", "true");
    banner.classList.add("d-none");
  });
});
