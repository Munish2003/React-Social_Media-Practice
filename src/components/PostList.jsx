import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import { useContext } from "react";

import WelcomeMsg from "./WelcomeMsg.jsx";

function PostList() {
  const { postList, addInitialPosts } = useContext(PostListData);

  function onButtonClick() {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addInitialPosts(data.posts));
  }

  return (
    <>
      {postList.length === 0 && <WelcomeMsg onButtonClick={onButtonClick} />}

      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
}

export default PostList;
