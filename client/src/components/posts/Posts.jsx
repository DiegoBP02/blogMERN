import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  if (posts && Array.isArray(posts)) {
    return (
      <div className="posts">
        {posts.map((post) => {
          return <Post post={post} />;
        })}
      </div>
    );
  }

  return <div>No Posts</div>;
}
