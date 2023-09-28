function searchVideos() {
    const query = document.getElementById('searchInput').value;
    const apiKey = 'AIzaSyCLIPJ39crxzjCSETtU-7t6jhab6LLD7Zk'; // Reemplaza con tu clave de API de YouTube
  
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&key=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const videosDiv = document.getElementById('videos');
        videosDiv.innerHTML = '';
  
        data.items.forEach(item => {
          const videoDiv = document.createElement('div');
          videoDiv.classList.add('video-item');
          videoDiv.innerHTML = `
            <h2>${item.snippet.title}</h2>
            <button onclick="openVideo('${item.id.videoId}', '${item.snippet.title}')">
              <img src="${item.snippet.thumbnails.medium.url}" alt="${item.snippet.title}">
            </button>
          `;
          videosDiv.appendChild(videoDiv);
        });
      })
      .catch(error => console.error('Error:', error));
  }
  
  function openVideo(videoId, videoTitle) {
    // Redirige a una nueva página con el reproductor de video
    window.open(`reproductor.html?videoId=${videoId}&videoTitle=${videoTitle}`, '_blank');
}

  
  function closeVideo() {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
  
    videoFrame.src = '';
    modal.style.display = 'none';
  }