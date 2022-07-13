 import { Firebase } from 'firebase/app'
import {signInWithGooglePopup} from '../utils/firebase/firebase.util'


const SignIn=()=>{

    const logGoogleUser=async ()=>{
      var google_provider=new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithGooglePopup(google_provider)
      .then((re)=>{
        console.log(re);
      })

      .catch((err)=>{
        console.log(err);
      })

    }
    return (
        <div>
            <h1>sign in page</h1>
            <button onClick={logGoogleUser}>
                Sign In with Google Popup
            </button>
        </div>
    )
}

export default SignIn; 