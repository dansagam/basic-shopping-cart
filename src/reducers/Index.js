import { configureStore } from "@reduxjs/toolkit";

import ItemReducers from "./ItemReducers";

// export default combineReducers({
//    item: ItemReducers
// })
export default configureStore({
   reducer: {
      item: ItemReducers,

   },
})