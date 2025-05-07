// Fallback script for environments that don't support ES modules
document.addEventListener('DOMContentLoaded', function() {
  var rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 800px; margin: 50px auto; padding: 20px; text-align: center;">
        <h1 style="font-size: 2rem; margin-bottom: 20px;">Nur Pratap Karki - Portfolio</h1>
        <p style="font-size: 1.2rem; line-height: 1.5; margin-bottom: 20px;">
          It seems your browser is having trouble loading the modern JavaScript modules needed for this site.
        </p>
        <p style="font-size: 1.2rem; line-height: 1.5; margin-bottom: 20px;">
          Please try using a more modern browser like Chrome, Firefox, Safari, or Edge.
        </p>
        <p style="font-size: 1.2rem; line-height: 1.5; margin-bottom: 20px;">
          You can also view my work directly on <a href="https://github.com/nurpratapkarki" style="color: #0366d6; text-decoration: none;">GitHub</a>.
        </p>
      </div>
    `;
  }
}); 