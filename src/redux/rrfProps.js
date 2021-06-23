import firebase from 'src/firebase/firebase';
import store from 'src/redux/store';
import { createFirestoreInstance } from 'redux-firestore';

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export default rrfProps;
