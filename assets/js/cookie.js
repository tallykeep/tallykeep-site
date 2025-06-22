<script>
  document.addEventListener("DOMContentLoaded", function () {
    const notice = document.getElementById("cookieNotice");
    const accept = document.getElementById("acceptCookies");

    if (!localStorage.getItem("cookieConsent")) {
      notice.style.display = "block";
    }

    accept.addEventListener("click", function () {
      localStorage.setItem("cookieConsent", "true");
      notice.style.display = "none";
    });
  });
</script>
