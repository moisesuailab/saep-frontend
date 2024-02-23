import { Navigate } from "react-router-dom";
import { useAuth } from "../../shared/hooks/useAuth"


export const Private = ({children}: {children: JSX.Element} ) => {
    const auth = useAuth();    
    
    
    if(!auth.email){        
        return <Navigate to={'/login'}/>;
    }   

    return children;
}