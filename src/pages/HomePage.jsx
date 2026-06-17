import { useState, useEffect } from 'react';
import VideoCard, { VideoCardSkeleton } from '../components/VideoCard';
import CategoryBar from '../components/CategoryBar';
import { mockVideos } from '../data/videos';
import { fetchPopularVideos } from '../api/youtube';
import './HomePage.css';

export default function HomePage() {
  const [active, setActive] = useState('All');
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
  // fetchPopularVideos().then(data => {
//   console.log(data);
//   setVideos(data);
//   setLoading(false);
// });
    setLoading(true);
    setPage(1);
    const timer = setTimeout(() => {
      const filtered = active === 'All'
        ? mockVideos
        : mockVideos.filter(v => v.category === active);
      setVideos(filtered);
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [active]);

  const handleLoadMore = () => {
    setPage(p => p + 1);
  };

  return (
    <div className="home-page">
      <CategoryBar active={active} onChange={setActive} />

      {loading ? (
        <div className="video-grid">
          {Array.from({ length: 8 }).map((_, i) => <VideoCardSkeleton key={i} />)}
        </div>
      ) : videos.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📭</div>
          <h3>No videos in this category yet</h3>
          <p>Try a different category or check back later</p>
        </div>
      ) : (
        <>
          <div className="video-grid">
            {videos.map((v, i) => <VideoCard key={v.id} video={v} index={i} />)}
          </div>
          <div className="load-more-wrap">
            <button className="load-more-btn" onClick={handleLoadMore}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
              </svg>
              Load more
            </button>
          </div>
        </>
      )}
    </div>
  );
}
