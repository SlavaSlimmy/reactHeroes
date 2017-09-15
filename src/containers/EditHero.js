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
      <div className="edit-hero">
        {selectedHero &&
          <div className="row">
            <h2>{selectedHero.name} details</h2>
            <form className="form-horizontal" onSubmit={e => {
              e.preventDefault()
              if (!input.value.trim()) {
                return
              }
              dispatch(editHero(selectedHero.id, input.value))
              dispatch(push('/heroes'))
            }}>
              <div className="form-group form-group-lg">
                <label className="col-sm-2 control-label">ID:</label>
                <div className="col-sm-10">
                  <p className="form-control-static">{selectedHero.id}</p>
                </div>                
              </div>            
              <div className="form-group form-group-lg">
                <label className="col-sm-2 control-label">Name:</label>
                <div className="col-sm-10">
                  <input className="form-control" defaultValue={selectedHero.name} ref={node => { input = node }} />
                </div>
              </div>
              <div className="edit-hero__btns">
                <button className="btn btn-lg btn-info" onClick={this.handleBack}>Back</button> 
                <button className="btn btn-lg btn-info" type="submit">Save</button>
              </div>
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