
        if (checkedCount > 2) {
          checkboxes.forEach(cb => {
            if (!cb.checked) cb.disabled = true;
          });
        } else {
          checkboxes.forEach(cb => {
            cb.disabled = false;
          });
        }
      });
    });