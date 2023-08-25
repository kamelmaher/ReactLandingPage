import { useForm } from "react-hook-form"
import { NavLink } from "react-router-dom";
import SignWithGoogle from "./SignWithGoogle";
const Signin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    type FormData = {
        email: string,
        password: string
    };
    return (
        <div className="signin row justify-content-center align-items-center">
            <div className="col-md-8 text-white">
                <h1 className="mb-5">Welcome. We exist to make entrepreneurship easier.</h1>
                <SignWithGoogle />
                <form className="signin-form m-auto mt-4 d-flex flex-column align-items-center" onSubmit={(handleSubmit(data => console.log(data)))}>
                    <div className="mt-1">
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} type="text" className="form-control" placeholder="you@Yourcompany.com" />
                            {errors.email?.type === "required" && <p >Email is required</p>}
                            {errors.email?.type === "pattern" && <p >Not Valid Email</p>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input {...register("password", { required: true, minLength: 10 })} type="password" className="form-control" placeholder="Password (At Least 10 Char)" />
                            {errors.password?.type == "required" && <p>Password is required</p>}
                            {errors.password?.type == "minLength" && <p>Password should be more than 10 letters</p>}
                        </div>
                        <div className="mb-3 form-check align-items-center d-flex">
                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label text-white-50" >Keep Me Signed In</label>
                            </div>
                            <label className="ms-auto "> Forget PassWord ?</label>
                        </div>
                        <button type="submit" className="submit">Sign In</button>
                    </div>
                    <div className="mt-3 text-center ">
                        <span className="me-2 text-grey">Don’t you have an account?</span>
                        <NavLink to="/signup" className="signup-link">Sign Up</NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signin;
