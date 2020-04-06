import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import personajes from './reducers/PersonajesReducer'
import peliculas from './reducers/PeliculasReducer'
import sections from './reducers/SectionsReducer'


const reducerPrincipal = combineReducers({

personajes,
peliculas,
sections

})

const store = createStore(reducerPrincipal,applyMiddleware(thunk))

export default store