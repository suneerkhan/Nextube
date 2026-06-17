import { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatViews } from '../data/videos';
import './VideoCard.css';

export function VideoCardSkeleton() {
  return (
    <div className="video-card skeleton-card">
      <div className="skeleton thumb-skeleton" />
      <div className="card-info">
        <div className="skeleton avatar-skeleton" />
        <div className="card-text">
          <div className="skeleton title-skeleton" />
          <div className="skeleton title-skeleton" style={{ width: '70%', marginTop: 6 }} />
          <div className="skeleton meta-skeleton" />
        </div>
      </div>
    </div>
  );
}

export default function VideoCard({ video, index = 0 }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <Link
      to={`/video/${video.id}`}
      className="video-card"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="thumb-wrap">
        {!imgLoaded && <div className="skeleton thumb-loading" />}
        <img
          src={video.thumbnail}
          alt={video.title}
          className={`thumb ${imgLoaded ? 'loaded' : ''}`}
          onLoad={() => setImgLoaded(true)}
          loading="lazy"
        />
        <div className="thumb-overlay">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="play-icon">
            <circle cx="18" cy="18" r="18" fill="rgba(0,0,0,0.6)" />
            <polygon points="14,11 28,18 14,25" fill="white" />
          </svg>
        </div>
        <span className={`duration-badge ${video.duration === 'LIVE' ? 'live-badge' : ''}`}>
          {video.duration}
        </span>
      </div>

      <div className="card-info">
        <img
          src={video.channelAvatar}
          alt={video.channel}
          className="channel-avatar"
          loading="lazy"
        />
        <div className="card-text">
          <h3 className="card-title">{video.title}</h3>
          <p className="card-channel">{video.channel}</p>
          <p className="card-meta">
            {formatViews(video.views)} · {video.uploadedAt}
          </p>
        </div>
      </div>
    </Link>
  );
}
