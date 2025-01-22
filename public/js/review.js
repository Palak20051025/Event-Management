// Form submission handler for adding new reviews
// const reviewForm = document.getElementById('review-form');

// reviewForm.addEventListener('submit', function (event) {
//     const name = document.getElementById('name').value;
//     const rating = document.getElementById('rating').value;
//     const reviewText = document.getElementById('review').value;

//     const newReview = createReviewElement(name, rating, reviewText);

//     document.getElementById('reviews-container').appendChild(newReview);

//     saveReviewToLocalStorage(name, rating, reviewText);

//     reviewForm.reset();
// });

// function createReviewElement(name, rating, reviewText) {
//     const reviewDiv = document.createElement('div');
//     reviewDiv.classList.add('testimonial');

//     reviewDiv.innerHTML = `
//         <h3>${name}</h3>
//         <p>${reviewText}</p>
//         <div class="stars">${generateStarRating(rating)}</div>
//     `;
//     return reviewDiv;
// }

// function generateStarRating(rating) {
//     let starsHTML = '';
//     for (let i = 1; i <= 5; i++) {
//         starsHTML += `<i class="star ${i <= rating ? 'fas fa-star' : 'far fa-star'}"></i>`;
//     }
//     return starsHTML;
// }

// // Function to save review data to local storage
// function saveReviewToLocalStorage(name, rating, reviewText) {
//     const reviews = getReviewsFromLocalStorage();
//     reviews.push({ name, rating, reviewText });
//     localStorage.setItem('reviews', JSON.stringify(reviews));
// }

// // Function to get reviews from local storage
// function getReviewsFromLocalStorage() {
//     const reviews = localStorage.getItem('reviews');
//     return reviews ? JSON.parse(reviews) : [];
// }

// // Function to display reviews from local storage
// function displayReviewsFromLocalStorage() {
//     const reviewsContainer = document.getElementById('reviews-container');
//     reviewsContainer.innerHTML = '';

//     const reviews = getReviewsFromLocalStorage();
//     reviews.forEach(review => {
//         const reviewDiv = createReviewElement(review.name, review.rating, review.reviewText);
//         reviewsContainer.appendChild(reviewDiv);
//     });
// }

// // Pre-existing testimonials data
// const testimonials = [
//     {
//         name: 'Karan Mehta',
//         review: 'As a photographer, Bharat Darpan has provided me with endless inspiration.',
//         rating: 5,
//         image: 'karan-mehta.jpg'
//     },
//     {
//         name: 'Ananya Singh',
//         review: 'The depth and variety of content on Bharat Darpan are unmatched!',
//         rating: 5,
//         image: 'ananya-singh.jpg'
//     }
// ];

// // Display pre-existing testimonials on page load
// function displayTestimonials() {
//     const reviewsContainer = document.getElementById('reviews-container');
    
//     testimonials.forEach(testimonial => {
//         const testimonialDiv = document.createElement('div');
//         testimonialDiv.classList.add('testimonial');

//         testimonialDiv.innerHTML = `
//             <img src="${testimonial.image}" alt="${testimonial.name}">
//             <h3>${testimonial.name}</h3>
//             <p>${testimonial.review}</p>
//             <div class="stars">${generateStarRating(testimonial.rating)}</div>
//         `;

//         reviewsContainer.appendChild(testimonialDiv);
//     });
// }

// // Call function to load testimonials on page load
// displayTestimonials();

// // Call function to display reviews from local storage on page load
// displayReviewsFromLocalStorage();
function loadReviews() {
    fetch('http://localhost:5000/review/data')
        .then(response => response.json())  // Convert the response to JSON
        .then(data => {
            const reviewsContainer = document.querySelector('.reviews-container');

            if (data.length === 0) {
                reviewsContainer.innerHTML = '<p>No reviews available.</p>';
            } else {
                // Loop through each review and display it in a card
                data.forEach(review => {
                    const reviewCard = document.createElement('div');
                    reviewCard.classList.add('review-card');
                    reviewCard.innerHTML = `
                        <h3 class="review-author">${review.name}</h3>
                        <div class="review-stars">Stars: ${review.star} &#9733;</div>
                        <p class="review-comment">${review.comment}</p>
                    `;
                    reviewsContainer.appendChild(reviewCard);  // Add the review card to the container
                });
            }
        })
        .catch(error => {
            console.error('Error fetching reviews:', error);
        });
}
window.onload = loadReviews;