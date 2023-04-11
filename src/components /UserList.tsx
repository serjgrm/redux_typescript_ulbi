import React from 'react';
import { useSelector } from 'react-redux';
import { rootReducer } from '../store/reducers ';
import { useTypesSelector } from '../hooks/useTypedSelector';

const UserList:React.FC = () => {
    const {users,loading,error} = useTypesSelector(state=>state.user) 
    console.log(users)
    console.log(loading)
    console.log(error)

    return (
        <div>   
            
        </div>
    );
};

export default UserList;



