import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = () => {

    const navigate = useNavigate();

    const signInWithGoogle = async () => {
          const result = await signInWithPopup(auth, provider)
          navigate("/")
    }

    return ( 
        <div>
        <h3>Sign In With Google</h3>
        <button onClick={signInWithGoogle}> SignIn With Google </button>
        </div> 
        );
}
 
export default Login;