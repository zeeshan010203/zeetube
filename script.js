const videos = [
  {
    thumbnail: "images/hq720.webp",
    profilePicture: "images/dog.jpg",
    title: "Ghost - Justin Bieber (Lyrics)",
    author: "Dracula Lyrics",
    views: "120 views",
    time: "1 week ago",
  },
  {
    thumbnail: "images/7years.webp",
    profilePicture: "images/dog.jpg",
    title: "elijah woods - 24/7, 365 - (Lyrics)",
    author: "courages lyrics",
    views: "120 views",
    time: "1 week ago",
  },
];

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

// const videoContainer = document.getElementById("video-container");

// videos.forEach((video) => {
//   videoContainer.innerHTML += createVideoPreview(video);
// });

const searchInput = document.getElementById("search-box");
const searchButton = document.getElementById("search-button");
const profileButton = document.getElementById("profile-icon-button");
const profileMenu = document.getElementById("real-menu");
const closeButton = document.getElementById("close-menu");
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");

searchButton.addEventListener("click", () => {
  window.open(
    `https://www.youtube.com/results?search_query=${searchInput.value}`
  );
});

profileButton.addEventListener("click", () => {
  profileMenu.style.display = "block";
});

closeButton.addEventListener("click", () => {
  profileMenu.style.display = "none";
});

hamburger.addEventListener("click", () => {
  if (sidebar.style.display === "block") {
    sidebar.style.display = "none";
  } else {
    sidebar.style.display = "block";
  }
});

const notificationButton = document.getElementById("notification-button");
const notificationMenu = document.getElementById("notifications");

notificationButton.addEventListener("click", () => {
  notificationMenu.style.display = "block";
});

const closeNotification = document.getElementById("close-notification");

closeNotification.addEventListener("click", () => {
  notificationMenu.style.display = "none";
});
