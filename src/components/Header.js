import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import PropTypes from 'prop-types'

class Header extends Component {

  handleClick(page) {
    if(this.props.location && this.props.location.pathname !== page) {
    	this.props.dispatch(push(page));
    }
  }

	render() {
		return (
			<div className="header">
			    <h1>Tour of Heroes</h1>
			    <div className="btn-group">
			      <button className="btn btn-lg btn-width150 btn-primary" onClick={() => this.handleClick('/')}>Dashboard</button>
			      <button className="btn btn-lg btn-width150 btn-primary" onClick={() => this.handleClick('/heroes')}>Heroes</button>
			    </div>
		    </div>
		)
	}
}


Header.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
	const { router } = state
	return {
		location:router.location
	}
}

export default connect(mapStateToProps)(Header)