import React from 'react';
import { setSelectedSeats, setNumberOfSeats, toggleSideBySide, toggleNextButtonState } from './chooseSeatsSlice';
import { chooseSeatsButton, container, label, textInput } from './chooseSeatsStyle';


export const ChooseSeats = (props) => {
    const { dispatch, state } = props;

    const seatsChooser = () => {
        let selectedSeats = null;
        let numberOfSeats = state.chooseSeats.numberOfSeats;
        if (state.chooseSeats.isSideBySide) {
            for (let i = 0; i < state.cinemaHall.allSeats.length; i++) {
                for (let j = 0; j < state.cinemaHall.allSeats.length; j++) {
                    if (state.cinemaHall.allSeats[i].reserved) {
                        break;
                    }
                    else if (selectedSeats === null) {
                        selectedSeats = [state.cinemaHall.allSeats[i]]
                    }
                    else if (state.cinemaHall.allSeats[j].cords.y - 1 === selectedSeats[selectedSeats.length - 1].cords.y
                        && state.cinemaHall.allSeats[j].cords.x === selectedSeats[selectedSeats.length - 1].cords.x && !state.cinemaHall.allSeats[j].reserved) {
                        selectedSeats.push(state.cinemaHall.allSeats[j]);
                    }
                    if (selectedSeats.length === numberOfSeats) {
                        dispatch(setSelectedSeats(selectedSeats));
                        return;
                    }
                }
                selectedSeats = null;
            }
        }
        else {
            for (let i = 0; i < state.cinemaHall.allSeats.length; i++) {
                if (!state.cinemaHall.allSeats[i].reserved) {
                    if (selectedSeats === null) {
                        selectedSeats = [state.cinemaHall.allSeats[i]]
                    } else {
                        selectedSeats.push(state.cinemaHall.allSeats[i]);
                    }
                }
                if (selectedSeats.length === numberOfSeats) {
                    dispatch(setSelectedSeats(selectedSeats));
                    return;
                }
            }
        }
    }

    const amountSeatsChangeHandler = (e) => {
        const userInput = e.target.value;
        if (userInput < 0 || userInput > 10) {
            alert("Nieprawidłowa liczba miejsc");
            e.target.value = 1;
        }
        else {
            dispatch(setNumberOfSeats(userInput));
        }
    }
    const toggleSideBySideHandler = (e) => {
        const userInput = e.target.checked;
        dispatch(toggleSideBySide());
    }
    const toggleNextButtonStateHandler = (e) => {
        seatsChooser();
        dispatch(toggleNextButtonState());

    }

    return (
        <div className='container' style={container}>
            <p>
                <label className='label' style={label}>Liczba miejsc: </label>
                <input
                    className='textInput'
                    id="numberOfSeats"
                    type="number"
                    min="1"
                    max="10"
                    onChange={amountSeatsChangeHandler}
                    placeholder="Wpisz liczbę miejsc"
                    style={textInput} />
            </p>
            <p>
                <label style={label}>Czy miejsca mają być obok siebie?</label>
                <input
                    className='checkboxInput'
                    id="checkboxSideBySide"
                    type="checkbox"
                    onChange={toggleSideBySideHandler}
                ></input></p>
            <div className='chooseSeatsButton' onClick={toggleNextButtonStateHandler} style={chooseSeatsButton}>Wybierz miejsca</div>
        </div>
    );
}