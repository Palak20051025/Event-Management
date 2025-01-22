document.addEventListener("DOMContentLoaded", function() {
    const profileDropdown = document.querySelector('.user-dropdown-btn');
    const dropdownContent = document.querySelector('.user-dropdown-content');

    profileDropdown.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(e) {
        if (!profileDropdown.contains(e.target)) {
            dropdownContent.classList.remove('show');
        }
    });
});

