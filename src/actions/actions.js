export const select = (car) => {
  alert(`Now car is ${car.car}`);
  return{
    type:"CAR_SELECTED",
    payload: car
  }
}