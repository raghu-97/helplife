document.addEventListener('DOMContentLoaded', function () {
    // Example for handling tab clicks if needed
    document.querySelectorAll('.tab-link').forEach(button => {
        button.addEventListener('click', function (event) {
            openTab(event, this.getAttribute('onclick').match(/'(.*?)'/)[1]);
        });
    });

    // Initialize with the first tab opened
    document.querySelector('.tab-link').click();
});

function openTab(event, tabName) {
    event.preventDefault();

    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tabContent => {
        tabContent.style.display = 'none';
    });

    // Remove active class from all tab links
    document.querySelectorAll('.tab-link').forEach(tabLink => {
        tabLink.classList.remove('active');
    });

    // Show the clicked tab content and set the button as active
    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.classList.add('active');
}
