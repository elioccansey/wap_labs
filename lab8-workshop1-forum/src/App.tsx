import './App.scss'
import avatar from './images/bozai.png'
import {initilaComments, user, tabs as initialTab} from './data/initial-data'
import { useRef, useState } from 'react'
import { ChatComment, SortTabItem } from './types'



const App = () => {
  const [comments, setComments] = useState<ChatComment[]>(initilaComments)
  const [tabs, setTab] = useState(initialTab)
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const commentRef = useRef<HTMLTextAreaElement>(null)

  const handleAddNewComment = (commentContent:string)=> {
    let newComment:ChatComment= {
      content:commentContent,
      ctime:new Date().toUTCString(),
      like:0,
      rpid:comments.length+1,
      user:user
    }
    setComments([...comments, newComment ])
  }

  const handleDeleteCommentById = (commentId:number)=> setComments(comments.filter(c => c.rpid !== commentId))

  const handleSort = (sortTab:SortTabItem)=> {
    // let sortBy;
    // if(sortTab.text === 'Top'){
    //   sortBy = 'ctime'
    //   sortBy = 'like'
    // }

  }

  return (
    <div className="app">
      {/* Nav Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">Comments</span>
            {/* Like */}
            <span className="total-reply">{comments.length}</span>
          </li>
          <li className="nav-sort">
            {/* highlight class name： active */}
            {tabs.map( (tab, ind) => (
              <span 
              key={ind} 
              className={`nav-item ${activeTab.text === tab.text ? "active" : " "}`} 
              onClick={()=> {
                setActiveTab(tab)
                handleSort(tab)
              }}
              >{tab.text}</span>))}
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* comments */}
        <div className="box-normal">
          {/* current logged in user profile */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="Profile" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* comment */}
            <textarea ref={commentRef}
              className="reply-box-textarea"
              placeholder="tell something..."
            />
            {/* post button */}
            <div className="reply-box-send">
              <div className="send-text" onClick={()=>{
                commentRef.current?.value && handleAddNewComment(commentRef.current?.value)
              }}>post</div>
            </div>
          </div>
        </div>
        {/* comment list */}
        <div className="reply-list">
          {/* comment item */}


          {
            comments.map(comment => {
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
                      comment.user.uid === user.uid ? <span className="delete-btn" onClick={()=>handleDeleteCommentById(comment.rpid)}>
                      Delete
                    </span> : null
                    }


                  </div>
                </div>
              </div>
            </div>

            })
          }

          


        </div>
      </div>
    </div>
  )
}

export default App