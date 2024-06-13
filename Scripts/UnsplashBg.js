// Your Unsplash Access Key
const ACCESS_KEY = 'jBFL01puUWIUvaW3vgh0auFs0Sh83HYnhfS9pkHIjC0';

// Collections related to the themes: nature, technology, cars, landscapes, anime
const collections = '1580860,139386,141077,997405,827743,3694365,466415,494263,317099';

// Function to fetch a random landscape image from Unsplash based on collections
async function fetchBackgroundImage() {
    const response = await fetch(`https://api.unsplash.com/photos/random?orientation=landscape&collections=${collections}&client_id=${ACCESS_KEY}`);
    const data = await response.json();
    return data;
}

// Function to preload the image
function preloadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(url);
        img.onerror = reject;
    });
}

// Function to set the fetched image as the background and set the attribution
async function setBackground() {
    try {
        const data = await fetchBackgroundImage();
        const imageUrl = data.urls.full;
        const photographerName = data.user.name;
        const photographerLink = data.user.links.html;

        await preloadImage(imageUrl);
        
        document.body.style.backgroundImage = `url(${imageUrl})`;

        const attributionElement = document.getElementById('attribution');
        attributionElement.innerHTML = `Photo by <a href="${photographerLink}" target="_blank">${photographerName}</a> on <a href="https://unsplash.com" target="_blank">Unsplash</a>`;
    } catch (error) {
        console.error('Error fetching background image:', error);
    }
}

// Set the background and attribution initially
setBackground();

// Set a timer to fetch a new image every 5 minutes
setInterval(setBackground, 5 * 60 * 1000);
