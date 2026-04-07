import { createContext, useContext, useState } from 'react'

const PostContext = createContext(null)

export function PostProvider({ children, initialPosts }) {
  const [postsData, setPostsData] = useState(
    initialPosts.map(post => ({
      ...post,
      likes: 24,
      shares: 3,
      comments: [
        {
          id: 1,
          author: 'Alice',
          avatar: 'https://www.w3schools.com/w3images/avatar5.png',
          text: '¡Excelente publicación!',
          replies: []
        }
      ]
    }))
  )

  const addComment = (postId, commentObj) => {
    setPostsData(prev =>
      prev.map(p =>
        p.id === postId ? { ...p, comments: [...p.comments, commentObj] } : p
      )
    )
  }

  const incrementShares = (postId) => {
    setPostsData(prev =>
      prev.map(p =>
        p.id === postId ? { ...p, shares: p.shares + 1 } : p
      )
    )
  }

  return (
    <PostContext.Provider value={{ postsData, addComment, incrementShares }}>
      {children}
    </PostContext.Provider>
  )
}

export function usePostContext() {
  return useContext(PostContext)
}
