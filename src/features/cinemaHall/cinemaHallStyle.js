export const styleDocument = {
    boxSizing: 'border-box',
    margin: '0',
    padding: '0',
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center'
}
export const styleHallContainer = {
    display: 'grid',
    width: '90vw',
    height: 'calc(90vh / 15 * 10)',
    gridTemplateColumns: 'calc(100% / 10)',
    gridTemplateRows: 'calc(100% / 15)',
}
export const styleBookButton = {
    display: 'flex',
    padding: '5px',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial',
    margin: '25px',
    width: 'auto',
    height: '50px',
    border: '2px solid black',
    backgroundColor: 'white',
    cursor: 'pointer',
}