export const API_KEY = 'AIzaSyDOdtEw7YlZpzu3kCOZ17p0DRSajItH6q0';
export const categories = [
  'All', 'Trending', 'Music', 'Gaming', 'News', 'Sports', 'Tech', 'Cooking', 'Travel', 'Science', 'Movies', 'Live'
];

export const mockVideos = [
  {
    id: 'v1',
    title: 'Building a Full-Stack App with React & Node.js in 2024',
    channel: 'CodeWithMe',
    channelId: 'c1',
    channelAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CodeWithMe',
    thumbnail: 'https://picsum.photos/seed/react2024/640/360',
    views: 2400000,
    likes: 84000,
    dislikes: 1200,
    duration: '42:18',
    uploadedAt: '2 days ago',
    category: 'Tech',
    description: 'In this comprehensive tutorial, we build a complete full-stack application from scratch using React 18, Node.js, Express, and MongoDB. We cover authentication, REST APIs, state management, and deployment to production.\n\nTimestamps:\n0:00 - Introduction\n5:30 - Project Setup\n12:00 - Backend with Node.js\n28:00 - React Frontend\n38:00 - Deployment',
    subscribers: '1.2M',
    tags: ['React', 'Node.js', 'Full Stack', 'Web Dev'],
    comments: [
      { id: 'cm1', user: 'DevDreamer', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DevDreamer', text: 'This is hands down the best full-stack tutorial I\'ve ever watched. Crystal clear explanation!', likes: 432, time: '1 day ago' },
      { id: 'cm2', user: 'SyntaxSarah', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SyntaxSarah', text: 'Finally got my project working after following this. Thank you so much!', likes: 218, time: '1 day ago' },
      { id: 'cm3', user: 'ByteBuddy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ByteBuddy', text: 'The authentication section alone is worth watching 3 times.', likes: 97, time: '18 hours ago' },
    ]
  },
  {
    id: 'v2',
    title: 'Lo-Fi Hip Hop Radio — Beats to Study / Relax to 🎵',
    channel: 'ChillVibesMusic',
    channelId: 'c2',
    channelAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ChillVibes',
    thumbnail: 'https://picsum.photos/seed/lofi999/640/360',
    views: 48000000,
    likes: 920000,
    dislikes: 8200,
    duration: 'LIVE',
    uploadedAt: 'Streaming now',
    category: 'Music',
    description: '24/7 lo-fi hip hop radio — the perfect background music for studying, working, or relaxing. No distractions, just good vibes.\n\n☕ Support us on Patreon\n🎵 Tracks on Spotify',
    subscribers: '8.4M',
    tags: ['Lo-Fi', 'Study Music', 'Chill', 'Hip Hop'],
    comments: [
      { id: 'cm4', user: 'NightOwlNadia', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NightOwl', text: 'It\'s 2am and this is keeping me sane during finals week 😭', likes: 12400, time: '3 hours ago' },
      { id: 'cm5', user: 'QuietStudier', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=QuietStudy', text: 'Been using this channel for 3 years now. Never gets old.', likes: 8900, time: '5 hours ago' },
    ]
  },
  {
    id: 'v3',
    title: 'I Spent 100 Days in Minecraft Hardcore — Here\'s What Happened',
    channel: 'PixelProwler',
    channelId: 'c3',
    channelAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PixelProwler',
    thumbnail: 'https://picsum.photos/seed/minecraft100/640/360',
    views: 15700000,
    likes: 640000,
    dislikes: 4300,
    duration: '1:24:07',
    uploadedAt: '1 week ago',
    category: 'Gaming',
    description: '100 days. Hardcore mode. No second chances. Watch the full journey from a dirt hut to defeating the Ender Dragon — all without dying once.',
    subscribers: '4.1M',
    tags: ['Minecraft', 'Hardcore', '100 Days', 'Gaming'],
    comments: [
      { id: 'cm6', user: 'GamerGuru99', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GamerGuru', text: 'The moment at day 67 had me holding my breath 😤', likes: 23100, time: '6 days ago' },
      { id: 'cm7', user: 'BlockBuster', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BlockBust', text: 'I\'ve watched this 4 times. Still holds up.', likes: 9400, time: '5 days ago' },
    ]
  },
  {
    id: 'v4',
    title: 'How SpaceX Starship Will Change Everything',
    channel: 'OrbitalInsights',
    channelId: 'c4',
    channelAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=OrbitalInsights',
    thumbnail: 'https://picsum.photos/seed/spacex2024/640/360',
    views: 9200000,
    likes: 412000,
    dislikes: 6700,
    duration: '28:44',
    uploadedAt: '3 days ago',
    category: 'Science',
    description: 'A deep dive into SpaceX\'s Starship — the most powerful rocket ever built. How does full reusability work? What does this mean for Mars colonization? We break it all down.',
    subscribers: '3.7M',
    tags: ['SpaceX', 'Starship', 'Space', 'Science'],
    comments: [
      { id: 'cm8', user: 'AstroAmanda', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AstroAmanda', text: 'The engineering behind the hot staging ring is genuinely mind blowing.', likes: 4500, time: '2 days ago' },
    ]
  },
  {
    id: 'v5',
    title: 'Gordon Ramsay Teaches Me How to Make Perfect Pasta',
    channel: 'KitchenMasters',
    channelId: 'c5',
    channelAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KitchenMasters',
    thumbnail: 'https://picsum.photos/seed/pasta2024/640/360',
    views: 6800000,
    likes: 230000,
    dislikes: 1800,
    duration: '18:32',
    uploadedAt: '5 days ago',
    category: 'Cooking',
    description: 'We challenged a professional chef to teach a complete beginner how to make authentic Italian pasta from scratch. The results were... interesting.',
    subscribers: '2.9M',
    tags: ['Cooking', 'Pasta', 'Italian', 'Food'],
    comments: [
      { id: 'cm9', user: 'FoodieFrederica', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Foodie', text: 'Made this last night. My family thought I ordered from a restaurant!', likes: 7800, time: '4 days ago' },
    ]
  },
  {
    id: 'v6',
    title: 'Tokyo in 4K — A Cinematic Walking Tour of Shibuya at Night',
    channel: 'WanderLens',
    channelId: 'c6',
    channelAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=WanderLens',
    thumbnail: 'https://picsum.photos/seed/tokyo4k/640/360',
    views: 3400000,
    likes: 98000,
    dislikes: 700,
    duration: '32:10',
    uploadedAt: '2 weeks ago',
    category: 'Travel',
    description: 'Join us for a stunning 4K cinematic walk through Shibuya, Harajuku, and Shinjuku as Tokyo comes alive after dark. Filmed on Sony FX6 with anamorphic lenses.',
    subscribers: '1.8M',
    tags: ['Tokyo', 'Japan', '4K', 'Travel'],
    comments: [
      { id: 'cm10', user: 'JapanJunkie', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JapanJunk', text: 'This takes me right back. Tokyo night life is something else 🌃', likes: 3400, time: '1 week ago' },
    ]
  },
  {
    id: 'v7',
    title: 'The AI Revolution: What GPT-5 Actually Means for Us',
    channel: 'FutureTech Today',
    channelId: 'c7',
    channelAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=FutureTech',
    thumbnail: 'https://picsum.photos/seed/ai2025/640/360',
    views: 11300000,
    likes: 520000,
    dislikes: 14000,
    duration: '35:22',
    uploadedAt: '4 days ago',
    category: 'Tech',
    description: 'AI is moving faster than anyone predicted. In this video we break down what the latest models actually mean for jobs, creativity, and the future of humanity.',
    subscribers: '5.6M',
    tags: ['AI', 'GPT', 'Technology', 'Future'],
    comments: [
      { id: 'cm11', user: 'TechThinker', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TechThink', text: 'The part about creative jobs really made me think. Great video.', likes: 6700, time: '3 days ago' },
    ]
  },
  {
    id: 'v8',
    title: 'Every NBA Buzzer Beater From the 2024 Playoffs 🏀',
    channel: 'HoopsHighlight',
    channelId: 'c8',
    channelAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HoopsHL',
    thumbnail: 'https://picsum.photos/seed/nba2024/640/360',
    views: 22000000,
    likes: 780000,
    dislikes: 5100,
    duration: '24:55',
    uploadedAt: '1 month ago',
    category: 'Sports',
    description: 'Every single buzzer beater from the 2024 NBA Playoffs compiled in one video. Pure basketball magic.',
    subscribers: '6.2M',
    tags: ['NBA', 'Basketball', 'Playoffs', 'Sports'],
    comments: [
      { id: 'cm12', user: 'CourtKing', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CourtKing', text: 'That Game 7 shot will never get old. NEVER.', likes: 34000, time: '3 weeks ago' },
    ]
  },
  {
    id: 'v9',
    title: 'CSS Grid vs Flexbox — When to Use Which (2024)',
    channel: 'CodeWithMe',
    channelId: 'c1',
    channelAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CodeWithMe',
    thumbnail: 'https://picsum.photos/seed/cssgrid/640/360',
    views: 1800000,
    likes: 72000,
    dislikes: 800,
    duration: '22:45',
    uploadedAt: '3 weeks ago',
    category: 'Tech',
    description: 'The most common question in web development — when should you use CSS Grid vs Flexbox? We cover practical examples, real-world layouts, and the mental model that finally makes it click.',
    subscribers: '1.2M',
    tags: ['CSS', 'Web Dev', 'Frontend', 'Tutorial'],
    comments: [
      { id: 'cm13', user: 'LayoutLearner', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Layout', text: 'I\'ve been confused about this for 2 years. This video finally fixed it.', likes: 2900, time: '2 weeks ago' },
    ]
  },
  {
    id: 'v10',
    title: 'I Visited Every Country in the World — Here\'s the Honest Truth',
    channel: 'WanderLens',
    channelId: 'c6',
    channelAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=WanderLens',
    thumbnail: 'https://picsum.photos/seed/world195/640/360',
    views: 31000000,
    likes: 1100000,
    dislikes: 22000,
    duration: '1:02:44',
    uploadedAt: '2 months ago',
    category: 'Travel',
    description: 'After 8 years of travel, I\'ve been to every country in the world. This is the honest, unfiltered truth — the good, the difficult, and the life-changing moments.',
    subscribers: '1.8M',
    tags: ['Travel', 'World', 'Adventure', 'Documentary'],
    comments: [
      { id: 'cm14', user: 'GlobeTrotter', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Globe', text: 'One of the most genuinely moving videos I\'ve ever watched on YouTube.', likes: 45000, time: '1 month ago' },
    ]
  },
  {
    id: 'v11',
    title: 'Cyberpunk 2077 Phantom Liberty — Full Story Explained',
    channel: 'PixelProwler',
    channelId: 'c3',
    channelAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PixelProwler',
    thumbnail: 'https://picsum.photos/seed/cp2077/640/360',
    views: 8900000,
    likes: 340000,
    dislikes: 7800,
    duration: '58:12',
    uploadedAt: '6 days ago',
    category: 'Gaming',
    description: 'A complete breakdown of the Phantom Liberty storyline, all endings explained, and the hidden lore you definitely missed. SPOILER WARNING.',
    subscribers: '4.1M',
    tags: ['Cyberpunk', 'Gaming', 'Story', 'Lore'],
    comments: [
      { id: 'cm15', user: 'NightCityNerd', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NightCity', text: 'The Reed ending broke me. This breakdown made it hit even harder.', likes: 18000, time: '5 days ago' },
    ]
  },
  {
    id: 'v12',
    title: 'Black Holes Explained — From Birth to Death',
    channel: 'OrbitalInsights',
    channelId: 'c4',
    channelAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=OrbitalInsights',
    thumbnail: 'https://picsum.photos/seed/blackhole/640/360',
    views: 19400000,
    likes: 820000,
    dislikes: 9200,
    duration: '45:03',
    uploadedAt: '1 month ago',
    category: 'Science',
    description: 'Everything you need to know about black holes — how they form, what happens inside them, Hawking radiation, and the eventual fate of even the largest black holes in the universe.',
    subscribers: '3.7M',
    tags: ['Black Holes', 'Space', 'Physics', 'Science'],
    comments: [
      { id: 'cm16', user: 'CosmicCurious', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Cosmic', text: 'The part about information paradox kept me up all night thinking.', likes: 12300, time: '3 weeks ago' },
    ]
  },
];

export const formatViews = (views) => {
  if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M views`;
  if (views >= 1000) return `${(views / 1000).toFixed(0)}K views`;
  return `${views} views`;
};

export const formatLikes = (likes) => {
  if (likes >= 1000000) return `${(likes / 1000000).toFixed(1)}M`;
  if (likes >= 1000) return `${(likes / 1000).toFixed(0)}K`;
  return `${likes}`;
};
