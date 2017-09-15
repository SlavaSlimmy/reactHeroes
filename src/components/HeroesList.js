import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Hero from './Hero'

import './heroes.css';

export default class HeroesList extends Component {
	render() {
		const { heroes, actions } = this.props
		return (
			<div>
				<h2>My Heroes</h2>
				<ul className="heroes">
		          {heroes.allIds.map(id =>
		            	<Hero key={id} hero={heroes.byId[id]} {...actions} selectedHero={heroes.selectedHero} />
					)}
				</ul>				
			</div>			
		)
	}
}

HeroesList.propTypes = {
  heroes: PropTypes.object.isRequired,	
  actions: PropTypes.object.isRequired
}