import { combineReducers } from "redux";
import ItemReducers from "./ItemReducers";

export default combineReducers({
   item: ItemReducers
})