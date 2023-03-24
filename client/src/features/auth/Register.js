import { Link } from 'react-router-dom';
import PublicNavbar from '../../components/PublicNavbar';
import PublicFooter from '../../components/PublicFooter';

import { useState, useEffect } from 'react';
import { useAddNewUserMutation } from '../users/usersApiSlice';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [addNewUser, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewUserMutation()

    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')

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

    useEffect(() => {
        if (isSuccess) {
            setUsername('')
            setPassword('')
            setName('')
            setAddress1('')
            setAddress2('')
            setCity('')
            setState('')
            setZipCode('')

            window.alert('Registration Successfull')

            navigate('/login')
        }
    }, [isSuccess, navigate])

    const onUsernameChanged = e => setUsername(e.target.value)
    const onPasswordChanged = e => setPassword(e.target.value)
    const onNameChanged = e => setName(e.target.value)
    const onAddress1Changed = e => setAddress1(e.target.value)
    const onAddress2Changed = e => setAddress2(e.target.value)
    const onCityChanged = e => setCity(e.target.value)
    const onStateChanged = e => setState(e.target.value)
    const onZipCodeChanged = e => setZipCode(e.target.value)

    const onRegisterBtnClicked = async (e) => {
        e.preventDefault()

        const userObject = {
            "username": username,
            "password": password,
            "name": name,
            "address1": address1,
            "address2": address2,
            "city": city,
            "state": state,
            "zipCode": zipCode
        }

        await addNewUser(userObject)
    }

    const content = (
        <div className="register-background">
            <PublicNavbar/>

            <section id="register">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-4 mt-2">
                            <div className="card p-lg-5 card-background">
                                <div className="card-body text-white">
                                    <h2>Registration</h2>

                                    <form onSubmit={onRegisterBtnClicked} className="needs-validation" noValidate>
                                        <div className="register-input-box has-validation">
                                            <i className="fa fa-envelope"></i>
                                            <input type="text" id="userLogin" minLength="3" maxLength="20" placeholder=" " value={username} onChange={onUsernameChanged} required />
                                            <label className="required">Username</label>
                                            <div className="invalid-feedback">Username required [3-20 characters]</div>
                                        </div>

                                        <div className="register-input-box has-validation">
                                            <i className="fa fa-lock"></i>
                                            <input type="password" id="passLogin" minLength="8" maxLength="20" placeholder=" " value={password} onChange={onPasswordChanged} required />
                                            <label className="required">Password</label>
                                            <div className="invalid-feedback">Password required [8-20 characters]</div>
                                        </div>

                                        <div className="register-input-box has-validation">
                                            <input type="text" maxLength="50" placeholder=" " value={name} onChange={onNameChanged} required />
                                            <label className="email required">Full Name</label>
                                            <div className="invalid-feedback">Full name required [max 50 characters]</div>
                                        </div>

                                        <div className="register-input-box has-validation">
                                            <input type="text" maxLength="100" placeholder=" " value={address1} onChange={onAddress1Changed} required />
                                            <label className="required">Address 1</label>
                                            <div className="invalid-feedback">Address 1 required [max 100 characters]</div>
                                        </div>

                                        <div className="register-input-box-optional">
                                            <input type="text" maxLength="100" placeholder=" " value={address2} onChange={onAddress2Changed} />
                                            <label>Address 2</label>
                                        </div>

                                        <div className="register-input-box has-validation">
                                            <input type="text" maxLength="100" placeholder=" " value={city} onChange={onCityChanged} required />
                                            <label className="required">City</label>
                                            <div className="invalid-feedback">City required [max 100 characters]</div>
                                        </div>

                                        <div className="row">
                                            <div className="col has-validation">
                                                <label for="states" className="required">State:</label>
                                                <select id="states" name="states" className="form-select form-select-sm" style={{ 'width': '6rem' }} value={state} onChange={onStateChanged} required>
                                                    <option value="" selected disabled hidden></option>
                                                    <option value="TX">TX</option>
                                                    <option value="CA">CA</option>
                                                    <option value="FL">FL</option>
                                                    <option value="AL">AL</option>
                                                </select>
                                                <div className="invalid-feedback">State required</div>
                                            </div>

                                            <div className="col has-validation">
                                                <label for="zipCode" className="zipcode required">Zip code:</label>
                                                <input id="zipCode" className="form-control form-control-sm" style={{ 'width': '10rem' }} type="text" minLength="5" maxLength="9" value={zipCode} onChange={onZipCodeChanged} required />
                                                <div className="invalid-feedback">Zip code required [5-9 characters]</div>
                                            </div>
                                        </div>
                                        
                                        <div className="row">
                                            <div className="col-12 my-3 has-validation">
                                                <input type="checkbox" required/>
                                                <label className="required ms-2">I agree to the Terms & Conditions</label>
                                                <div className="invalid-feedback">Must agree to register</div>
                                            </div>
                                        </div>
                                        {/* <div className="agreeTermsCond mt-3">
                                            <label><input type="checkbox" required/> I agree to the Terms & Conditions</label>
                                        </div> */}

                                        <button type="submit" className="btnSubmitRegister">Register</button>
                                        
                                        <div className="registerToLogin">
                                            <p>Already have an account? <Link to="/login">Login</Link></p>
                                        </div>
                                    </form>
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

export default Register