  const filterButtons = document.querySelectorAll('.filter-btn');
  const menuItems = document.querySelectorAll('.menu-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filterValue = button.getAttribute('data-filter');
      
      menuItems.forEach(item => {
        item.style.display = 'none';
      });

      menuItems.forEach(item => {
        if (item.getAttribute('data-category') === filterValue) {
          item.style.display = 'block';
        }
      });

      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
