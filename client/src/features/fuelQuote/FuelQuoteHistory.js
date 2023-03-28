import { useGetFuelQuotesQuery } from './fuelQuotesApiSlice';
import FuelQuote from './FuelQuote';
// import { useParams } from 'react-router-dom';
import refreshIcon from '../../img/refresh-icon.png';

const FuelQuoteHistory = () => {
    // const { id } = useParams()

    const {
        data: fuelQuotes, 
        isLoading, 
        isSuccess, 
        isError, 
        error 
    } = useGetFuelQuotesQuery('fuelQuoteHistory', {
        pollingInterval: 60000, // 60 sec
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    let content

    if (isLoading) content = <p className="h3 text-white text-center">Loading...</p>

    if (isError) {
        content = <p className="h3 text-white text-center">{error?.data?.message}</p>
    }

    if (isSuccess) {
        const { ids } = fuelQuotes

        // const tableContent = ids?.length
        //     ? ids.map(fuelQuoteId => <FuelQuote key={fuelQuoteId} fuelQuoteId={fuelQuoteId} />)
        //     : null
        const tableContent = ids?.length && ids.map(fuelQuoteId => <FuelQuote key={fuelQuoteId} fuelQuoteId={fuelQuoteId} />)
        
        content = (
            <div className="fuel-quote-history-background">
                <section id="fuelQuoteHistory">
                    <div className="container my-5">
                        <button className="btn bg-transparent ms-5 text-white" onClick={() => window.location.reload()}>
                            <h4 className="mb-0">Refresh List<img src={refreshIcon} className="ms-1 mb-1" width={30} alt="refresh"/></h4>
                        </button>
                        
                        
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