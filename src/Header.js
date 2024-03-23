import React, { useContext } from "react";

function Header({ PostsContext }) {
  const { onClearPosts } = useContext(PostsContext);
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results PostsContext={PostsContext} />
        <SearchPosts PostsContext={PostsContext} />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}

function SearchPosts({ PostsContext }) {
  const { searchQuery, setSearchQuery } = useContext(PostsContext);
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}

function Results({ PostsContext }) {
  const { posts } = useContext(PostsContext);
  return <p>🚀 {posts.length} atomic posts found</p>;
}

export default Header;
