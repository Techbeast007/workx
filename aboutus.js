document.addEventListener('DOMContentLoaded', function() {

    const navbar = document.querySelector('.navbar-expand-lg');
    const mainheader = document.querySelector('.section1-hero-header')
  
    // Function to check screen width and show/hide the navbar
    function checkScreenWidth() {
        if (window.innerWidth <= 800) {
          navbar.style.display = 'flex'; // Hide the navbar by default for small screens
          mainheader.style.display = 'none'
          
            navbar.style.zIndex = '999'
            navbar.style.position='fixed'
            navbar.style.top='0'
            navbar.style.width='100%'
            
           
        } else if (window.innerWidth > 800)  {
         
          navbar.style.display = 'none'; 
  
          
     
        }
    }
  
    // Event listener for window resize
    window.addEventListener('resize', checkScreenWidth);
  
    // Initial check
    checkScreenWidth();
  
    // Add click event to toggle navbar visibility
    hamburgerButton.addEventListener('click', function() {
        if (navbar.style.display === 'none' || navbar.style.display === '') {
            navbar.style.display = 'block'; // Show the navbar
        } else {
            navbar.style.display = 'none'; // Hide the navbar
        }
    });
  });
  