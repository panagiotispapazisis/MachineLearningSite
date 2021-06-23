const authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return state;
    }
    case 'REGISTER': {
      return state;
    }
    case 'FORGOT': {
      return state;
    }
    case 'LOG_OUT': {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
