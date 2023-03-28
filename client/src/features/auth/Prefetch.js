import { store } from '../../app/store';
import { fuelQuotesApiSlice } from '../fuelQuote/fuelQuotesApiSlice';
import { usersApiSlice } from '../users/usersApiSlice';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Prefetch = () => {
    useEffect(() => {
        // console.log('subscribing')
        // const fuelQuotes = store.dispatch(fuelQuotesApiSlice.endpoints.getFuelQuotes.initiate())
        // const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate())

        store.dispatch(fuelQuotesApiSlice.util.prefetch('getFuelQuotes', 'fuelQuotesHistory', { force: true }))
        store.dispatch(usersApiSlice.util.prefetch('getUsers', 'usersList', { force: true }))

        // return () => {
        //     console.log('unsubscribing')
        //     fuelQuotes.unsubscribe()
        //     users.unsubscribe()
        // }
    }, [])

    return <Outlet />
}

export default Prefetch