import { ChooseSeats } from './features/chooseSeats/chooseSeats'
import { CinemaHall } from './features/cinemaHall/cinemaHall'
import { Confirmation } from './features/confirmation/confirmation';
function App(props) {
  const { state, dispatch } = props;
  if (state.chooseSeats.isNextButtonPressed && !state.cinemaHall.isBookButtonPressed) {
    return (
      <CinemaHall
        dispatch={dispatch}
        state={state}
      />);
  }
  else if (state.chooseSeats.isNextButtonPressed && state.cinemaHall.isBookButtonPressed) {
    return (
      <Confirmation
        state={state}
      />);
  }
  else {
    return (
      <ChooseSeats
        dispatch={dispatch}
        state={state}
      />);
  }

}
export default App;