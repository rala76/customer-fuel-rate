import useAuth from '../../hooks/useAuth';
import { useState, useEffect } from 'react';
import { useAddNewFuelQuoteMutation } from '../fuelQuote/fuelQuotesApiSlice';
import { useNavigate } from 'react-router-dom';
// import PricingModule from './PricingModule';

import { useGetUsersQuery } from '../users/usersApiSlice'
import { useUpdateUserMutation, useDeleteUserMutation } from '../users/usersApiSlice';
import PulseLoader from 'react-spinners/PulseLoader'

const FuelQuoteForm = () => {
    const { id, state, address1, numFuelQuotes } = useAuth()

    const { user } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            user: data?.entities[id]
        }),
    })

    // if (!user) return (
    //     <div className="h3 text-white text-center mt-5">
    //         <p style={{'display': 'inline'}}>Loading <PulseLoader color={"#FFF"} size={"8"} /></p>
    //     </div>
    // )

    // Pricing Module
    function PricingModule(gallonsRequested) {
        const currentPricePerGallon = 1.50
        const companyProfitFactor = 0.10 // Company profit factor 10% always

        let locationFactor
        if (state === "TX") { // Texas is 2%
            locationFactor = 0.02
        } else { // Out of state is 4%
            locationFactor = 0.04
        }

        let rateHistoryFactor
        if (numFuelQuotes > 0) { // Client requested fuel before (fuel history)
            rateHistoryFactor = 0.01
            // console.log(`yes2`)
        } else { // Client has not requested fuel yet (no fuel history)
            rateHistoryFactor = 0
        }

        let gallonsRequestedFactor
        if (gallonsRequested > 1000) { // 2% if more than 1000 gallons is requested
            gallonsRequestedFactor = 0.02
        } else { // 3% if less than 1000 gallons is requested
            gallonsRequestedFactor = 0.03
        }

        let margin
        margin = currentPricePerGallon * (locationFactor - rateHistoryFactor + gallonsRequestedFactor + companyProfitFactor)

        let pricePerGallon
        pricePerGallon = currentPricePerGallon + margin

        console.log(`${currentPricePerGallon} * (${locationFactor} - ${rateHistoryFactor} + ${gallonsRequestedFactor} + ${companyProfitFactor})`)
        console.log(`=${margin}`)
        console.log(pricePerGallon)
        

        return pricePerGallon
    }

    const [addNewFuelQuote, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewFuelQuoteMutation()

    const [updateUser, {
        isLoading2,
        isSuccess2,
        isError2,
        error2
    }] = useUpdateUserMutation()

    const navigate = useNavigate()

    const [gallonsRequested, setGallonsRequested] = useState(1)
    const [deliveryAddress, setDeliveryAddress] = useState(address1)
    const [deliveryDate, setDeliveryDate] = useState('')
    const [pricePerGallon, setPricePerGallon] = useState(parseFloat(PricingModule(gallonsRequested)).toFixed(3))
    const [totalCost, setTotalCost] = useState(parseFloat(pricePerGallon * gallonsRequested).toFixed(2))

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
            setGallonsRequested(1)
            setDeliveryAddress(address1)
            setDeliveryDate('')
            setPricePerGallon(PricingModule(state))
            setTotalCost(1)

            window.alert('Order Successfully Placed')

            navigate('/home')
        }
    }, [isSuccess, navigate])

    const onGallonsRequestedChanged = e => {
        let gallonsRequestedTemp = e.target.value
        let pricePerGallonTemp = parseFloat(PricingModule(e.target.value)).toFixed(3)

        setGallonsRequested(gallonsRequestedTemp)
        setPricePerGallon(pricePerGallonTemp)
        setTotalCost(parseFloat(pricePerGallonTemp * gallonsRequestedTemp).toFixed(2))
        // console.log(`${e.target.value} * ${pricePerGallon} = ${e.target.value * pricePerGallon}`)
    }
    // const onDeliveryAddressChanged = e => setDeliveryAddress(e.target.value)
    const onDeliveryDateChanged = e => setDeliveryDate(e.target.value)
    // const onPricePerGallonChanged = e => setPricePerGallon(e.target.value)
    // const onTotalCostChanged = e => setTotalCost(gallonsRequested * pricePerGallon)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const fuelQuoteObject = {
            "user": id,
            "deliveryAddress": deliveryAddress,
            "deliveryDate": deliveryDate,
            "pricePerGallon": pricePerGallon,
            "gallonsRequested": gallonsRequested,
            "totalCost": totalCost
        }

        await addNewFuelQuote(fuelQuoteObject)

        // Increment number of fuel quotes for user once form is successfully submitted
        const userObject = {
            "id": user.id,
            "name": user.name,
            "address1": user.address1,
            "address2": user.address2,
            "city": user.city,
            "state": user.state,
            "zipCode": user.zipCode,
            "numFuelQuotes": user.numFuelQuotes+1
        }

        await updateUser(userObject)
    }

    const content = (
        <div className="fuel-quote-form-background">
            <section id="fuelQuoteForm">
                <div className="container">
                <div className="row justify-content-center">
                        <div className="col-md-4 mt-2">
                            <div className="card p-lg-5 card-background">
                                <div className="card-body text-white">
                                    <h2>Fuel Quote Form</h2>

                                    <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                                        <div className="quote-form-input-box has-validation">
                                            <input type="number" min="1" step="any" value={gallonsRequested} onChange={onGallonsRequestedChanged} required />
                                            <label>Gallons Requested</label>
                                            <div className="invalid-feedback">Gallons requested required</div>
                                        </div>

                                        <div className="quote-form-input-box">
                                            <input type="text" placeholder=" " value={deliveryAddress} readOnly />
                                            <label>Delivery Address</label>
                                        </div>

                                        <div className="has-validation">
                                            <label>Delivery Date</label>
                                            <input type="date" className="form-control form-control-sm text-center my-1" value={deliveryDate} onChange={onDeliveryDateChanged} required />
                                            <div className="invalid-feedback">Delivery date required</div>
                                        </div>

                                        <div className="form-group">
                                            <div className="row">
                                                <label className="mt-3">Price / Gallon</label>
                                            </div>
                                            
                                            <div className="input-group">
                                                <span className="input-group-text my-1" style={{'fontWeight': 'bold'}}>$</span>
                                                <input type="text" className="form-control my-1" value={pricePerGallon} readOnly />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="row">
                                                <label className="mt-3">Total Amount Due</label>
                                            </div>
                                            
                                            <div className="input-group">
                                                <span className="input-group-text my-1" style={{'fontWeight': 'bold'}}>$</span>
                                                <input type="text" className="form-control my-1" value={totalCost} readOnly />
                                            </div>
                                        </div>

                                        <button type="submit" className="btnSubmitQuoteForm mt-4">Place Order</button>
                                    </form>
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

export default FuelQuoteForm