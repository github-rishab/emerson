document.addEventListener('DOMContentLoaded', () => {
    const slides = [
      {
        heading: 'First Slide',
        description: 'Description for first slide',
        button: 'Learn More',
        imageUrl: 'url1',
        url: 'https://example1.com'
      },
      {
        heading: 'Second Slide',
        description: 'Description for second slide',
        button: 'Learn More',
        imageUrl: 'url2',
        url: 'https://example2.com'
      },
      {
        heading: 'Second Slide',
        description: 'Description for second slide',
        button: 'Learn More',
        imageUrl: 'url2',
        url: 'https://example2.com'
      },
      {
        heading: 'Second Slide',
        description: 'Description for second slide',
        button: 'Learn More',
        imageUrl: 'url2',
        url: 'https://example2.com'
      },
      {
        heading: 'Second Slide',
        description: 'Description for second slide',
        button: 'Learn More',
        imageUrl: 'url2',
        url: 'https://example2.com'
      }
    ];
  
    const sliderContainer = document.querySelector('.slider-container');
    const dotsContainer = document.querySelector('.dots-container');
    
    // Clear existing content
    const existingSlides = document.querySelectorAll('.slide');
    existingSlides.forEach(slide => slide.remove());
    dotsContainer.innerHTML = '';
  
    // Create slides and dots
    slides.forEach((slideData, index) => {
      // Create slide
      const slide = document.createElement('div');
      slide.classList.add('slide');
      if (index === 0) slide.classList.add('active');
      
      slide.innerHTML = `
        <div class="case-study-content">
          <div class="case-study-text">
            <h1 class="case-study-title">${slideData.heading}</h1>
            <p>${slideData.description}</p>
            <div class="case-study-buttons">
              <button class="button1">
                ${slideData.button}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="arrow" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="9 6 15 12 9 18"></polyline>
                </svg>
              </button>
            </div>
          </div>
          <div class="image-container">
            <img src="${slideData.imageUrl}" alt="Slide ${index + 1}" class="case-study-image" />
          </div>
        </div>
      `;
      sliderContainer.insertBefore(slide, dotsContainer);
      
      // Create dot
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => setActiveSlide(index));
      dotsContainer.appendChild(dot);
    });
  
    let currentSlide = 0;
    const slideElements = document.querySelectorAll('.slide');
  
    function setActiveSlide(index) {
      slideElements[currentSlide].classList.remove('active');
      dotsContainer.children[currentSlide].classList.remove('active');
      
      currentSlide = index;
      slideElements[currentSlide].classList.add('active');
      dotsContainer.children[currentSlide].classList.add('active');
    }
  
    // Auto-advance slides
    setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length;
      setActiveSlide(nextSlide);
    }, 5000);
  });