import { useSelector } from 'react-redux';
import { selectFuelQuoteById } from './fuelQuotesApiSlice';

import useAuth from '../../hooks/useAuth';

const FuelQuote = ({ fuelQuoteId }) => {
    const { id } = useAuth()

    const fuelQuote = useSelector(state => selectFuelQuoteById(state, fuelQuoteId))

    if (fuelQuote && fuelQuote.user === id) {
        return (
            <tr>
                <td>{fuelQuote._id}</td>
                <td>{fuelQuote.deliveryAddress}</td>
                <td>{fuelQuote.deliveryDate}</td>
                <td>${fuelQuote.pricePerGallon}</td>
                <td>{fuelQuote.gallonsRequested}</td>
                <td>${fuelQuote.totalCost}</td>
            </tr>
        )
    } else return null
}

export default FuelQuote