import React from 'react'
import { connect } from 'react-redux' 
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {

  const vote = (anecdote) => {
    props.voteAnecdote(anecdote)
    props.notificationChange(`You voted: ${anecdote.content}`)  
  }

    return (
      <ul>
      {props.anecdotes.sort((a1, a2) => a2.votes - a1.votes).map(anecdote =>
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
    </ul>
    )
}

const mapStateToProps =(state) => {
  if (state.filter === '') {
    return {
      anecdotes: state.anecdotes
    }
  }
  return{
     anecdotes: state.anecdotes.filter(a => a.content.toLowerCase().includes(state.filter.toLowerCase()))
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  notificationChange
}

const ConnectedAnecdotes = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdotes