import React from "react";
import './post.css';
import { FcApproval } from "react-icons/fc";
import { FcComments } from "react-icons/fc";
import { FcDownload } from "react-icons/fc";
import { FcShare } from "react-icons/fc";
import { FcLike } from 'react-icons/fc';
import { FcExpand } from 'react-icons/fc';


const Post = ({author, photo, nickname, text, ava, date}) => {
  
  const [comments, setComments] = React.useState(32);
  const [commentsChange, setCommentsChange] = React.useState(false);
  const commentAction = () => {
    if (commentsChange === false) {
      setComments(comments + 1);
      setCommentsChange(true); 
    } else {
      setComments(comments - 1);
      setCommentsChange(false); 
   }
  }

  const [reposts, setReposts] = React.useState(15);
  const [repostsChange, setRepostsChange] = React.useState(false);
  const repostAction = () => {
    if (repostsChange === false) {
      setReposts(reposts + 1);
      setRepostsChange(true); 
    } else {
      setReposts(reposts - 1);
      setRepostsChange(false); 
    }
  }

  const [likes, setLikes] = React.useState(56);
  const [likesChange, setLikesChange] = React.useState(false);
  const likeAction = () => {
    if (likesChange === false) {
      setLikes(likes + 1);
      setLikesChange(true); 
    } else {
      setLikes(likes - 1);
      setLikesChange(false); 
    }
  }

  return (
    <div className="container">
      <div className="content">
        <div className="content__info">
          <div className="content__info-img">
            <img className="info-img" src={ava} alt="profile pic"/>
          </div>
          <div className="content__info-top">
            <div className="name">
              <div className="real-name">
                {author} 
              </div>
              <div className="square">
                <FcApproval />
              </div>
              <div className="nickname">
                {nickname} &#149; {date}
              </div>
              <div className="arrow">
                <FcExpand />
              </div>
            </div>
              <div className="text">{text}</div>
                <div className="photo">
                  <img className="photo__img" src={photo} alt="Content_pic"/>
                </div>
                <div className="icons">
                  <div className="comments">
                     <a onClick={commentAction}><FcComments /></a><span className="comment">{comments}</span>
                  </div>
                  <div className="reposts">
                    <a onClick={repostAction}><FcShare /></a><span className="repost">{reposts}</span>
                  </div>
                  <div className="likes">
                    <a onClick={likeAction}><FcLike/></a><span className="like">{likes}</span>
                  </div>
                  <div className="download">
                    <FcDownload/>
                  </div>
                 </div>
                </div>
            </div>
      </div>
    </div>
  )
}

  export default Post;