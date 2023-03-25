import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUserById } from './usersApiSlice'
import UserProfile from './UserProfile'

const EditUser = () => {
    const { id } = useParams()

    const user = useSelector(state => selectUserById(state, id))

    const content = user ? <UserProfile user={user} /> : <p className="h3 text-white text-center">Loading...</p>

    return content
}

export default EditUser