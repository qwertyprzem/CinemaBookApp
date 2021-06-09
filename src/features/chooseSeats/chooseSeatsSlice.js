const initialState = {
    numberOfSeats: 1,
    isSideBySide: false,
    selectedSeats: [],
    isNextButtonPressed: false
}
export const chooseSeatsReducer = (chooseSeats = initialState, action) => {
    switch (action.type) {
        case 'chooseSeats/setSelectedSeats':
            return { ...chooseSeats, selectedSeats: action.payload };
        case 'chooseSeats/addSelectedSeat':
            return { ...chooseSeats, selectedSeats: [...chooseSeats.selectedSeats, action.payload] }
        case 'chooseSeats/removeSelectedSeat':
            return { ...chooseSeats, selectedSeats: chooseSeats.selectedSeats.filter((element) => { return element.id !== action.payload }) }
        case 'chooseSeats/setNumberofSeats':
            return { ...chooseSeats, numberOfSeats: parseInt(action.payload) }
        case 'chooseSeats/toggleSideBySide':
            return { ...chooseSeats, isSideBySide: chooseSeats.isSideBySide ? false : true }
        case 'chooseSeats/toggleNextButtonState':
            return { ...chooseSeats, isNextButtonPressed: chooseSeats.isNextButtonPressed ? false : true }
        default:
            return chooseSeats;
    }
}

export function setNumberOfSeats(term) {
    return {
        type: 'chooseSeats/setNumberofSeats',
        payload: term,
    }
}
export function addSelectedSeat(term) {
    return {
        type: 'chooseSeats/addSelectedSeat',
        payload: term
    }
}
export function removeSelectedSeat(term) {
    return {
        type: 'chooseSeats/removeSelectedSeat',
        payload: term
    }
}
export function setSelectedSeats(term) {
    return {
        type: 'chooseSeats/setSelectedSeats',
        payload: term
    }
}
export function toggleSideBySide() {
    return {
        type: 'chooseSeats/toggleSideBySide',
    }
}
export function toggleNextButtonState() {
    return {
        type: 'chooseSeats/toggleNextButtonState',
    }
}