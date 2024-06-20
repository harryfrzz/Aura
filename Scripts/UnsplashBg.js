const ACCESS_KEY = 'jBFL01puUWIUvaW3vgh0auFs0Sh83HYnhfS9pkHIjC0';
const collections = '1580860,139386,827743,3694365,466415,317099,186215,4699529,219941,693986,243433';
async function fetchBackgroundImage() {
    const response = await fetch(`https://api.unsplash.com/photos/random?orientation=landscape&collections=${collections}&client_id=${ACCESS_KEY}`);
    const data = await response.json();
    return data;
}
function preloadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(url);
        img.onerror = reject;
    });
}
async function setBackground() {
        try {
            const data = await fetchBackgroundImage();
            const regularImageUrl = data.urls.regular; 
            const fullImageUrl = data.urls.full; 
            const photographerName = data.user.name;
            const photographerLink = data.user.links.html;

            await preloadImage(regularImageUrl);
            document.body.style.backgroundImage = `url(${regularImageUrl})`;

            const attributionElement = document.getElementById('attribution');
            attributionElement.innerHTML = `Photo by <a style="color: white;" href="${photographerLink}" target="_blank">${photographerName}</a> on <a style="color: white;" href="https://unsplash.com" target="_blank">Unsplash</a>`;
            preloadImage(fullImageUrl).then(() => {
                document.body.style.backgroundImage = `url(${fullImageUrl})`;
            });

        } catch (error) {
            console.error('Error fetching background image:', error);
        }
}
setBackground();
setInterval(setBackground, 5 * 60 * 1000);