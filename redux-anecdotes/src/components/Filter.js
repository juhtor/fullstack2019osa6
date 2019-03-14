import React from 'react'
import { newFilter } from '../reducers/filterReducer'
import { connect } from 'react-redux'

const Filter = (props) => {
  const handleChange = (event) => {
    console.log('filter', event.target.value)
    props.newFilter(event.target.value)

  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  }
}
const mapDispatchToProps = {
  newFilter,
}
const ConnectedFilter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter)


export default ConnectedFilter