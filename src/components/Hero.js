import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class Hero extends Component {
	render() {

		const { hero, toggleHero, deleteHero, selectedHero } = this.props

		return (
		  <li 
		  className={classnames({
	        selected: hero.id === selectedHero
			})} 
		  onClick={ (e) => {e.stopPropagation();toggleHero(hero.id)}}>
		    <span className="badge">{hero.id}</span> 
		    <span>{hero.name}</span>
		    <button className="btn btn-danger delete" onClick={(e) => {e.stopPropagation();deleteHero(hero.id)}}>×</button>
		  </li>
		)
	}
}

Hero.propTypes = {
	hero: PropTypes.object.isRequired,
	selectedHero: PropTypes.number.isRequired,
	toggleHero: PropTypes.func.isRequired,
	deleteHero: PropTypes.func.isRequired
}