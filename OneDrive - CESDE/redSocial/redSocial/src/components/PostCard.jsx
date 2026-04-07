import { useState, useEffect } from 'react'
import { usePostContext } from '../context/PostContext'

function PostCard({ postId, author, avatar, time, content, images, extraContent }) {
  const { postsData, addComment, incrementShares } = usePostContext()
  const postData = postsData.find(p => p.id === postId)

  const [liked, setLiked] = useState(false)
  const [likesCount, setLikesCount] = useState(0)
  const [showComments, setShowComments] = useState(false)
  const [newComment, setNewComment] = useState('')
  const [localComments, setLocalComments] = useState([])
  const [replyingTo, setReplyingTo] = useState(null)
  const [replyText, setReplyText] = useState('')
  const [shared, setShared] = useState(false)

  useEffect(() => {
    if (postData) {
      setLikesCount(postData.likes)
      setLocalComments(postData.comments)
    }
  }, [postId])

  const handleLike = () => {
    if (liked) {
      setLiked(false)
      setLikesCount(c => c - 1)
    } else {
      setLiked(true)
      setLikesCount(c => c + 1)
    }
  }

  const handleCommentSubmit = () => {
    if (!newComment.trim()) return
    const commentObj = {
      id: Date.now(),
      author: 'Tú',
      avatar: 'https://www.w3schools.com/w3images/avatar2.png',
      text: newComment.trim(),
      replies: []
    }
    setLocalComments(prev => [...prev, commentObj])
    addComment(postId, commentObj)
    setNewComment('')
  }

  const handleReplySubmit = (commentId) => {
    if (!replyText.trim()) return
    const replyObj = {
      id: Date.now(),
      author: 'Tú',
      avatar: 'https://www.w3schools.com/w3images/avatar2.png',
      text: replyText.trim()
    }
    setLocalComments(prev =>
      prev.map(c =>
        c.id === commentId
          ? { ...c, replies: [...(c.replies || []), replyObj] }
          : c
      )
    )
    setReplyingTo(null)
    setReplyText('')
  }

  const handleShare = () => {
    if (!shared) {
      setShared(true)
      incrementShares(postId)
    }
  }

  const reactionsText = liked
    ? likesCount > 1 ? `Tú y ${likesCount - 1} personas más` : 'Te gusta esto'
    : `${likesCount} Me gusta`

  return (
    <div className="w3-card w3-white w3-round w3-margin-bottom" style={{ marginBottom: 16 }}>

      {/* Header */}
      <div className="w3-container w3-padding" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <img
          src={avatar}
          alt={author}
          className="w3-circle"
          style={{ width: 50, height: 50, objectFit: 'cover', flexShrink: 0 }}
        />
        <div style={{ flex: 1 }}>
          <strong style={{ fontSize: 15 }}>{author}</strong>
          <br />
          <small className="w3-text-grey">
            {time} &nbsp;
            <i className="fa fa-globe" title="Público"></i>
          </small>
        </div>
        <button
          className="w3-button w3-white w3-text-grey w3-padding-small"
          style={{ borderRadius: 4 }}
        >
          <i className="fa fa-ellipsis-h"></i>
        </button>
      </div>

      {/* Content */}
      <div className="w3-container">
        <p style={{ margin: '4px 0 8px' }}>{content}</p>
      </div>

      {/* Images */}
      {images && images.length > 0 && (
        <div className="w3-row-padding w3-container">
          {images.map((img, index) => (
            <div key={index} className={images.length === 1 ? 'w3-col m12' : 'w3-half'}>
              <img
                src={img}
                style={{ width: '100%', display: 'block' }}
                className="w3-margin-bottom"
                alt=""
              />
            </div>
          ))}
        </div>
      )}

      {/* Extra content (link preview) */}
      {extraContent && (
        <div className="w3-container w3-light-grey w3-padding" style={{ margin: '0 16px 8px' }}>
          <p style={{ margin: 0, fontSize: 13 }}>{extraContent}</p>
        </div>
      )}

      {/* Reactions summary */}
      <div
        className="w3-container"
        style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 16px 4px' }}
      >
        <span className="w3-text-grey" style={{ fontSize: 13 }}>
          {likesCount > 0 && <span>👍 {reactionsText}</span>}
        </span>
        <span className="w3-text-grey" style={{ fontSize: 13 }}>
          {localComments.length > 0 && `${localComments.length} comentarios · `}
          {(postData?.shares ?? 0) + (shared ? 0 : 0)} compartidos
        </span>
      </div>

      {/* Divider */}
      <hr style={{ margin: '4px 16px', borderColor: '#ddd' }} />

      {/* Action buttons */}
      <div className="w3-row" style={{ padding: '0 8px' }}>
        <div className="w3-third">
          <button
            onClick={handleLike}
            className={`w3-button w3-block ${liked ? 'w3-text-blue' : 'w3-text-grey'}`}
            style={{ fontWeight: liked ? 'bold' : 'normal', padding: '8px 0' }}
          >
            <i className={`fa ${liked ? 'fa-thumbs-up' : 'fa-thumbs-o-up'}`}></i> Me gusta
          </button>
        </div>
        <div className="w3-third">
          <button
            onClick={() => setShowComments(v => !v)}
            className={`w3-button w3-block ${showComments ? 'w3-text-blue' : 'w3-text-grey'}`}
            style={{ padding: '8px 0' }}
          >
            <i className="fa fa-comment-o"></i> Comentar
          </button>
        </div>
        <div className="w3-third">
          <button
            onClick={handleShare}
            disabled={shared}
            className={`w3-button w3-block ${shared ? 'w3-text-blue' : 'w3-text-grey'}`}
            style={{ fontWeight: shared ? 'bold' : 'normal', padding: '8px 0' }}
          >
            <i className="fa fa-share"></i> {shared ? 'Compartido' : 'Compartir'}
          </button>
        </div>
      </div>

      {/* Comments section */}
      {showComments && (
        <div className="w3-container w3-light-grey" style={{ padding: '12px 16px' }}>

          {/* New comment input */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 12, alignItems: 'center' }}>
            <img
              src="https://www.w3schools.com/w3images/avatar2.png"
              className="w3-circle"
              style={{ width: 36, height: 36, flexShrink: 0 }}
              alt="Tú"
            />
            <input
              type="text"
              className="w3-input w3-border w3-round-large w3-white"
              placeholder="Escribe un comentario..."
              value={newComment}
              onChange={e => setNewComment(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleCommentSubmit()}
              style={{ fontSize: 14, padding: '6px 12px' }}
            />
          </div>

          {/* Comments list */}
          {localComments.map(comment => (
            <div key={comment.id} style={{ marginBottom: 10 }}>

              {/* Comment bubble */}
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <img
                  src={comment.avatar}
                  className="w3-circle"
                  style={{ width: 36, height: 36, flexShrink: 0 }}
                  alt={comment.author}
                />
                <div>
                  <div
                    className="w3-white w3-round"
                    style={{ display: 'inline-block', padding: '6px 12px', maxWidth: 320 }}
                  >
                    <strong style={{ fontSize: 13 }}>{comment.author}</strong>
                    <br />
                    <span style={{ fontSize: 14 }}>{comment.text}</span>
                  </div>
                  <br />
                  <small className="w3-text-grey" style={{ marginLeft: 4 }}>
                    <span
                      style={{ cursor: 'pointer', fontWeight: 'bold', marginRight: 10 }}
                    >
                      Me gusta
                    </span>
                    <span
                      style={{ cursor: 'pointer', fontWeight: 'bold' }}
                      onClick={() =>
                        setReplyingTo(replyingTo === comment.id ? null : comment.id)
                      }
                    >
                      Responder
                    </span>
                  </small>
                </div>
              </div>

              {/* Replies */}
              {comment.replies && comment.replies.map(reply => (
                <div
                  key={reply.id}
                  style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginTop: 6, marginLeft: 44 }}
                >
                  <img
                    src={reply.avatar}
                    className="w3-circle"
                    style={{ width: 30, height: 30, flexShrink: 0 }}
                    alt={reply.author}
                  />
                  <div
                    className="w3-white w3-round"
                    style={{ display: 'inline-block', padding: '6px 12px', maxWidth: 280 }}
                  >
                    <strong style={{ fontSize: 13 }}>{reply.author}</strong>
                    <br />
                    <span style={{ fontSize: 14 }}>{reply.text}</span>
                  </div>
                </div>
              ))}

              {/* Reply input */}
              {replyingTo === comment.id && (
                <div
                  style={{
                    display: 'flex',
                    gap: 8,
                    marginTop: 6,
                    marginLeft: 44,
                    alignItems: 'center'
                  }}
                >
                  <img
                    src="https://www.w3schools.com/w3images/avatar2.png"
                    className="w3-circle"
                    style={{ width: 30, height: 30, flexShrink: 0 }}
                    alt="Tú"
                  />
                  <input
                    type="text"
                    className="w3-input w3-border w3-round-large w3-white"
                    placeholder={`Responder a ${comment.author}...`}
                    value={replyText}
                    onChange={e => setReplyText(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleReplySubmit(comment.id)}
                    style={{ fontSize: 13, padding: '5px 10px' }}
                    autoFocus
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PostCard
