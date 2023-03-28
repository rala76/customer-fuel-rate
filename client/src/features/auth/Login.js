import { useRef, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from './authSlice';
import { useLoginMutation } from './authApiSlice';
import usePersist from '../../hooks/usePersist';
import PublicNavbar from '../../components/PublicNavbar';
import PublicFooter from '../../components/PublicFooter';
import PulseLoader from 'react-spinners/PulseLoader';

const Login = () => {
    // const userRef = useRef()
    // const errRef = useRef()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [persist, setPersist] = usePersist()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [login, { isLoading }] = useLoginMutation()

    useEffect(() => {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
    }, [])

    // useEffect(() => {
    //     userRef.current.focus()
    // }, [])

    useEffect(() => {
        setErrMsg('')
    }, [username, password])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const { accessToken } = await login({ username, password }).unwrap()
            dispatch(setCredentials({ accessToken }))

            setUsername('')
            setPassword('')

            navigate('/home')
        } catch (err) {
            if (!err.status) {
                setErrMsg('No Server Response')
            } else if (err.status === 400) {
                setErrMsg('Missing Username or Password')
            } else if (err.status === 401) {
                setErrMsg('Incorrect Username or Password')
            } else {
                setErrMsg(err.data?.message)
            }

            // errRef.current.focus();
        }
    }

    const handleUserInput = (e) => setUsername(e.target.value)
    const handlePwdInput = (e) => setPassword(e.target.value)
    const handleToggle = () => setPersist(prev => !prev)

    // const errClass = errMsg ? "errMsg" : "offscreen"

    // if (isLoading) return <p className="h3 text-white text-center">Loading...</p>
    if (isLoading) return (
        <div className="h3 text-white text-center mt-5">
            <p style={{'display': 'inline'}}>Loading <PulseLoader color={"#FFF"} size={"8"} /></p>
        </div>
    )

    const content = (
        <div className="login-background">
            <PublicNavbar/>

            <section id="login">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-4 mt-2">
                            <div className="card p-lg-5 card-background">
                                <div className="card-body text-white">
                                    <h2>Login</h2>

                                    <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                                        <div className="login-input-box has-validation">
                                            <i className="fa fa-envelope"></i>
                                            <input type="text" id="userLogin" minLength="3" maxLength="20" placeholder=" " value={username} onChange={handleUserInput} autoComplete="off" required/>
                                            <label>Username</label>
                                            <div className="invalid-feedback">Please enter a username [3-20 characters]</div>
                                        </div>

                                        <div className="login-input-box has-validation">
                                            <i className="fa fa-lock"></i>
                                            <input type="password" id="passLogin" minLength="8" maxLength="20" placeholder=" " value={password} onChange={handlePwdInput} required/>
                                            <label>Password</label>
                                            <div className="invalid-feedback">Please enter a password [8-20 characters]</div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 mb-4">
                                                <input type="checkbox" id="persist" onChange={handleToggle} checked={persist} />
                                                <label htmlFor="persist" className="ms-2">Trust this device</label>
                                            </div>
                                        </div>
                                        {/* <div className="rememberMe-forgotPass">
                                            <label><input type="checkbox"/> Remember me</label>
                                            
                                            <Link to="/login" className="forgotPass">Forgot Password?</Link>
                                        </div> */}

                                        <button type="submit" className="btnSubmitLogin">Login</button>
                                        
                                        <div className="loginToRegister">
                                            <p>Don't have an account? <Link to="/register">Register</Link></p>
                                        </div>
                                    </form>

                                    {/* <p ref={errRef} className={errClass} aria-live="assertive">{errMsg}</p> */}
                                    <p className="h5 text-danger text-center" aria-live="assertive">{errMsg}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <PublicFooter/>
        </div>
    )
    return content
}

export default Login