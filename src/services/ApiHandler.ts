import { fetchPending, fetchSuccess, fetchError } from '../store/Actions';
import { TeaProduct } from '../store/Types';

const apiUrl = <string>process.env.REACT_APP_GET_API;

export function get(url : string = apiUrl) {
  return (dispatch : any) => {
    dispatch(fetchPending());
      return fetch(url).then((response : any) => response.json()).then((data : Array<TeaProduct>) => {     
       dispatch(fetchSuccess(data));
    })
    .catch((error : any) => {
      dispatch(fetchError(error));
    })
  }
}