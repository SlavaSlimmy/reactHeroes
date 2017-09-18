import omit from 'lodash/omit';
import assign from 'lodash/assign';
import mapValues from 'lodash/mapValues';
import { TOGGLE_HERO, DELETE_HERO, ADD_HERO, EDIT_HERO } from '../constants/ActionTypes'

const initialHeroes = {
  allIds: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  byId: {
    11: {id: 11, name: 'Mr. Nice'},
    12: {id: 12, name: 'Narco'},
    13: {id: 13, name: 'Bombasto'},
    14: {id: 14, name: 'Celeritas'},
    15: {id: 15, name: 'Magneta'},
    16: {id: 16, name: 'RubberMan'},
    17: {id: 17, name: 'Dynama'},
    18: {id: 18, name: 'Dr IQ'},
    19: {id: 19, name: 'Magma'},
    20: {id: 20, name: 'Tornado'}
  },
  selectedHero: 0
}

export default function heroes(state  = initialHeroes, action) {
  switch (action.type) {
    case TOGGLE_HERO:
      return {
        ...state,
        selectedHero: action.id
      }
    case DELETE_HERO:
      return {
        ...state,
        allIds: state.allIds.filter(id => id !== action.id),
        byId: omit(state.byId, action.id),
        selectedHero: (state.selectedHero === action.id)? 0: state.selectedHero
      }
    case ADD_HERO:
      const newId = state.allIds.reduce((maxId, id) => Math.max(id, maxId), -1) + 1;
      return {
        ...state,
        allIds: state.allIds.concat(newId),
        byId: {
          ...state.byId,
          [newId]: {
            id: newId,
            name: action.name
          }
        }
      }
    case EDIT_HERO:
      return {
        ...state,
        byId: mapValues(state.byId, (hero) => {
          return hero.id === action.id ?
            assign({}, hero, { name: action.name }) :
            hero
        })
      }   
    default:
      return state
  }
}