import { configureStore } from "@reduxjs/toolkit";
import { AuthReducers } from "./authReducers";
import { ErrorReducers } from "./errorReducers";

import ItemReducers from "./ItemReducers";




// export default combineReducers({
//    item: ItemReducers
// })
export default configureStore({
   reducer: {
      item: ItemReducers,
      auth: AuthReducers,
      error: ErrorReducers
   },
})