import React from 'react'
import { useParams } from 'react-router-dom'

export default function PostPage() {
    const {postId} = useParams
  return (
    <div>
        <h1>{postId}</h1>
    </div>
  )
}
