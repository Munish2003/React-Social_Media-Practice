function WelcomeMsg({ onButtonClick }) {
  return (
    <center className="welcome-msg">
      {" "}
      <h1>There are no posts</h1>{" "}
      <button type="button" class="btn btn-primary" onClick={onButtonClick}>
        Get Posts From Server
      </button>
    </center>
  );
}

export default WelcomeMsg;
