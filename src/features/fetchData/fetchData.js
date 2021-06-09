import { setAllSeats } from '../cinemaHall/cinemaHallSlice'

export function fetchData() {
    return dispatch => {
        const url = 'http://localhost:3000/seats'; //json Server is running at 3000 port. Endpoint: /seats    
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                dispatch(setAllSeats(data))
                return data;
            })
    }
}