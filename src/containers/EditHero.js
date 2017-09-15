import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { editHero }  from '../actions'
import { push, goBack } from 'react-router-redux'

class EditHero extends Component {
  constructor(props) {
    super(props)
    this.handleBack = this.handleBack.bind(this)
  }  

  handleBack(e) {
    e.preventDefault()
    this.props.dispatch(goBack())
  }  

  render() {
    let input
    const { heroes, editHero, dispatch } = this.props
    const selectedHero = (heroes.byId[heroes.selectedHero])? heroes.byId[heroes.selectedHero]: null
    return (
      <div>
        {selectedHero &&
          <div>
            <h2>{selectedHero.name} details</h2>
            <form onSubmit={e => {
              e.preventDefault()
              if (!input.value.trim()) {
                return
              }
              dispatch(editHero(selectedHero.id, input.value))
              dispatch(push('/heroes'))
            }}>
              <div>
                <label>ID:</label>
                <span>{selectedHero.id}</span>
              </div>            
              <div>
                <label>Name:</label>
                <input defaultValue={selectedHero.name} ref={node => { input = node }} />
              </div>
              <nav>
                <button onClick={this.handleBack}>Back</button>
                <button type="submit">Save</button>
              </nav>
            </form>
          </div>
        }      
      </div>
    )
  }  
}

EditHero.propTypes = {
  heroes: PropTypes.object.isRequired,
  editHero: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    heroes: state.heroes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    editHero: editHero,
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditHero)