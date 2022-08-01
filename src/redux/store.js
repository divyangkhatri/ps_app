import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import rootReducer from 'Redux/reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default createStore(persistedReducer, applyMiddleware(thunk));
