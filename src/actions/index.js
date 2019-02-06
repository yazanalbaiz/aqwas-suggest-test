import Wain from '../api/Wain';


export const SET_COORDS = 'SET_COORDS';

export const GET_SUGGESTION = 'GET_SUGGESTION';

export const OPEN_MODAL = 'OPEN_MODAL';

export const CLOSE_MODAL = 'CLOSE_MODAL';


export const setCoords = () => {
    if (navigator.geolocation) {
        const getPosition = () => {
            return new Promise((res, rej) => {
                const coordinates = {
                    latitude: null,
                    longitude: null,
                    error: false,
                    testData: 'Hello, world!'
                }
                const success = pos => {
                    coordinates.latitude = pos.coords.latitude;
                    coordinates.longitude = pos.coords.longitude;
                    coordinates.testData = 'I am John';
                    res(coordinates);
                }

                const fail = err => {
                    coordinates.error = true;
                    console.log('afmas')


                    rej(err); // or reject(error);
                }
                navigator.geolocation.getCurrentPosition(success, fail);
            });
        }
        const coordinatePromise = getPosition();


        return {
            type: SET_COORDS,
            payload: coordinatePromise.then(coords => ({ lat: coords.latitude, lng: coords.longitude }))

        };
    } else {
        window.alert('Geolocation not supported in your browser.');

        return {
            type: SET_COORDS,
            payload: { lat: undefined, lng: undefined }
        };
    }

}

export const getSuggestion = ({ lat, lng }) => {
    console.log(lat, lng)
    return {
        type: GET_SUGGESTION,
        payload: Wain.get(`GenerateFS.php?uid=${lat},${lng}&get_param=value`)
    };
}

export const openModal = () => ({
    type: OPEN_MODAL
})

export const closeModal = () => ({
    type: CLOSE_MODAL
})