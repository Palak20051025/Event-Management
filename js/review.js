// Form submission handler for adding new reviews
const reviewForm = document.getElementById('review-form');

reviewForm.addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent default form submission

    // Get input values from the form
    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const reviewText = document.getElementById('review').value;

    // Create a new review element
    const newReview = createReviewElement(name, rating, reviewText);

    // Append the new review to the review container
    document.getElementById('reviews-container').appendChild(newReview);

    // Save review data to local storage
    saveReviewToLocalStorage(name, rating, reviewText);

    // Clear form fields after submission
    reviewForm.reset();
});

// Function to create a new review element
function createReviewElement(name, rating, reviewText) {
    const reviewDiv = document.createElement('div');
    reviewDiv.classList.add('testimonial');

    reviewDiv.innerHTML = `
        <h3>${name}</h3>
        <p>${reviewText}</p>
        <div class="stars">${generateStarRating(rating)}</div>
    `;
    return reviewDiv;
}

// Function to generate star rating HTML
function generateStarRating(rating) {
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        starsHTML += `<i class="star ${i <= rating ? 'fas fa-star' : 'far fa-star'}"></i>`;
    }
    return starsHTML;
}

// Function to save review data to local storage
function saveReviewToLocalStorage(name, rating, reviewText) {
    const reviews = getReviewsFromLocalStorage();
    reviews.push({ name, rating, reviewText });
    localStorage.setItem('reviews', JSON.stringify(reviews));
}

// Function to get reviews from local storage
function getReviewsFromLocalStorage() {
    const reviews = localStorage.getItem('reviews');
    return reviews ? JSON.parse(reviews) : [];
}

// Function to display reviews from local storage
function displayReviewsFromLocalStorage() {
    const reviewsContainer = document.getElementById('reviews-container');
    reviewsContainer.innerHTML = '';

    const reviews = getReviewsFromLocalStorage();
    reviews.forEach(review => {
        const reviewDiv = createReviewElement(review.name, review.rating, review.reviewText);
        reviewsContainer.appendChild(reviewDiv);
    });
}

// Pre-existing testimonials data
const testimonials = [
    {
        name: 'Karan Mehta',
        review: 'As a photographer, Bharat Darpan has provided me with endless inspiration.',
        rating: 5,
        image: 'karan-mehta.jpg'
    },
    {
        name: 'Ananya Singh',
        review: 'The depth and variety of content on Bharat Darpan are unmatched!',
        rating: 5,
        image: 'ananya-singh.jpg'
    }
];

// Display pre-existing testimonials on page load
function displayTestimonials() {
    const reviewsContainer = document.getElementById('reviews-container');
    
    testimonials.forEach(testimonial => {
        const testimonialDiv = document.createElement('div');
        testimonialDiv.classList.add('testimonial');

        testimonialDiv.innerHTML = `
            <img src="${testimonial.image}" alt="${testimonial.name}">
            <h3>${testimonial.name}</h3>
            <p>${testimonial.review}</p>
            <div class="stars">${generateStarRating(testimonial.rating)}</div>
        `;

        reviewsContainer.appendChild(testimonialDiv);
    });
}

// Call function to load testimonials on page load
displayTestimonials();

// Call function to display reviews from local storage on page load
displayReviewsFromLocalStorage();