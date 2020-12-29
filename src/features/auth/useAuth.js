import {useMemo, useState} from 'react';
import {isUsernameValid, isPasswordValid} from '../../utils/authUtils';
import {
  getPasswordIsValid,
  getPasswordValue,
  getUsernameIsValid,
  getUsernameValue,
} from '../../utils/dataHelper/auth/authScreenDataHelper';
import {useDispatch, useSelector} from 'react-redux';
import {login} from './authSlice';
import {getStateAuthIsLoading} from '../../utils/dataHelper/auth/authReduxDataHelper';

const INITIAL_INPUT_VALUE = {
  isValid: true,
  value: null,
};

function useAuth({}) {
  const [username, setUsername] = useState(INITIAL_INPUT_VALUE);
  const [password, setPassword] = useState(INITIAL_INPUT_VALUE);

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => getStateAuthIsLoading(state));

  const onChangePassword = (value) => {
    setPassword({value, isValid: isPasswordValid(value)});
  };

  const onChangeUsername = (value) => {
    setUsername({value, isValid: isUsernameValid(value)});
  };

  const isSaveDisabled = useMemo(
    () =>
      !getUsernameIsValid(username) ||
      !getPasswordIsValid(password) ||
      !getPasswordValue(password) ||
      !getUsernameValue(username),
    [username, password],
  );

  const onLogin = () => {
    if (isSaveDisabled) {
      return;
    }
    dispatch(
      login({
        username: getUsernameValue(username),
        password: getPasswordValue(password),
      }),
    );
  };

  return {
    onChangePassword,
    onChangeUsername,
    username,
    password,
    isSaveDisabled,
    onLogin,
    isLoading,
  };
}

export default useAuth;
