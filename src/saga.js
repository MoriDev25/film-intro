import {
    all
  } from "redux-saga/effects";
  import watchHomeSaga from "./container/Home/saga";
  import watchDetailSaga from "./container/Detail/saga";
  import watchMenuDetailSaga from "./container/MenuDetail/saga";
  
  function* watchAll() {
    yield all([watchHomeSaga(), watchDetailSaga(), watchMenuDetailSaga()]);
  }
  
  export default watchAll;
  