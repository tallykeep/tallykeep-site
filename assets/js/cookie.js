<script>
  document.addEventListener("DOMContentLoaded", function () {
    const cookiePopup = document.getElementById("cookiePopup");
    const acceptBtn = document.getElementById("acceptCookie");

    if (!localStorage.getItem("cookieConsent")) {
      cookiePopup.style.display = "block";
    }

    acceptBtn.addEventListener("click", function () {
      localStorage.setItem("cookieConsent", "true");
      cookiePopup.style.display = "none";
    });
  });
</script>
