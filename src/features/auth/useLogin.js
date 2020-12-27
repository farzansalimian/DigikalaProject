import React, {useCallback, useMemo, useState} from 'react';
import {isUsernameValid, isPasswordValid} from '../../utils/authUtils';
import {
  getPasswordIsValid,
  getPasswordValue,
  getUsernameIsValid,
  getUsernameValue,
} from '../../utils/dataHelper/loginScreenDataHelper';
import {useDispatch, useSelector} from 'react-redux';
import {login} from './authSlice';
import {getStateIsLoading} from '../../utils/dataHelper/reduxAuthDataHelper';

const INITIAL_INPUT_VALUE = {
  isValid: true,
  value: null,
};

function useLogin({}) {
  const [username, setUsername] = useState(INITIAL_INPUT_VALUE);
  const [password, setPassword] = useState(INITIAL_INPUT_VALUE);

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => getStateIsLoading(state));

  const onChangePassword = useCallback((value) => {
    setPassword({value, isValid: isPasswordValid(value)});
  }, []);

  const onChangeUsername = useCallback((value) => {
    setUsername({value, isValid: isUsernameValid(value)});
  }, []);

  const isSaveDisabled = useMemo(
    () =>
      !getUsernameIsValid(username) ||
      !getPasswordIsValid(password) ||
      !getPasswordValue(password) ||
      !getUsernameValue(username),
    [username, password],
  );

  const onLogin = useCallback(() => {
    if (isSaveDisabled) {
      return;
    }
    dispatch(
      login({
        username: getUsernameValue(username),
        password: getPasswordValue(password),
      }),
    );
  }, [username, password, isSaveDisabled]);

  return {
    onChangePassword,
    onChangeUsername,
    username,
    password,
    isSaveDisabled,
    onLogin,
    isLoading
  };
}

export default useLogin;
