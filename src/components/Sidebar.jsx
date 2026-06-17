import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const navItems = [
  { icon: '🏠', label: 'Home', path: '/' },
  { icon: '🔥', label: 'Trending', path: '/search?q=trending' },
  { icon: '📺', label: 'Subscriptions', path: '/search?q=subscriptions' },
  { icon: '—', label: '', path: null },
  { icon: '🎵', label: 'Music', path: '/search?q=Music' },
  { icon: '🎮', label: 'Gaming', path: '/search?q=Gaming' },
  { icon: '⚽', label: 'Sports', path: '/search?q=Sports' },
  { icon: '🔬', label: 'Science', path: '/search?q=Science' },
  { icon: '🍳', label: 'Cooking', path: '/search?q=Cooking' },
  { icon: '✈️', label: 'Travel', path: '/search?q=Travel' },
  { icon: '💻', label: 'Tech', path: '/search?q=Tech' },
  { icon: '📰', label: 'News', path: '/search?q=News' },
  { icon: '—', label: '', path: null },
  { icon: '⚙️', label: 'Settings', path: null },
  { icon: '❓', label: 'Help', path: null },
];

export default function Sidebar({ open, collapsed }) {
  const location = useLocation();

  return (
    <>
      {open && !collapsed && <div className="sidebar-overlay" />}
      <aside className={`sidebar ${collapsed ? 'collapsed' : ''} ${open || !collapsed ? 'open' : ''}`}>
        <div className="sidebar-inner">
          {navItems.map((item, i) => {
            if (item.label === '') return <div key={i} className="sidebar-divider" />;
            const isActive = item.path && location.pathname + location.search === item.path;
            if (!item.path) {
              return (
                <div key={i} className={`sidebar-item disabled ${isActive ? 'active' : ''}`}>
                  <span className="sidebar-icon">{item.icon}</span>
                  {!collapsed && <span className="sidebar-label">{item.label}</span>}
                </div>
              );
            }
            return (
              <Link key={i} to={item.path} className={`sidebar-item ${isActive ? 'active' : ''}`}>
                <span className="sidebar-icon">{item.icon}</span>
                {!collapsed && <span className="sidebar-label">{item.label}</span>}
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
}
