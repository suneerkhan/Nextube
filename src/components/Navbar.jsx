import { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { mockVideos } from '../data/videos';
import './Navbar.css';

export default function Navbar({ onMenuClick }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [focused, setFocused] = useState(false);
  const { dark, toggle } = useTheme();
  const navigate = useNavigate();
  const inputRef = useRef();
  const suggestRef = useRef();

  useEffect(() => {
    if (query.trim().length < 2) {
      setSuggestions([]);
      return;
    }
    const q = query.toLowerCase();
    const matches = mockVideos
      .filter(v => v.title.toLowerCase().includes(q) || v.channel.toLowerCase().includes(q))
      .slice(0, 6);
    setSuggestions(matches);
  }, [query]);

  useEffect(() => {
    const handleClick = (e) => {
      if (!suggestRef.current?.contains(e.target) && !inputRef.current?.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setShowSuggestions(false);
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  const handleSuggestionClick = (video) => {
    setShowSuggestions(false);
    setQuery('');
    navigate(`/video/${video.id}`);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="menu-btn" onClick={onMenuClick} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
        <Link to="/" className="logo">
          <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
            <rect width="28" height="20" rx="5" fill="#ff2d2d"/>
            <polygon points="11,5 22,10 11,15" fill="white"/>
          </svg>
          <span className="logo-text">Nex<em>Tube</em></span>
        </Link>
      </div>

      <div className="navbar-center">
        <form className={`search-form ${focused ? 'focused' : ''}`} onSubmit={handleSearch}>
          <div className="search-input-wrap">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search"
              value={query}
              onChange={e => { setQuery(e.target.value); setShowSuggestions(true); }}
              onFocus={() => { setFocused(true); setShowSuggestions(true); }}
              onBlur={() => setFocused(false)}
              className="search-input"
            />
            {query && (
              <button type="button" className="clear-btn" onClick={() => { setQuery(''); setSuggestions([]); inputRef.current.focus(); }}>
                ✕
              </button>
            )}
          </div>
          <button type="submit" className="search-btn" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>
        </form>

        {showSuggestions && suggestions.length > 0 && (
          <div className="suggestions-dropdown" ref={suggestRef} style={{ animation: 'slideDown 0.18s ease both' }}>
            {suggestions.map(v => (
              <button key={v.id} className="suggestion-item" onMouseDown={() => handleSuggestionClick(v)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="suggest-icon">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <span>{v.title}</span>
                <span className="suggest-channel">{v.channel}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="navbar-right">
        <button className="icon-btn theme-btn" onClick={toggle} title={dark ? 'Light mode' : 'Dark mode'}>
          {dark ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>
        <button className="icon-btn" title="Notifications">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
        </button>
        <div className="avatar" title="Your channel">S</div>
      </div>
    </nav>
  );
}
