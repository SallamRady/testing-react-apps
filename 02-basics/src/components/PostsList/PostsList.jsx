import { useEffect, useState } from "react";
import { getPosts } from "../../api/getPosts";

export default function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const data = async () => {
      const res = await getPosts();
      setPosts(res);
    };

    data();
  }, []);
  return (
    <div>
      <h1 data-testid='posts-list-header'>Fake Posts List</h1>
      {posts?.map((post) => (
        <div key={post.id} data-testid='post-container'>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
