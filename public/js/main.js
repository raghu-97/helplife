// Function to load the specified tab content
function showTab(tabName) {
    const tabContent = document.getElementById('tab-content');

    // Fetch the HTML content
    fetch(`./${tabName}.html`)
        .then(response => response.text())
        .then(data => {
            tabContent.innerHTML = data;
            
            // Dynamically load the JavaScript file associated with the tab
            const script = document.createElement('script');
            script.src = `./${tabName}.js`;
            script.type = 'text/javascript';
            document.body.appendChild(script);
        })
        .catch(error => console.error('Error loading tab content:', error));
}

// Show the dashboard tab by default
document.addEventListener('DOMContentLoaded', () => {
    showTab('dashboard');
});
