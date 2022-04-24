import React from 'react'

const PostCard = ({post}) => {
  console.log('pooooosts', post.node.title)
  return (
    <div>
        {post.title}
        {post.excerpt}
    </div>
  )
}

export default PostCard