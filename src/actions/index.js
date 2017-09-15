import * as types from '../constants/ActionTypes'

export const toggleHero = id => ({ type: types.TOGGLE_HERO, id })
export const deleteHero = id => ({ type: types.DELETE_HERO, id })
export const addHero = name => ({ type: types.ADD_HERO, name })
export const editHero = (id, name) => ({ type: types.EDIT_HERO, id, name })
