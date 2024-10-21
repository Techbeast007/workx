const testimonials = [
    {
        text: '“The service that is served is so very charming with friendly waiters and also a comfortable place so that it makes customers feel at home for a long time in this shop and also the tea shop owner provides free warm and pastries making the atmosphere so beautiful, and this is a very pleasant experience for me. and I will visit here again every weekend with my family and also my friends.”',
        author: 'Dr. Anant Madhok',
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

let currentIndex = 0;

function updateTestimonial() {
    const testimonialText = document.getElementById('testimonial-text');
 
    const imageScrollContainer = document.getElementById('image-scroll-container');
    testimonialText.innerText = testimonials[currentIndex].text;
  
    imageScrollContainer.style.transform = `translateX(-${currentIndex * 517}px)`;
}

document.getElementById('next-button').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial();
});

document.getElementById('prev-button').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
});

// Initialize the first testimonial
updateTestimonial();
