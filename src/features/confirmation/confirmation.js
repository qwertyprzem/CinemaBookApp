import React from "react";
import { styleConfirmationContainer, p, h1, h2, h3 } from './confirmationStyle'
export const Confirmation = (props) => {
    const { state } = props;

    const SeatsInfoElements = [];

    for (let i = 0; i < state.chooseSeats.selectedSeats.length; i++) {
        SeatsInfoElements.push(
            <p style={p}>
                {`- rząd x${state.chooseSeats.selectedSeats[i].cords.x}, miejsce y${state.chooseSeats.selectedSeats[i].cords.y} (id = ${state.chooseSeats.selectedSeats[i].id})`}
            </p>)
    }

    return (
        <div className='document'>
            <div className='confirmationContainer' style={styleConfirmationContainer}>
                <h1 style={h1}>Twoja rezerwacja przebiegła pomyślnie!</h1>
                <br /><br />
                <h2 style={h2}>Wybrałeś miejsca:</h2>
                <br />
                {SeatsInfoElements}
                <br /><br />
                <h3 style={h3}>Dziękujemy! W razie problemów prosimy o kontakt z działem administracji.</h3>
            </div>

        </div>
    )
}