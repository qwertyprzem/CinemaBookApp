const initialState = {
    allSeats: [],
    isBookButtonPressed: false
}
export const cinemaHallReducer = (cinemaHall = initialState, action) => {
    switch (action.type) {
        case 'cinemaHall/setAllSeats':
            return { ...cinemaHall, allSeats: action.payload };
        case 'cinemaHall/toggleBookButtonState':
            return { ...cinemaHall, isBookButtonPressed: cinemaHall.isBookButtonPressed ? false : true }
        default:
            return cinemaHall;
    }
}

export function setAllSeats(term) {
    return {
        type: 'cinemaHall/setAllSeats',
        payload: term,
    }
}
export function toggleBookButtonState() {
    return {
        type: 'cinemaHall/toggleBookButtonState'
    }
}
