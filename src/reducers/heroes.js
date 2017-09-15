import omit from 'lodash/omit';
import assign from 'lodash/assign';
import mapValues from 'lodash/mapValues';
import { TOGGLE_HERO, DELETE_HERO, ADD_HERO, EDIT_HERO } from '../constants/ActionTypes'

const initialHeroes = {
  allIds: [11, 12, 13, 14],
  byId: {
    11: {id: 11, name: 'Mr. Nice'},
    12: {id: 12, name: 'Narco'},
    13: {id: 13, name: 'Bombasto'},
    14: {id: 14, name: 'Celeritas'}
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


// export default function heroes(state  = initialHEROES, action) {
//   switch (action.type) {
//     case TOGGLE_HERO:
//       return state.map(hero =>
//         hero.id === action.id ?
//           { ...hero, selected: true } :
//           { ...hero, selected: false }
// 		)
//     case DELETE_HERO:
// 		return state.filter(hero =>
// 		    hero.id !== action.id
// 		)
//     case ADD_HERO:
//       return [
//         ...state,
//         {
//           id: state.reduce((maxId, hero) => Math.max(hero.id, maxId), -1) + 1,
//           name: action.name,
//           selected: false
//         }
// 		]		
//     case EDIT_HERO:
//       return state.map(hero =>
//         hero.id === action.id ?
//           { ...hero, name: action.name } :
//           hero
//     )    
//     default:
//       return state
//   }
// }