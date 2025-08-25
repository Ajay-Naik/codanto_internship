// Enable Tailwind dark mode (class-based)
tailwind.config = { darkMode: 'class' };

// Apply saved theme on first load
(() => {
  const stored = localStorage.getItem('theme');
  if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');
  const text = document.getElementById('themeText');

  // Function to update button content
  function updateButton() {
    if (document.documentElement.classList.contains('dark')) {
      icon.className = "fas fa-sun";   // Sun icon
      text.textContent = "Light Mode"; // Text
    } else {
      icon.className = "fas fa-moon";  // Moon icon
      text.textContent = "Dark Mode";  // Text
    }
  }

  // Set initial state
  updateButton();

  // Toggle theme on click
  btn.addEventListener('click', () => {
    const root = document.documentElement;
    const isDark = root.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateButton();
  });
});
