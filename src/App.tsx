import { useState } from "react";
import "./App.css";
import { mockPosts } from "./data/data";
import PostEditor from "./components/PostEditor/PostEditor";
import PostCard from "./components/PostCard/PostCard";
import AuthModal from "./components/Auth/Auth";
import Header from "./components/header/Header";
import type { Post, User } from "./components/PostEditor/constants/PostEditor.interface";
import type { AuthMode } from "./components/Auth/constants/auth.interface";

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState(mockPosts);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode>("signin");
  console.log('isauthmodalopen', isAuthModalOpen)

  const handleAuth = (userData: User) => {
    setUser(userData);
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleInteraction = () => {
    if (!user) {
      setIsAuthModalOpen(true);
    }
  };

  const handleNewPost = (newPost: Post) => {
    setPosts((prev) => [newPost, ...prev]);
  };

  return (
    <div className="min-h-screen w-full`">
      <Header user={user} handleLogout={handleLogout} setIsAuthModalOpen={setIsAuthModalOpen}/>
      <main className="max-w-2xl mx-auto px-4 py-6">
        <PostEditor
          user={user}
          onPost={handleNewPost}
          onInteraction={handleInteraction}
        />
        <div className="space-y-6">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="animate-in slide-in-from-bottom-4 duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <PostCard post={post} onInteraction={handleInteraction} />
            </div>
          ))}
        </div>
      </main>
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onToggleMode={() =>
          setAuthMode(authMode === "signin" ? "signup" : "signin")
        }
        onAuth={handleAuth}
      />
    </div>
  );
}

export default App;
