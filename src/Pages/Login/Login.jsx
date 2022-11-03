import React, { useContext } from 'react';
import { FaFacebookSquare, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { AuthContext } from '../../Context/UserContext/UserContext';

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))
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
                            <h1 className="text-5xl font-bold text-center">Login</h1>
                        </div>

                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <div className='text-center my-2'>
                            <p>Or Sign In with</p>
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
                        <p className='text-center'>Have an account? <Link className='text-orange-600' to={'/signup'}>Sign Up</Link></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;