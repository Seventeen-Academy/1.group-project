(function () {
  "use strict";

  var form = document.querySelectorAll(".needs-validation");

  Array.prototype.slice.call(form).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
