import { Login } from "../../pages/Login";
import { useAuth } from "../../shared/hooks/useAuth"


export const ProtectedLayout = ({children}: {children: JSX.Element} ) => {
    const auth = useAuth();

    if(!auth.email){
        return <Login />;
    }

    return children;
}