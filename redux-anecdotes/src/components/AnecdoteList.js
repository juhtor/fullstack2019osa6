import React from 'react';
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {
  // const anecdotes = props.store.getState().anecdotes
  // const filter = props.store.getState().filter
  const vote = (anecdote) => {
    return () => {
      // props.store.dispatch(voteAnecdote(id))
      // props.store.dispatch(showNotification('you voted ' + content))
      props.voteAnecdote(anecdote)
      props.setNotification('you voted ' + anecdote.content, 5)
    }
  }
  return (
    <div>
      {props.visibleAnecdotes
        // .filter(anecdote => anecdote.content.indexOf(props.filter) > -1)
        .map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={vote(anecdote)}>vote</button>
            </div>
          </div>
        )}

    </div>
  )
}

const anecdotesToShow = ({ anecdotes, filter }) => {
  console.log('anecdotes to show', anecdotes)
  return anecdotes.filter(anecdote => anecdote.content.indexOf(filter) > -1)
}

const mapStateToProps = (state) => {
  return {
    visibleAnecdotes: anecdotesToShow(state)
  }
}
const mapDispatchToProps = {
  setNotification,
  voteAnecdote,
}
const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AnecdoteList)


export default ConnectedAnecdoteList