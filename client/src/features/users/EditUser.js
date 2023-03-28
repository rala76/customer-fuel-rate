import { useParams } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { selectUserById } from './usersApiSlice'
import UserProfile from './UserProfile'

import { useGetUsersQuery } from './usersApiSlice'
import PulseLoader from 'react-spinners/PulseLoader'

const EditUser = () => {
    const { id } = useParams()

    // const user = useSelector(state => selectUserById(state, id))
    const { user } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            user: data?.entities[id]
        }),
    })

    // const content = user ? <UserProfile user={user} /> : <p className="h3 text-white text-center">Loading...</p>
    if (!user) return (
        <div className="h3 text-white text-center mt-5">
            <p style={{'display': 'inline'}}>Loading <PulseLoader color={"#FFF"} size={"8"} /></p>
        </div>
    )

    const content = <UserProfile user={user} />

    return content
}

export default EditUser