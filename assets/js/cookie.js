document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("cookieNotice");
  const btn = document.getElementById("cookieAcceptBtn");

  if (!localStorage.getItem("cookieConsentGiven")) {
    banner.style.display = "block";
  }

  btn.addEventListener("click", function () {
    localStorage.setItem("cookieConsentGiven", "true");
    banner.style.display = "none";
  });
});
