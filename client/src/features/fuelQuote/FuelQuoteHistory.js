import { useGetFuelQuotesQuery } from './fuelQuotesApiSlice';
import FuelQuote from './FuelQuote';

const FuelQuoteHistory = () => {
    const {
        data: fuelQuotes, 
        isLoading, 
        isSuccess, 
        isError, 
        error 
    } = useGetFuelQuotesQuery(undefined, {
        pollingInterval: 60000, // 60 sec
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="h3 text-white text-center">{error?.data?.message}</p>
    }

    if (isSuccess) {
        const { ids } = fuelQuotes

        const tableContent = ids?.length
            ? ids.map(fuelQuoteId => <FuelQuote key={fuelQuoteId} fuelQuoteId={fuelQuoteId} />)
            : null
        
        content = (
            <div className="fuel-quote-history-background">
                <section id="fuelQuoteHistory">
                    <div className="container my-5">
                        <div className="quote-history">
                            <table className="table table-striped rounded rounded-5 overflow-hidden">
                                <thead className="history-head">
                                    <tr>
                                        <th scope="col" colSpan="1">Quote ID</th>
                                        <th scope="col" colSpan="1">Address</th>
                                        <th scope="col" colSpan="1">Date</th>
                                        <th scope="col" colSpan="1">Price Per Gallon</th>
                                        <th scope="col" colSpan="1">Gallons Requested</th>
                                        <th scope="col" colSpan="1">Total Cost</th>
                                    </tr>
                                </thead>

                                <tbody className="table-group-divider" style={{ 'textAlign': 'center' }}>
                                    {tableContent}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
    return content
}

export default FuelQuoteHistory