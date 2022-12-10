import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadUser } from '../actions';

const HelperRoute = () => {
    const dispatch = useDispatch();
    const { isAuth } = useSelector(state => state.auth);
    useEffect(() => {
        if (isAuth) {
            loadUser(dispatch)
        }
    }, [isAuth])
  return <React.Fragment />;
};

export default HelperRoute;