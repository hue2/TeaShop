export class ApiHandler {
    get = () => {
        return fetch(process.env.REACT_APP_GET_API).then(response => {
            return response.json();
          }).then(data => {
            return data;
          })
          .catch(error => {
              throw error;
          })
    }
}