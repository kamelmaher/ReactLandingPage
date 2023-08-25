import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SignWithGoogle = () => {
    return (
        <div className="text-center">
            <button className="google-btn m-auto">
                <FontAwesomeIcon icon={faGoogle} />
                <div className="d-inline ms-4">
                    Sign In With Google
                </div>
            </button>
            <p className="mt-3">Or, sign in with your email</p>
        </div>
    )
}

export default SignWithGoogle
