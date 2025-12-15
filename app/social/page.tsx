'use client'
import { useState } from 'react';
import {
  User,
  MessageSquare,
  Briefcase,
  Bell,
  ThumbsUp,
  Share2,
  Search,
  Home,
  TrendingUp,
  Users,
  Bookmark,
  MoreHorizontal,
  Send,
  Heart,
  MessageCircle,
  Repeat2,
  Plus
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const posts = [
    {
      id: 1,
      author: 'Sarah Chen',
      role: 'Senior Product Designer',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      time: '3h ago',
      content: 'Just wrapped up an amazing design sprint with the team. The power of collaboration never ceases to amaze me. Here are some key insights we discovered about user behavior patterns.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 142,
      comments: 28,
      shares: 12
    },
    {
      id: 2,
      author: 'Marcus Rodriguez',
      role: 'Full Stack Developer',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      time: '5h ago',
      content: 'Excited to share that our open-source project just hit 10k stars on GitHub! Huge thanks to the community for the support. Building in public has been an incredible journey.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 389,
      comments: 64,
      shares: 45
    },
    {
      id: 3,
      author: 'Emily Watson',
      role: 'Tech Lead at InnovateCo',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      time: '8h ago',
      content: 'The future of AI in software development is here. Just demoed our new AI-assisted code review tool and the results are phenomenal. Reducing review time by 60% while maintaining quality.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 567,
      comments: 91,
      shares: 78
    }
  ];

  const stories = [
    { name: 'Your Story', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150', hasStory: false },
    { name: 'Norbit', image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150', hasStory: true },
    { name: 'Kumatu', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150', hasStory: true },
    { name: 'Tommy Egan', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150', hasStory: true },
    { name: 'Madia', image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150', hasStory: true },
  ];

  const suggestions = [
    { name: 'Steff Curry', role: 'NBA GOAT', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150', mutualConnections: 12 },
    { name: 'Mia Khalifa', role: 'Model', image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150', mutualConnections: 8 },
    { name: 'Barry Allen', role: 'SuperHero', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150', mutualConnections: 15 },
    { name: 'Nicki Minaj', role: 'Chun Li', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150', mutualConnections: 6 },
  ];

  const trending = [
    { tag: 'WebDevelopment', posts: '12.4K' },
    { tag: 'AI', posts: '24.8K' },
    { tag: 'ReactJS', posts: '8.2K' },
    { tag: 'CloudComputing', posts: '15.6K' },
    { tag: 'Cybersecurity', posts: '9.3K' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Sidebar */}
      <aside className="hidden mt-16 lg:flex flex-col fixed left-0 top-0 h-screen w-72 border-r border-slate-800/50 bg-slate-950/95 backdrop-blur-sm p-6 space-y-8">

        <nav className="space-y-2">
          {[
            { icon: Home, label: 'Home', id: 'home', badge: null },
            { icon: Users, label: 'Network', id: 'network', badge: '12' },
            { icon: Briefcase, label: 'Jobs', id: 'jobs', badge: '3' },
            { icon: MessageSquare, label: 'Messaging', id: 'messaging', badge: '5' },
            { icon: Bell, label: 'Notifications', id: 'notifications', badge: '24' },
            { icon: Bookmark, label: 'Saved', id: 'saved', badge: null },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center justify-between gap-3 px-4 py-3 rounded-xl w-full transition-all duration-200 cursor-pointer ${
                activeTab === item.id
                  ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 shadow-lg shadow-cyan-500/5'
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </div>
              {item.badge && (
                <span className="bg-cyan-500 text-slate-950 text-xs font-bold px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="flex-1" />

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-400 font-medium">Trending Topics</span>
            <TrendingUp size={16} className="text-cyan-400" />
          </div>
          {trending.slice(0, 3).map((topic) => (
            <div
              key={topic.tag}
              className="p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 cursor-pointer transition-all duration-200 border border-slate-800/50 hover:border-cyan-500/20"
            >
              <div className="text-cyan-400 font-medium text-sm">#{topic.tag}</div>
              <div className="text-slate-500 text-xs mt-1">{topic.posts} posts</div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 cursor-pointer transition-all duration-200 border border-slate-800/50">
          <img
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
            alt="Profile"
            className="h-10 w-10 rounded-full object-cover border-2 border-slate-700"
          />
          <div className="flex-1">
            <div className="font-medium text-sm">You</div>
            <div className="text-slate-400 text-xs">View Profile</div>
          </div>
          <MoreHorizontal size={18} className="text-slate-400" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-72 lg:mr-80 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">

          {/* Create Post */}
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800/50 shadow-xl">
            <div className="flex gap-4">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
                alt="Your avatar"
                className="h-12 w-12 rounded-full object-cover border-2 border-slate-700"
              />
              <input
                type="text"
                placeholder="Share your thoughts..."
                className="flex-1 bg-slate-800/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all border border-slate-700/50"
              />
            </div>
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-800/50">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-white transition-all text-sm font-medium">
                <TrendingUp size={18} />
                Media
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-white transition-all text-sm font-medium">
                <Briefcase size={18} />
                Job
              </button>
              <button className="ml-auto flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white transition-all font-medium shadow-lg shadow-cyan-500/20">
                <Send size={18} />
                Post
              </button>
            </div>
          </div>

          {/* Stories */}
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {stories.map((story, idx) => (
              <div key={idx} className="flex flex-col items-center flex-shrink-0 cursor-pointer group">
                <div className={`relative ${story.hasStory ? 'p-1 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl' : ''}`}>
                  <img
                    src={story.image}
                    alt={story.name}
                    className="h-20 w-20 rounded-xl object-cover border-4 border-slate-900"
                  />
                  {!story.hasStory && (
                    <div className="absolute bottom-0 right-0 h-6 w-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center border-2 border-slate-900">
                      <Plus size={14} className="text-white" />
                    </div>
                  )}
                </div>
                <span className="text-xs text-slate-400 mt-2 max-w-[80px] truncate group-hover:text-white transition-colors">
                  {story.name}
                </span>
              </div>
            ))}
          </div>

          {/* Posts */}
          <div className="space-y-6">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-slate-700/50"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex gap-3">
                      <img
                        src={post.avatar}
                        alt={post.author}
                        className="h-12 w-12 rounded-full object-cover border-2 border-slate-700"
                      />
                      <div>
                        <h3 className="font-semibold text-white hover:text-cyan-400 cursor-pointer transition-colors">
                          {post.author}
                        </h3>
                        <p className="text-slate-400 text-sm">{post.role}</p>
                        <p className="text-slate-500 text-xs mt-0.5">{post.time}</p>
                      </div>
                    </div>
                    <button className="p-2 rounded-lg hover:bg-slate-800/50 text-slate-400 hover:text-white transition-all">
                      <MoreHorizontal size={20} />
                    </button>
                  </div>

                  <p className="text-slate-200 leading-relaxed mb-4">{post.content}</p>

                  <img
                    src={post.image}
                    alt="Post content"
                    className="w-full rounded-xl object-cover cursor-pointer hover:opacity-95 transition-opacity"
                  />
                </div>

                <div className="px-6 py-3 flex items-center justify-between text-sm text-slate-400 border-t border-slate-800/50">
                  <span className="hover:text-white cursor-pointer transition-colors">{post.likes} likes</span>
                  <div className="flex gap-4">
                    <span className="hover:text-white cursor-pointer transition-colors">{post.comments} comments</span>
                    <span className="hover:text-white cursor-pointer transition-colors">{post.shares} shares</span>
                  </div>
                </div>

                <div className="px-6 pb-4 flex items-center justify-around border-t border-slate-800/50">
                  <button className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-slate-800/50 text-slate-400 hover:text-cyan-400 transition-all font-medium group">
                    <Heart size={20} className="group-hover:scale-110 transition-transform" />
                    Like
                  </button>
                  <button className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-slate-800/50 text-slate-400 hover:text-blue-400 transition-all font-medium group">
                    <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                    Comment
                  </button>
                  <button className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-slate-800/50 text-slate-400 hover:text-green-400 transition-all font-medium group">
                    <Repeat2 size={20} className="group-hover:scale-110 transition-transform" />
                    Repost
                  </button>
                  <button className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-slate-800/50 text-slate-400 hover:text-amber-400 transition-all font-medium group">
                    <Share2 size={20} className="group-hover:scale-110 transition-transform" />
                    Share
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="hidden mt-16 lg:flex flex-col fixed right-0 top-0 h-screen w-80 border-l border-slate-800/50 bg-slate-950/95 backdrop-blur-sm p-6 space-y-6 overflow-y-auto">
        <div className="relative">
          <Search className="absolute top-3.5 left-4 text-slate-500" size={18} />
          <input
            type="text"
            placeholder="Search people, jobs, posts..."
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-800/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all border border-slate-700/50"
          />
        </div>

        <div className="bg-slate-900/50 rounded-2xl p-5 border border-slate-800/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-white">Suggested Connections</h3>
          </div>
          <div className="space-y-4">
            {suggestions.map((person, idx) => (
              <div key={idx} className="flex items-start gap-3 group">
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-12 w-12 rounded-full object-cover border-2 border-slate-700 group-hover:border-cyan-500/50 transition-colors"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-white text-sm hover:text-cyan-400 cursor-pointer transition-colors truncate">
                    {person.name}
                  </h4>
                  <p className="text-slate-400 text-xs truncate">{person.role}</p>
                  <p className="text-slate-500 text-xs mt-1">{person.mutualConnections} mutual connections</p>
                </div>
                <button className="px-3 py-1.5 bg-cyan-500 hover:bg-cyan-600 cursor-pointer text-white text-xs font-medium rounded-lg transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30">
                  Connect
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900/50 rounded-2xl p-5 border border-slate-800/50">
          <h3 className="font-semibold text-white mb-4">Trending Topics</h3>
          <div className="space-y-3">
            {trending.map((topic, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 cursor-pointer transition-all border border-slate-800/50 hover:border-cyan-500/20 group"
              >
                <div>
                  <div className="text-cyan-400 font-medium text-sm group-hover:text-cyan-300 transition-colors">
                    #{topic.tag}
                  </div>
                  <div className="text-slate-500 text-xs mt-0.5">{topic.posts} posts today</div>
                </div>
                <TrendingUp size={16} className="text-slate-600 group-hover:text-cyan-500 transition-colors" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-5 border border-cyan-500/20">
          <h3 className="font-semibold text-white mb-2">Upgrade to Premium</h3>
          <p className="text-slate-400 text-sm mb-4">
            Get exclusive features and stand out in the network.
          </p>
          <button className="w-full py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all shadow-lg shadow-cyan-500/20">
            Try for Free
          </button>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-800/50 px-4 py-3">
        <div className="flex items-center justify-around">
          {[
            { icon: Home, id: 'home' },
            { icon: Users, id: 'network' },
            { icon: MessageSquare, id: 'messaging' },
            { icon: Bell, id: 'notifications' },
            { icon: User, id: 'profile' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`p-3 rounded-xl transition-all ${
                activeTab === item.id
                  ? 'text-cyan-400 bg-cyan-500/10'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <item.icon size={22} />
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
