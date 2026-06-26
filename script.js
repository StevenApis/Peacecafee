// Menu Tab Navigation
document.querySelectorAll('.tabs button').forEach(button => {
  button.addEventListener('click', () => {
    // Get the tab name from data-tab attribute
    const tabName = button.getAttribute('data-tab');
    
    // Remove active class from all buttons
    document.querySelectorAll('.tabs button').forEach(btn => {
      btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    button.classList.add('active');
    
    // Hide all menu contents
    document.querySelectorAll('.menu-content').forEach(content => {
      content.classList.remove('active');
    });
    
    // Show the selected menu content
    document.getElementById(tabName).classList.add('active');
  });
});
