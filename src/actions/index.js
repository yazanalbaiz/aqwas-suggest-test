import Wain from '../api/Wain';


export const SET_COORDS = 'SET_COORDS';



export const GET_SUGGESTION = 'GET_SUGGESTION';

export const setCoords = () => {
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
}

export const getSuggestion = ({ lat, lng }) => {
    return {
        type: GET_SUGGESTION,
        payload: Wain.get(`GenerateFS.php?uid=${lat},${lng}&get_param=value`)
    };
}