// import appReducers from './reducers/index';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './main/modules/authentication/store/slice';
import dashboardReducer from './main/modules/dashboard/store/dashboard.reducer';

export default configureStore({
  reducer: {
    dashboard: dashboardReducer,
    auth: authReducer,
  },
})
