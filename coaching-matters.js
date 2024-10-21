document.querySelectorAll('.coaching-matters-section7-point').forEach(point => {
    point.addEventListener('click', function() {
        // Remove active class from all points
        document.querySelectorAll('.coaching-matters-section7-point').forEach(p => p.classList.remove('active'));
        
        // Add active class to the clicked point
        this.classList.add('active');
    });
});
