import React from 'react';
import { addSelectedSeat, removeSelectedSeat } from '../chooseSeats/chooseSeatsSlice';
import { toggleBookButtonState } from './cinemaHallSlice';
import { ChairElement } from './chairElement/chairElement';
import { styleHallContainer, styleDocument, styleBookButton } from './cinemaHallStyle'
export const CinemaHall = (props) => {
    const { dispatch, state } = props;
    const chairElements = [];

    const toogleChoosenSeatHandler = (e) => {
        const seatId = e.target.id;
        for (let i = 0; i < state.chooseSeats.selectedSeats.length; i++) {
            if (seatId === state.chooseSeats.selectedSeats[i].id) {
                dispatch(removeSelectedSeat(seatId));
                return;
            }
        }
        for (let i = 0; i < state.cinemaHall.allSeats.length; i++) {
            if (seatId === state.cinemaHall.allSeats[i].id) {
                dispatch(addSelectedSeat(state.cinemaHall.allSeats[i]))
            }
        }
    }
    const bookButtonHandler = () => {
        dispatch(toggleBookButtonState())
    }
    for (let i = 0; i < state.cinemaHall.allSeats.length; i++) {
        chairElements.push(<ChairElement
            id={state.cinemaHall.allSeats[i].id}
            onClick={toogleChoosenSeatHandler}
            state={state}
        />)
    }

    return (
        <div className='document' style={styleDocument}>
            <div className='hallContainer' style={styleHallContainer}>
                {chairElements}
            </div>
            <div className='bookButton' onClick={bookButtonHandler} style={styleBookButton}>Rezerwuj</div>
        </div>
    )
}