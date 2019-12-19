const INITIAL_STATE = [];

const cart = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];
    default:
      return state;
  }
};

export default cart;
