import { ChatCommentType, User } from "../types";


type ChatCommentProps = {
  comment: ChatCommentType;
  user: User;
  handleDeleteCommentById: (id: number) => void;
}

const ChatComment = ({ comment, user, handleDeleteCommentById }: ChatCommentProps) => {
  return <div key={comment.rpid} className="reply-item">
    {/* profile */}
    <div className="root-reply-avatar">
      <div className="bili-avatar">
        <img
          className="bili-avatar-img"
          alt=""
        />
      </div>
    </div>
    <div className="content-wrap">
      {/* username */}
      <div className="user-info">
        <div className="user-name"> {comment.user.uname} </div>
      </div>
      {/* comment content */}
      <div className="root-reply">
        <span className="reply-content"> {comment.content} </span>
        <div className="reply-info">
          {/* comment created time */}
          <span className="reply-time">{comment.ctime}</span>
          {/* total likes */}
          <span className="reply-time">Like:{comment.like}</span>

          {
            comment.user.uid === user.uid ? <span className="delete-btn" onClick={() => handleDeleteCommentById(comment.rpid)}>
              Delete
            </span> : null
          }


        </div>
      </div>
    </div>
  </div>
}


export default ChatComment;