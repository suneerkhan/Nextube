const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export async function fetchPopularVideos() {
  const url =
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=technology&type=video&key=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  return data.items.map(item => ({
    id: item.id.videoId,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.high.url,
    channel: item.snippet.channelTitle,

    // temporary placeholders
    channelAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=youtube',
    views: 1000,
    uploadedAt: item.snippet.publishedAt,
    duration: 'LIVE'
  }));
}