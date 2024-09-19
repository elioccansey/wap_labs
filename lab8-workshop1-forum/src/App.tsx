import './App.scss'
import avatar from './images/bozai.png'
import { initilaComments, user, tabs as initialTab } from './data/initial-data'
import { useEffect, useRef, useState } from 'react'
import { ChatCommentType, SortTabItem } from './types'
import useFetch from "./hooks/useFetch"
import ChatComment from './components/chat-comment'
import _ from 'lodash'

const DEFAULT_URL = "http://localhost:3004/comments"

const App = () => {
  const [comments, setComments] = useState<ChatCommentType[]>(initilaComments)
  const [tabs, setTab] = useState(initialTab)
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const [url, setUrl] = useState(DEFAULT_URL)
  const { isError, isLoading, isSuccess, data } = useFetch(url)

  useEffect(() => {
    if (isSuccess) setComments(data)
  }, [])

  const handleAddNewComment = (commentContent: string) => {
    if (commentRef.current) {
      let newComment: ChatCommentType = {
        content: commentContent,
        ctime: new Date().toUTCString(),
        like: 0,
        rpid: comments.length + 1,
        user: user
      }
      setComments([...comments, newComment])
      commentRef.current.value = ""
      commentRef.current.focus()

    }
  }

  const handleDeleteCommentById = (commentId: number) => setComments(comments.filter(c => c.rpid !== commentId))

  const sortedComments = _.orderBy(comments, [activeTab.type === "hot" ? "like" : "ctime"], ["desc"])


  return (
    <div className="app">
      {/* Nav Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">Comments</span>
            {/* Like */}
            <span className="total-reply">{sortedComments.length}</span>
          </li>
          <li className="nav-sort">
            {/* highlight class name： active */}
            {tabs.map((tab, ind) => (
              <span
                key={ind}
                className={`nav-item ${activeTab.text === tab.text ? "active" : " "}`}
                onClick={() => {
                  setActiveTab(tab)
                }}
              >{tab.text}</span>))}
          </li>
        </ul>
      </div>

      {isError && <p>Something went wrong!</p>}
      {isLoading && <p>Loading...</p>}
      {
        !isLoading && data.length > 0 &&
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
              <div className="reply-box-send" onClick={() => {
                commentRef.current?.value && handleAddNewComment(commentRef.current?.value);
              }}>
                <div className="send-text">post</div>
              </div>
            </div>
          </div>
          {/* comment list */}
          <div className="reply-list">
            {/* comment item */}

            {
              sortedComments.map(comment => (
                <ChatComment comment={comment} handleDeleteCommentById={handleDeleteCommentById} user={user} key={comment.rpid} />)
              )
            }


          </div>
        </div>
      }

    </div>
  )
}

export default App