// import { useSelector } from 'react-redux';
// import { selectFuelQuoteById } from './fuelQuotesApiSlice';
import { useGetFuelQuotesQuery } from './fuelQuotesApiSlice';
import { memo } from 'react';

import useAuth from '../../hooks/useAuth';

const FuelQuote = ({ fuelQuoteId }) => {
    const { id } = useAuth()

    // const fuelQuote = useSelector(state => selectFuelQuoteById(state, fuelQuoteId))
    const { fuelQuote } = useGetFuelQuotesQuery("fuelQuotesHistory", {
        selectFromResult: ({ data }) => ({
            fuelQuote: data?.entities[fuelQuoteId]
        }),
    })

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

// Component will only re-render if there are changes in the data
const memoizedFuelQuote = memo(FuelQuote)
export default memoizedFuelQuote
// export default FuelQuote