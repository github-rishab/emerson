document.addEventListener('DOMContentLoaded', function () {
    // Get all toggle arrows
    const toggleArrows = document.querySelectorAll('.toggle-arrow');

    // Add click event to each arrow
    toggleArrows.forEach(arrow => {
        arrow.addEventListener('click', function () {
            // Get target row ID from data attribute
            const targetId = this.getAttribute('data-target');

            // Find the corresponding nested row
            const nestedRow = document.querySelector(`.nested-row[data-content="${targetId}"]`);

            // Toggle active class on nested row and arrow
            nestedRow.classList.toggle('active');
            this.classList.toggle('active');
        });
    });

    // Add functionality to "Close All" button
    const closeAllButton = document.querySelector('.emr-primary-text-cta');
    if (closeAllButton) {
        closeAllButton.addEventListener('click', function () {
            // Get all active nested rows and arrows
            const activeRows = document.querySelectorAll('.nested-row.active');
            const activeArrows = document.querySelectorAll('.toggle-arrow.active');

            // Remove active class from all
            activeRows.forEach(row => row.classList.remove('active'));
            activeArrows.forEach(arrow => arrow.classList.remove('active'));
        });
    }
});
