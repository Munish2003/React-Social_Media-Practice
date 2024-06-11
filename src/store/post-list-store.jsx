import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
function postListReducer(currPostList, action) {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
}
function PostListProvider({ children }) {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  function addPost(userId, title, body, reactions, tags) {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: new Date(),
        title,
        body,
        reactions,
        userId,
        tags,
      },
    });
  }

  function deletePost(postId) {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  }

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
}
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "H1 friends what is up ,my name in munish kumar.I am finally going to mumbai",
    reactions: 2,
    userId: "user-9",
    tags: ["Vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Graduated from btech",
    body: "4 saal ki masti ke baad bhi ho gye pass",
    reactions: 15,
    userId: "user-12",
    tags: ["Unbelievable", "Graduting"],
  },
];

export default PostListProvider;
