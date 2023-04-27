import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../features/auth/authSlice'
import jwtDecode from 'jwt-decode'

const useAuth = () => {
    const token = useSelector(selectCurrentToken)

    // Token
    if (token) {
        const decoded = jwtDecode(token)
        const { id, username, name, address1, city, state, zipCode, numFuelQuotes } = decoded.UserInfo

        return { id, username, name, address1, city, state, zipCode, numFuelQuotes }
    }

    // No token
    return { id: '', username: '', name: '', address1: '', city: '', state: '', zipCode: '', numFuelQuotes: '' }
}

export default useAuth