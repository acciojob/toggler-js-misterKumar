 const checkboxes = document.querySelectorAll('.toggle');

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                let checkedCount = document.querySelectorAll('.toggle:checked').length;
                if (checkedCount > 2) {
                    this.checked = false;
                }
            });
        });