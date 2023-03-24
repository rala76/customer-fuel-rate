import { useSelector } from 'react-redux';
import { selectFuelQuoteById } from './fuelQuotesApiSlice';

const FuelQuote = ({ fuelQuoteId }) => {
    const fuelQuote = useSelector(state => selectFuelQuoteById(state, fuelQuoteId))

    if (fuelQuote) {
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