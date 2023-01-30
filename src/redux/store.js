import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './reducers/usersSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' //
import rootReducer from './rootReducer'

 

const persistConfig = {
    key: 'root',
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer
})

export default store
// The store now has redux-thunk added and the Redux DevTools Extension is turned on