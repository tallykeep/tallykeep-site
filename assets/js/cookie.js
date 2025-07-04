<script>
  document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("cookieOverlay");
    const acceptBtn = document.getElementById("cookieAcceptBtn");

    if (!localStorage.getItem("cookieConsentGiven")) {
      overlay.style.display = "flex";
    }

    acceptBtn.addEventListener("click", function () {
      localStorage.setItem("cookieConsentGiven", "true");
      overlay.style.display = "none";
    });
  });
</script>
