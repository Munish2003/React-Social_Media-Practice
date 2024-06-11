import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

function CreatePost() {
  const { addPost } = useContext(PostList);
  const userIdELement = useRef();
  const titleELement = useRef();
  const bodyELement = useRef();
  const reactionsELement = useRef();
  const tagsELement = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    const userId = userIdELement.current.value;
    const title = titleELement.current.value;

    const body = bodyELement.current.value;
    const reactions = reactionsELement.current.value;
    const tags = tagsELement.current.value.split(" ");
    addPost(userId, title, body, reactions, tags);
    userIdELement.current.value = "";
    titleELement.current.value = "";
    bodyELement.current.value = "";
    reactionsELement.current.value = "";
    tagsELement.current.value = "";
  }
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      {/* User id */}
      <div class="mb-3">
        <label for="UserId" class="form-label">
          User Id
        </label>
        <input
          type="text"
          class="form-control"
          placeholder="Add your User Id here..."
          id="UserId"
          ref={userIdELement}
        />
      </div>

      {/* title */}
      <div class="mb-3">
        <label for="title" class="form-label">
          Add Title
        </label>
        <input
          type="text"
          class="form-control"
          placeholder="Add your Title here..."
          id="title"
          ref={titleELement}
        />
      </div>

      {/* Body  */}
      <div class="mb-3">
        <label for="Body" class="form-label">
          Add Content
        </label>
        <textarea
          rows={4}
          class="form-control"
          type="text"
          placeholder="Tell us something more about it..."
          id="Body"
          aria-describedby="emailHelp"
          ref={bodyELement}
        ></textarea>
      </div>

      {/* reactions  */}

      <div class="mb-3">
        <label for="reactions" class="form-label">
          Add Reactions
        </label>
        <input
          type="text"
          class="form-control"
          placeholder="Add total Reactions here..."
          id="reactions"
          ref={reactionsELement}
        />
      </div>

      {/* tags  */}

      <div class="mb-3">
        <label for="tags" class="form-label">
          Add Tags
        </label>
        <input
          type="text"
          class="form-control"
          placeholder="Add tags here..."
          id="tags"
          ref={tagsELement}
        />
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
export default CreatePost;
