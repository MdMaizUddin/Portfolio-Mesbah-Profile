function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  
  // Check the current display property and toggle it
  if (navLinks.style.display === 'flex' || navLinks.style.display === '') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'flex';
  }
}
