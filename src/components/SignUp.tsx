import { NavLink } from "react-router-dom"
import SignWithGoogle from "./SignWithGoogle"
import {useForm} from "react-hook-form"
const SignUp = () => {
    type FormData = {
        name: string,
        company: string,
        email: string,
        password: string,
        check: boolean
    }
    const {register , handleSubmit , formState: {errors}} = useForm<FormData>();
    return (
        <div className="row justify-content-center align-items-center">
            <div className="signup col-md-8 text-white ">
                <h1 className="mb-5">
                    Welcome. We exist to make entrepreneurship easier.
                </h1>
                <SignWithGoogle />
                <form className="signin-form d-flex flex-column align-items-center m-auto" onSubmit={handleSubmit((data) => {
                    console.log(data)
                    
                })}>
                    <div>
                        <div className="mb-3">
                            <label className="form-label">Full Name:</label>
                            <input {...register("name" , {required:true , minLength:4})} type="text" className="form-control" placeholder="Your Name" />
                            {errors.name?.type == "required" && <p>Name is required</p>}
                            {errors.name?.type == "minLength" && <p>Name should be more than 4 letters</p>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Company Name:</label>
                            <input  {...register("company", { required: true, minLength: 4 })} type="text" className="form-control" placeholder="Company Name" />
                            {errors.company?.type == "required" && <p>Company Name is required</p>}
                            {errors.company?.type == "minLength" && <p>Company Name should be more than 4 letters</p>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address:</label>
                            <input  {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} type="text" className="form-control" placeholder="you@yourcompany.com" />
                            {errors.email?.type == "pattern" && <p>Not Valid Email</p>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password:</label>
                            <input  {...register("password", { required: true, minLength: 10 })} type="password" className="form-control" placeholder="Must be 10 more than letters" />
                            {errors.password?.type == "required" && <p>Password is required</p>}
                            {errors.password?.type == "minLength" && <p>Password should be more than 10 letters</p>}
                        </div>
                        <div className="mb-3 form-check">
                            <input {...register("check" , {required: true})} type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className={errors.check?.type == "required" ? "text-danger" : "form-check-label text-grey"} >I agree to be contacted by Open PRO about this offer as per the Open PRO <a href="#" className="text-grey">Privacy Policy</a>.</label>
                        </div>
                        <button type="submit" className="submit">SignUp</button>
                    </div>
                </form>
                <div className="mt-3 text-center ">
                    <p className="fs-6 d-inline me-2">Already using Open PRO? </p>
                    <NavLink to="/signin" className="signup-link">Sign in</NavLink>
                </div>
            </div>
        </div>
    )
}

export default SignUp
