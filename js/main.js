/**
 * MAIN.JS — page bootstrap: loader, footer year, contact form.
 */
(function () {
  "use strict";

  window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    if (loader) {
      setTimeout(function () { loader.classList.add("hidden"); }, 350);
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    initContactForm();
  });

  function initContactForm() {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("formStatus");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const subject = form.subject.value.trim();
      const message = form.message.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !subject || !message) {
        showStatus("অনুগ্রহ করে সব ফিল্ড পূরণ করুন।", true);
        return;
      }
      if (!emailPattern.test(email)) {
        showStatus("সঠিক ইমেইল ঠিকানা দিন।", true);
        return;
      }

      // No backend is wired up yet — open the visitor's mail client with the
      // message pre-filled so the form is fully usable out of the box.
      const mailto =
        "mailto:hello@rakibulhasan.design" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(message + "\n\n— " + name + " (" + email + ")");

      window.location.href = mailto;
      showStatus("ধন্যবাদ! আপনার মেইল ক্লায়েন্ট খোলা হচ্ছে।", false);
      form.reset();
    });

    function showStatus(text, isError) {
      if (!status) return;
      status.textContent = text;
      status.classList.toggle("error", !!isError);
    }
  }
})();
