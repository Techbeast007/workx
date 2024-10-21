

document.addEventListener('DOMContentLoaded', function() {

  const navbar = document.querySelectorAll('.navbar-expand-lg');
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
        mainheader.style.display = 'flex'

        
   
      }
  }

  // Event listener for window resize
  window.addEventListener('resize', checkScreenWidth);

  // Initial check
  checkScreenWidth();


});


document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.section1-menu-item');
    menuItems.forEach(item => {
        if (item.textContent.trim() === "Home") {
            item.classList.add('active'); 
        } else {
            item.classList.remove('active'); 
        }
    });
});




const cards = document.querySelectorAll('input[name="slide"]');
let currentIndex = 0;

function autoSwitch() {
  cards[currentIndex].checked = true; // Expand the current card
  currentIndex = (currentIndex + 1) % cards.length; // Move to the next card

  setTimeout(() => {
    cards[currentIndex].checked = false; // Collapse the card after 3 seconds
  }, 3000); // Time for expansion
}

// Change every 3 seconds
setInterval(autoSwitch, 6000); // Expansion + collapse timing


const cards4 = document.querySelectorAll('.section13-horizontal-accordion');

cards4.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');

    const allCards = Array.from(cards);
    const clickedCardIndex = allCards.indexOf(card);

    allCards.forEach((otherCard, index) => {
      if (card === otherCard) {
        if (card.classList.contains('active')) {
          card.style.transform = `translateX(0px)`;
        }
      } else {
        if (card.classList.contains('active')) {
          const translateXValue = clickedCardIndex < index ? 300 : -300; // Adjust 300px as needed
          otherCard.style.transform = `translateX(${translateXValue}px)`;
        } else {
          otherCard.style.transform = `translateX(0px)`;
        }
      }
    });
  });
});

const testimonials = [
  {
      text: '"This is a fantastic service! Highly recommend to everyone!"',
      author: 'John Doe, CEO of Example Corp',
      image: 'https://via.placeholder.com/100'
  },
  {
      text: '"A truly great experience! Will use again."',
      author: 'Jane Smith, Manager at Another Co',
      image: 'https://via.placeholder.com/100'
  },
  {
      text: '"I was blown away by the support!"',
      author: 'Emily Johnson, Founder of Startup',
      image: 'https://via.placeholder.com/100'
  }
];

let currentIndexs = 0;

function updateTestimonial() {
  const testimonialText = document.getElementById('testimonial-text');

  const imageScrollContainer = document.getElementById('image-scroll-container');
  testimonialText.innerText = testimonials[currentIndexs].text;

  imageScrollContainer.style.transform = `translateX(-${currentIndexs * 100}px)`;
}

document.getElementById('next-button').addEventListener('click', () => {
  currentIndexs = (currentIndexs + 1) % testimonials.length;
  updateTestimonial();
});

document.getElementById('prev-button').addEventListener('click', () => {
  currentIndexs = (currentIndexs - 1 + testimonials.length) % testimonials.length;
  updateTestimonial();
});

// Initialize the first testimonial
updateTestimonial();


const expandablecards = document.querySelectorAll('.homeexpandable-card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});


document.addEventListener('DOMContentLoaded', function() {
  // Select all content parts
  const contentParts = document.querySelectorAll('.articlespublished-content');

  // Initially hide all content parts
  contentParts.forEach(content => {
      content.style.display = 'none';
  });

  // Add click event to each card to toggle the content
  const cards = document.querySelectorAll('.articlespublished-card');
  cards.forEach(card => {
      card.addEventListener('click', function() {
          const content = this.querySelector('.articlespublished-content');
          const cardTitle = this.querySelector('.articlespublished-image-title'); // Select the specific title

          // Toggle content display on click
          if (content.style.display === 'none') {
              content.style.display = 'flex';  // Expand content
              cardTitle.style.visibility = 'hidden'; // Hide the card title while keeping space
          } else {
              content.style.display = 'none';  // Hide content
              cardTitle.style.visibility = 'visible'; // Show the card title
          }
      });
  });
});


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
