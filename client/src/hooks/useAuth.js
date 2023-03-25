import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../features/auth/authSlice'
import jwtDecode from 'jwt-decode'

const useAuth = () => {
    const token = useSelector(selectCurrentToken)

    // Token
    if (token) {
        const decoded = jwtDecode(token)
        const { id, username, name, address1, city, state, zipCode } = decoded.UserInfo

        return { id, username, name, address1, city, state, zipCode }
    }

    // No token
    return { id: '', username: '', name: '', address1: '', city: '', state: '', zipCode: '' }
}

export default useAuth