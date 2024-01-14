const toggles = document.querySelectorAll('.toggle');
let checkedCount = 0;

toggles.forEach(toggle => {
  const checkbox = toggle.querySelector('.toggle-checkbox');
  const label = toggle.querySelector('.toggle-label');
  
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      checkedCount++;
      toggle.classList.add('checked');
      
      if (checkedCount === 2) {
        toggles.forEach(otherToggle => {
          if (otherToggle !== toggle && otherToggle.classList.contains('checked')) {
            otherToggle.classList.remove('checked');
            otherToggle.querySelector('.toggle-checkbox').checked = false;
          }
        });
      }
    } else {
      checkedCount--;
      toggle.classList.remove('checked');
    }
  });
});