import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { mockVideos } from '../data/videos';
import VideoCard, { VideoCardSkeleton } from '../components/VideoCard';
import './SearchResults.css';

export default function SearchResults() {
  const [params] = useSearchParams();
  const q = params.get('q') || '';
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const r = mockVideos.filter(v =>
        v.title.toLowerCase().includes(q.toLowerCase()) ||
        v.channel.toLowerCase().includes(q.toLowerCase()) ||
        v.category.toLowerCase().includes(q.toLowerCase()) ||
        v.tags.some(t => t.toLowerCase().includes(q.toLowerCase()))
      );
      setResults(r);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [q]);

  return (
    <div className="search-page">
      <div className="search-header">
        <p className="search-label">
          {loading ? 'Searching...' : `${results.length} results for`}
          {!loading && <strong> "{q}"</strong>}
        </p>
      </div>

      {loading ? (
        <div className="search-grid">
          {Array.from({ length: 6 }).map((_, i) => <VideoCardSkeleton key={i} />)}
        </div>
      ) : results.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🔍</div>
          <h3>No results found for "{q}"</h3>
          <p>Try different keywords or check your spelling</p>
        </div>
      ) : (
        <div className="search-grid">
          {results.map((v, i) => <VideoCard key={v.id} video={v} index={i} />)}
        </div>
      )}
    </div>
  );
}
