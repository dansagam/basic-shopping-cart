import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/ItemReducers'


// const initialState = {
// ///dsdksdsdksdkds
// }
// const middleware = [thunk];
export default configureStore({
   reducer: {
      item: rootReducer,
   },
})

// const store = createStore(
//    rootReducer, 
//    initialState, 
//    compose(
//       applyMiddleware(...middleware),
//       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//    )
// )


// export default store;