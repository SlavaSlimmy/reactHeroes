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
			<div>
			    <h1>Tour of Heroes</h1>
			    <nav>
			      <button onClick={() => this.handleClick('/')}>Dashboard</button>
			      <button onClick={() => this.handleClick('/heroes')}>Heroes</button>
			    </nav>
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