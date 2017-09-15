import React, { Component } from 'react'
import { Provider } from 'react-redux'
import rootReducer from '../reducers'

import { createStore, applyMiddleware } from 'redux'
import { Route, Switch, Redirect } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware, ConnectedRouter } from 'react-router-redux'


import { createLogger } from 'redux-logger'

import Header from '../components/Header'
import Dashboard from './Dashboard'
import MyHeroesList from './MyHeroesList'
import EditHero from './EditHero'

const history = createHistory() 
const middleware = routerMiddleware(history)

const loggerMiddleware = createLogger()

const store = createStore(
    rootReducer,
    applyMiddleware(
      loggerMiddleware,
      middleware 
    )
  )

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
      	<div> 
		    <Header />
		    <ConnectedRouter history={history}>
		      <Switch>
			      <Route exact path='/' component={Dashboard}/>
			      <Route path='/dashboard' component={Dashboard}/>
			      <Route exact path='/heroes' component={MyHeroesList}/>
            <Route path='/heroes/edit' component={EditHero}/>
			      <Redirect path="*" to="/" />
		      </Switch>
		    </ConnectedRouter>	
	    </div>
      </Provider>
    )
  }
}