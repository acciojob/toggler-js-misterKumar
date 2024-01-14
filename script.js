//your JS code here. If required.
 document.addEventListener('DOMContentLoaded', function () {
      const checkboxes = document.querySelectorAll('.max-two');

      checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
          if (this.checked) {
            checkboxes.forEach(otherCheckbox => {
              if (otherCheckbox !== this) {
                otherCheckbox.checked = false;
              }
            });
          }

          this.parentElement.classList.toggle(this.id);
        });
      });
    });