import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleHero }  from '../actions'
import { push } from 'react-router-redux'

class Dashboard extends Component {

  handleClick(id, e) {
  	this.props.dispatch(toggleHero(id))
    this.props.dispatch(push('/heroes/edit'));
  } 

	render() {
		const { heroes } = this.props
		return (
		  <div className="dashboard">
		    <h2>Top Heroes</h2>
		    <div className="row">
		          {heroes.allIds.map(id =>
		          	<div className="col-md-3">
						<button className="btn btn-info" key={id} onClick={(e)=>this.handleClick(id, e)}>
						    <div className="module hero">
						      <h4 >{heroes.byId[id].name}</h4>
						    </div>
					  	</button>
				  	</div>
					)}		    
		    </div>
		  </div>
		)
	}
}

Dashboard.propTypes = {
  heroes: PropTypes.object.isRequired,
  toggleHero: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    heroes: state.heroes
  }
}

function mapDispatchToProps(dispatch) {
	return {
		toggleHero: toggleHero,
	    dispatch: dispatch
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)