import { fetchPending, fetchSuccess, fetchError } from '../store/Actions';
import { TeaProduct } from '../store/Types';

const apiUrl = <string>process.env.REACT_APP_GET_API;

export function get(id : number = 0) {
  let endpoint = id === 0 ? apiUrl : `${apiUrl}?id=${id}`;
  return (dispatch : any) => {
    dispatch(fetchPending());
      return fetch(endpoint).then((response : any) => response.json()).then((data : Array<TeaProduct>) => {   
        console.log(data);
       dispatch(fetchSuccess(data));
    })
    .catch((error : any) => {
      dispatch(fetchError(error));
    })
  }
}