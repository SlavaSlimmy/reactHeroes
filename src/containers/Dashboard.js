import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleHero }  from '../actions'
import { push } from 'react-router-redux'

class Dashboard extends Component {

  handleClick(id, e) {
  	console.log(id);
  	this.props.dispatch(toggleHero(id))
    this.props.dispatch(push('/heroes/edit'));
  } 

	render() {
		const { heroes } = this.props
		return (
		  <div>
		    <h3>Top Heroes</h3>
		    <div className="grid grid-pad">
		          {heroes.allIds.map(id =>
					<button key={id} className="col-1-4" onClick={(e)=>this.handleClick(id, e)}>
					    <div className="module hero">
					      <h4 >{heroes.byId[id].name}</h4>
					    </div>
				  	</button>
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