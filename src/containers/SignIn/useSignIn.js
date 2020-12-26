import React, {useCallback, useMemo, useState} from 'react';
import {isUsernameValid, isPasswordValid} from '../../utilites/authUtils';
import {
  getPasswordIsValid,
  getPasswordValue,
  getUsernameIsValid,
  getUsernameValue,
} from '../../utilites/signInDataHelper';

const INITIAL_INPUT_VALUE = {
  isValid: true,
  value: null,
};

function useSignIn({}) {
  const [username, setUsername] = useState(INITIAL_INPUT_VALUE);
  const [password, setPassword] = useState(INITIAL_INPUT_VALUE);

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

  return {
    onChangePassword,
    onChangeUsername,
    username,
    password,
    isSaveDisabled,
  };
}

export default useSignIn;
