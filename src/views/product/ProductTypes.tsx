import { RouteComponentProps } from 'react-router-dom';

export interface RouteInfo {
    id: string;   
}
  
export interface RouteProps extends RouteComponentProps<RouteInfo> { }
    
  