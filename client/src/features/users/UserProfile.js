import { useState, useEffect } from 'react';
import { useUpdateUserMutation, useDeleteUserMutation } from './usersApiSlice';
import { useNavigate } from 'react-router-dom'

const UserProfile = ({ user }) => {

    const [updateUser, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useUpdateUserMutation()

    // const [deleteUser, {
    //     isSuccess: isDelSuccess,
    //     isError: isDelError,
    //     error: delerror
    // }] = useDeleteUserMutation()

    const navigate = useNavigate()

    const [name, setName] = useState(user.name)
    const [address1, setAddress1] = useState(user.address1)
    const [address2, setAddress2] = useState(user.address2)
    const [city, setCity] = useState(user.city)
    const [state, setState] = useState(user.state)
    const [zipCode, setZipCode] = useState(user.zipCode)

    useEffect(() => {
        if (isSuccess) { // || isDelSuccess)
            // setName('')
            // setAddress1('')
            // setAddress2('')
            // setCity('')
            // setState('')
            // setZipCode('')

            window.alert(`User ${user.username} was Successfully Updated`)

            // navigate(`/home/profile/${id}`)
            navigate(0) // Reload page
        }
    }, [isSuccess, navigate]) // , isDelSuccess])

    const onNameChanged = e => setName(e.target.value)
    const onAddress1Changed = e => setAddress1(e.target.value)
    const onAddress2Changed = e => setAddress2(e.target.value)
    const onCityChanged = e => setCity(e.target.value)
    const onStateChanged = e => setState(e.target.value)
    const onZipCodeChanged = e => setZipCode(e.target.value)

    const onEditUserClicked = async (e) => {
        e.preventDefault()

        await updateUser({ id: user.id, name, address1, address2, city, state, zipCode })
    }

    // const onDeleteUserClicked = async () => {
    //     await deleteUser({ id: user.id })
    // }

    const errContent = (error?.data?.message) ?? '' //  || delerror?.data?.message)

    const content = (
        <div className="profile-management-background">
            <section id="profileManagement">
                <div className="container">
                <div className="row justify-content-center">
                        <div className="col-md-4 mt-2">
                            <div className="card p-lg-5 card-background">
                                <div className="card-body text-white">
                                    <h2>Profile Management</h2>

                                    <form onSubmit={onEditUserClicked}>
                                        <div className="profileManagement-input-box">
                                            <input type="text" maxLength="50" placeholder=" " value={name} onChange={onNameChanged} required />
                                            <label>Full Name</label>
                                        </div>

                                        <div className="profileManagement-input-box">
                                            <input type="text" maxLength="100" placeholder=" " value={address1} onChange={onAddress1Changed} required />
                                            <label>Address 1</label>
                                        </div>

                                        <div className="profileManagement-input-box">
                                            <input type="text" maxLength="100" placeholder=" " value={address2} onChange={onAddress2Changed} />
                                            <label>Address 2</label>
                                        </div>

                                        <div className="profileManagement-input-box">
                                            <input type="text" maxLength="100" placeholder=" " value={city} onChange={onCityChanged} required/>
                                            <label>City</label>
                                        </div>

                                        <div className="row">
                                            <div className="col">
                                            <label htmlFor="states">State:</label>
                                            <select id="states" name="states" className="form-select form-select-sm" style={{'width': '6rem'}} value={state} onChange={onStateChanged} required>
                                                {/* <option value="" selected disabled hidden></option> */}
                                                <option value="TX">TX</option>
                                                <option value="CA">CA</option>
                                                <option value="FL">FL</option>
                                                <option value="AL">AL</option>
                                            </select>
                                            </div>

                                            <div className="col">
                                            <label htmlFor="zipCode" className="zipcode">Zip code:</label>
                                            <input type="text" id="zipCode" className="form-control form-control-sm" minlength="5" maxLength="9" value={zipCode} onChange={onZipCodeChanged} required/>
                                            </div>
                                        </div>

                                        <button type="submit" className="btnSubmitEditProfile mt-4">Edit Profile</button>
                                    </form>

                                    <p className="h5 text-danger text-center" aria-live="assertive">{errContent}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

    return content
}

export default UserProfile