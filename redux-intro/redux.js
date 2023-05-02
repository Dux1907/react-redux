const NewBooking = (name, amount) => {
  return {
    type: "NEW_BOOKING",
    payload: {
      name,
      amount,
    },
  };
};

const CancelBooking = (name, refund) => {
  return {
    type: "CANCEL_BOOKING",
    payload: {
      name,
      refund,
    },
  };
};

const reservationHistory = (oldList = [], action) => {
  if (action.type == "NEW_BOOKING") return [...oldList, action.payload];
  else if (action.type == "CANCEL_BOOKING") {
    return oldList.filter((user) => {
      return user.name !== action.payload.name;
    });
  } else return oldList;
};

const cancellationList = (oldList = [], action) => {
  if (action.type == "CANCEL_BOOKING") {
    return [...oldList, action.payload];
  }
  return oldList;
};

const accounting = (money = 0, action) => {
  if (action.type == "NEW_BOOKING") return (money += action.payload.amount);
  else if (action.type == "CANCEL_BOOKING") {
    return (money -= action.payload.refund);
  } else return money;
};

//console.log(Redux);

const centralStore = Redux.combineReducers({
  accounting: accounting,
  cancellationList: cancellationList,
  reservationHistory: reservationHistory,
});

const store = Redux.createStore(centralStore);
store.dispatch(NewBooking("kartik", 20));
store.dispatch(NewBooking("sankalp", 30));
store.dispatch(CancelBooking("sumit", 10));
store.dispatch(NewBooking("hritvik", 5));
store.dispatch(CancelBooking("kartik", 20));
console.log(store.getState());
