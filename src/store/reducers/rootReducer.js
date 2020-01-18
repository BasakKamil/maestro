import authReducer from './authReducer';
import projectReducer from './projectReducer';
import cartReducers from './cartReducers';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';



const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    cart: cartReducers

});

export default rootReducer