import React from 'react';
export const ChairElement = (props) => {
    const { id, onClick, state } = props;
    const color = () => {
        if (findSeat(id).reserved) {
            return '#474747'
        }
        else if (!findSeat(id).reserved && findSeat(id).choosen) {
            return '#FF8A05'
        }
        else if (!findSeat(id).reserved && !findSeat(id).choosen) {
            return 'white'
        }
    }
    const findSeat = (seatId) => {
        for (let i = 0; i < state.cinemaHall.allSeats.length; i++) {
            if (seatId === state.cinemaHall.allSeats[i].id) {
                for (let j = 0; j < state.chooseSeats.selectedSeats.length; j++) {
                    if (seatId === state.chooseSeats.selectedSeats[j].id) {
                        return { ...state.cinemaHall.allSeats[i], choosen: true };
                    }
                }
                return { ...state.cinemaHall.allSeats[i], choosen: false }
            }
        }
    }
    const style = {
        margin: '4px',
        border: '2px solid black',
        gridRowStart: findSeat(id).cords.x + 1,
        gridRowEnd: findSeat(id).cords.x + 2,
        gridColumnStart: findSeat(id).cords.y + 1,
        gridColumnEnd: findSeat(id).cords.y + 2,
        backgroundColor: color(),
        cursor: 'pointer',
    }
    return <div
        id={id}
        style={style}
        onClick={onClick}
    >{`[${findSeat(id).cords.x}, ${findSeat(id).cords.y}]`}</div>
}