import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'

const AnecdoteList = () => {

  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    console.log('vote', anecdote.content)
    dispatch(voteAnecdote(anecdote.id))
    dispatch(notificationChange(`You voted: ${anecdote.content}`))
    setTimeout(() => {
      dispatch(notificationChange(''))
    }, 5000)
  }

    return (
        <div>
          {anecdotes.sort((a1, a2) => a2.votes - a1.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote)}>vote</button>
            </div>
          </div>
          )}
        </div>
    )
}

export default AnecdoteList