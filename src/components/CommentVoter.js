import React from 'react'

const CommentVoter = ({ id, votes, commentVote }) => {


  const voteUp = () => commentVote(id, 'up');

  const voteDown = () => commentVote(id, 'down');

  return (
    <div className="likes">
      <p> <i onClick={voteUp}><i className="far fa-thumbs-up"></i></i> {votes} <i onClick={voteDown}><i className="far fa-thumbs-down"></i></i></p>
    </div>

  )
}

export default CommentVoter