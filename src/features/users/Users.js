import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usersFetcher } from './usersSlice';

const Users = () => {
    const {users, error, isLoading} = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(usersFetcher())
    }, [])

    return (
        <>
            <h3 style={{textAlign: "center", marginTop: "100px", fontSize: "30px"}}>All Users</h3>
        <div className='users'>
            {isLoading && <h2>Data Loading...</h2>}
            {error && <h2>{error}</h2>}
            {users && users.map((user) => {
                const {name, email} = user;
                return (
                    <div className='users-user'>
                        <h3>{name}</h3>
                        <p>{email}</p>
                    </div>
                )
            })}
        </div>
        </>
    );
};

export default Users;