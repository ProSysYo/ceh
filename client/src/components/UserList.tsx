import React, { FC, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';


const UserList: FC= () => {
    const {users, error, loading } = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions()
    
    useEffect(() => {
        fetchUsers()       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(user =>
                <div key={user.id}>{user.name}</div>
            )}
        </div>
    )
}

export default UserList
