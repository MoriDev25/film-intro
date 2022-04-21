import { combineReducers } from "redux";
import HomeReducer from "./container/Home/reducer";
import DetailReducer from "./container/Detail/reducer";
import MenuDetailReducer from "./container/MenuDetail/reducer";

const rootReducer = combineReducers({
  HomeReducer: HomeReducer,
  DetailReducer: DetailReducer,
  MenuDetailReducer: MenuDetailReducer,
});

export default rootReducer;
