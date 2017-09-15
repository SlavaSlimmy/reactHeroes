import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SelectedHero extends Component {
	render() {
		const { hero, onClick } = this.props

		return (
			<div>
	        {hero &&
				<div>
				    <h2>{hero.name} is my hero</h2>
				    <button onClick={onClick}>View Details</button>
			    </div>
	        }
	        </div>			
		)
	}
}

SelectedHero.propTypes = {
	hero: PropTypes.object,
	onClick: PropTypes.func.isRequired
}