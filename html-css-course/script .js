// Example video data
const videos = [
    {
        thumbnail: 'images/hq720.webp',
        profilePicture: 'images/dog.jpg',
        title: 'Ghost - Justin Bieber (Lyrics)',
        author: 'Dracula Lyrics',
        views: '120 views',
        time: '1 week ago'
    },
    {
        thumbnail: 'images/7years.webp',
        profilePicture: 'images/dog.jpg',
        title: 'elijah woods - 24/7, 365 - (Lyrics)',
        author: 'courages lyrics',
        views: '120 views',
        time: '1 week ago'
    }
    // Add more video objects as needed
];

// Function to create video preview HTML
function createVideoPreview(video) {
    return `
        <div class="video-preview">
            <img class="ghost" src="${video.thumbnail}" />
            <div class="chanel-picture">
                <img class="profile-picture" src="${video.profilePicture}" />
            </div>
            <div class="video-info">
                <p class="video-title">${video.title}</p>
                <p class="video-author">${video.author}</p>
                <p class="video-stats">${video.views} ${video.time}</p>
            </div>
        </div>
    `;
}

// Get the container where videos will be displayed
const videoContainer = document.getElementById('video-container');

// Loop through the video data and append the HTML to the container
videos.forEach(video => {
    videoContainer.innerHTML += createVideoPreview(video);
});