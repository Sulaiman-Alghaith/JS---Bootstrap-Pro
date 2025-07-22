// Filtering menu items by category
const filterButtons = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');

// Add click event to each filter button
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filterValue = button.getAttribute('data-filter');
    // Hide all items first
    menuItems.forEach(item => {
      item.style.display = 'none';
    });
    // Show only items that match the selected category
    menuItems.forEach(item => {
      if (item.getAttribute('data-category') === filterValue) {
        item.style.display = 'block';
      }
    });
    // Activate the current button and deactivate others
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});
