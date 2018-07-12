const initialState = {
  coffee_pic: "",
  coffee_name: "",
  price: ""
};

const UPDATE_COFFEE = "UPDATE_COFFEE";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_COFFEE:
      return Object.assign({}, state, { coffee_pic: action.payload, coffee_name: action.payload, price: action.payload });

    default:
      return state;
  }
}

export function updateCoffee(coffee_pic, coffee_name, price) {
  //const { coffee_pic, coffee_name, price } = state;

  return {
    type: UPDATE_COFFEE,
    payload: {
      coffee_pic,
      coffee_name,
      price
    }
  };
}
