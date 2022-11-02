import React, { useContext } from 'react';
import { FaFacebookSquare, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { AuthContext } from '../../Context/UserContext/UserContext';



const SignUp = () => {
    const { createUser, nameUpdate, varifyEmail, googleSignIn, } = useContext(AuthContext);



    const handleSignUp = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                // updateProfile
                const user = result.user;

                nameUpdate(name)
                    .then(() => {
                        // console.log(auth.currentUser)

                        // Email verification set up.
                        varifyEmail()
                            .then(() => {

                            });

                    })
                    .catch((error) => {

                    });

                // ...
                console.log(user);
            })


        // console.log('object', name, email, password);
    }



    return (
        <div>
            <div className="hero my-5 w-full ">
                <div className="hero-content md:grid-cols-2 flex-col lg:flex-row">
                    <div className="mr-24 text-center lg:text-left">
                        <img className='w-3/4' src={img} alt="" />
                    </div>
                    <div className="my-20 py-20 card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                        </div>

                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input name='password' type="text" placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <div className='text-center my-2'>
                            <p>Or Sign Up with</p>
                            <button className='text-3xl m-2'>
                                <FaGoogle></FaGoogle>
                            </button>
                            <button className='text-3xl m-2'>
                                <FaFacebookSquare></FaFacebookSquare>
                            </button>
                            <button className='text-3xl m-2'>
                                <FaGithub></FaGithub>
                            </button>
                        </div>
                        <p className='text-center'>Already Have an Account? <Link className='text-orange-600' to={'/login'}>Login</Link></p>
                    </div>
                </div>
            </div>        </div>
    );
};

export default SignUp;