import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as HeroesActions  from '../actions'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'

import HeroesList from '../components/HeroesList'
import SelectedHero from '../components/SelectedHero'


class MyHeroesList extends Component {

  constructor(props) {
    super(props)
    this.handleClickSelected = this.handleClickSelected.bind(this)
  }

  handleClickSelected() {
    this.props.dispatch(push('/heroes/edit'));
  }  

  render() {
    const { heroes , actions } = this.props
    const selectedHero = (heroes.byId[heroes.selectedHero])? heroes.byId[heroes.selectedHero]: null
    return (
      <div>
        {heroes.allIds.length > 0 &&
          <div>
            <HeroesList 
            heroes={heroes} actions={actions}
             />
            <SelectedHero hero={selectedHero} onClick={this.handleClickSelected} />
          </div>

        }
      </div>
    )
  }  
}

MyHeroesList.propTypes = {
  heroes: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}


function mapStateToProps(state) {
  return {
    heroes: state.heroes
  }
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(HeroesActions, dispatch),
    dispatch: dispatch
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyHeroesList)