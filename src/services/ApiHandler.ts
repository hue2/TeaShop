import { fetchPending, fetchSuccess, fetchError } from '../store/Actions';
import { TeaProduct } from '../store/Types';

const apiUrl = <string>process.env.REACT_APP_GET_API;

export function get() {
  return (dispatch : any) => {
    dispatch(fetchPending());
      return fetch(`${apiUrl}/get.php`).then((response : any) => response.json()).then((data : Array<TeaProduct>) => {   
        console.log(data);
       dispatch(fetchSuccess(data));
    })
    .catch((error : any) => {
      dispatch(fetchError(error));
    })
  }
}


export function getOne(id : string) {
  return (dispatch : any) => {
    dispatch(fetchPending());
      return fetch(`${apiUrl}/get.php?id=${id}`).then((response : any) => response.json()).then((data : Array<TeaProduct>) => {   
        console.log(data);
       dispatch(fetchSuccess(data));
    })
    .catch((error : any) => {
      dispatch(fetchError(error));
    })
  }
}

export function getFeature() {
  return (dispatch : any) => {
    dispatch(fetchPending());
      return fetch(`${apiUrl}/getFeature.php`)
        .then((response : any) => response.json())
        .then((data : Array<TeaProduct>) => {   
          console.log(data);
          dispatch(fetchSuccess(data));
    })
    .catch((error : any) => {
      dispatch(fetchError(error));
    })
  }
}