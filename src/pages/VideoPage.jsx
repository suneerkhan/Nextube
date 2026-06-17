import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { mockVideos, formatViews, formatLikes } from '../data/videos';
import VideoCard from '../components/VideoCard';
import './VideoPage.css';

export default function VideoPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [video, setVideo] = useState(null);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    setLiked(false);
    setDisliked(false);
    setShowFullDesc(false);
    const found = mockVideos.find(v => v.id === id);
    if (!found) { navigate('/'); return; }
    const timer = setTimeout(() => {
      setVideo(found);
      setComments(found.comments || []);
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [id]);

  const related = mockVideos.filter(v => v.id !== id).slice(0, 8);

  const handleLike = () => { setLiked(l => !l); if (disliked) setDisliked(false); };
  const handleDislike = () => { setDisliked(d => !d); if (liked) setLiked(false); };

  const handleComment = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    setComments(c => [{
      id: `new-${Date.now()}`,
      user: 'You',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=You',
      text: comment.trim(),
      likes: 0,
      time: 'Just now'
    }, ...c]);
    setComment('');
  };

  if (loading) return (
    <div className="video-page">
      <div className="video-main">
        <div className="skeleton player-skeleton" />
        <div className="skeleton" style={{ height: 24, width: '80%', marginTop: 16, borderRadius: 6 }} />
        <div className="skeleton" style={{ height: 16, width: '40%', marginTop: 10, borderRadius: 6 }} />
      </div>
    </div>
  );

  if (!video) return null;

  return (
    <div className="video-page scale-in">
      <div className="video-main">
        {/* Player */}
        <div className="player-wrap">
          <iframe
            src={`https://www.youtube.com/embed/?list=PLbpi6ZahtOH6Ar_3GPy3workchF3VMsvQ`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="player-iframe"
          />
          <div className="player-thumb-fallback" style={{ backgroundImage: `url(${video.thumbnail})` }}>
            <div className="play-center">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.65)" />
                <polygon points="26,20 50,32 26,44" fill="white" />
              </svg>
            </div>
          </div>
        </div>

        {/* Title & meta */}
        <div className="video-info">
          <h1 className="video-title">{video.title}</h1>

          <div className="video-meta-row">
            <div className="channel-info">
              <Link to={`/channel/${video.channelId}`} className="channel-link">
                <img src={video.channelAvatar} alt={video.channel} className="channel-avatar-lg" />
                <div>
                  <div className="channel-name">{video.channel}</div>
                  <div className="subs-count">{video.subscribers} subscribers</div>
                </div>
              </Link>
              <button
                className={`sub-btn ${subscribed ? 'subscribed' : ''}`}
                onClick={() => setSubscribed(s => !s)}
              >
                {subscribed ? '✓ Subscribed' : 'Subscribe'}
              </button>
            </div>

            <div className="action-group">
              <div className="like-dislike">
                <button
                  className={`like-btn ${liked ? 'active' : ''}`}
                  onClick={handleLike}
                  title="Like"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/>
                    <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
                  </svg>
                  <span>{formatLikes(video.likes + (liked ? 1 : 0))}</span>
                </button>
                <div className="divider-v" />
                <button
                  className={`dislike-btn ${disliked ? 'active' : ''}`}
                  onClick={handleDislike}
                  title="Dislike"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill={disliked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z"/>
                    <path d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"/>
                  </svg>
                </button>
              </div>

              <button className="action-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                </svg>
                Share
              </button>

              <button className="action-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>
                </svg>
                Save
              </button>
            </div>
          </div>

          {/* Description */}
          <div className={`description ${showFullDesc ? 'expanded' : ''}`}>
            <div className="desc-stats">
              <strong>{formatViews(video.views)}</strong>
              <span>{video.uploadedAt}</span>
              {video.tags.map(t => <span key={t} className="desc-tag">#{t}</span>)}
            </div>
            <p className="desc-text">
              {showFullDesc ? video.description : video.description.slice(0, 120) + '...'}
            </p>
            <button className="show-more-btn" onClick={() => setShowFullDesc(s => !s)}>
              {showFullDesc ? 'Show less' : 'Show more'}
            </button>
          </div>
        </div>

        {/* Comments */}
        <div className="comments-section">
          <h3 className="comments-heading">{comments.length} Comments</h3>

          <form className="comment-form" onSubmit={handleComment}>
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=You" alt="You" className="comment-avatar" />
            <div className="comment-input-wrap">
              <input
                type="text"
                placeholder="Add a comment..."
                value={comment}
                onChange={e => setComment(e.target.value)}
                className="comment-input"
              />
              {comment && (
                <div className="comment-actions">
                  <button type="button" className="cancel-btn" onClick={() => setComment('')}>Cancel</button>
                  <button type="submit" className="submit-comment-btn">Comment</button>
                </div>
              )}
            </div>
          </form>

          <div className="comments-list">
            {comments.map((c, i) => (
              <div key={c.id} className="comment-item" style={{ animationDelay: `${i * 0.04}s` }}>
                <img src={c.avatar} alt={c.user} className="comment-avatar" />
                <div className="comment-body">
                  <div className="comment-header">
                    <span className="comment-user">{c.user}</span>
                    <span className="comment-time">{c.time}</span>
                  </div>
                  <p className="comment-text">{c.text}</p>
                  <div className="comment-footer">
                    <button className="comment-like">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/>
                        <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
                      </svg>
                      {c.likes > 0 ? c.likes : ''}
                    </button>
                    <button className="comment-reply-btn">Reply</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related videos */}
      <div className="video-sidebar">
        <h3 className="related-heading">Up next</h3>
        <div className="related-list">
          {related.map((v, i) => (
            <Link key={v.id} to={`/video/${v.id}`} className="related-card" style={{ animationDelay: `${i * 0.04}s` }}>
              <div className="related-thumb-wrap">
                <img src={v.thumbnail} alt={v.title} className="related-thumb" loading="lazy" />
                <span className={`duration-badge ${v.duration === 'LIVE' ? 'live-badge' : ''}`}>{v.duration}</span>
              </div>
              <div className="related-info">
                <p className="related-title">{v.title}</p>
                <p className="related-channel">{v.channel}</p>
                <p className="related-meta">{formatViews(v.views)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
