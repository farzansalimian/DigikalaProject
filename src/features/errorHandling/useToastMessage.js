import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getStateErrorMessage} from '../../utils/dataHelper/errorHandling/errorHandlingReduxDataHelper';
import {clearError} from './errorHandlingSlice';
import Toast from 'react-native-root-toast';

function useToastMessage() {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => getStateErrorMessage(state));

  useEffect(() => {
    if (!errorMessage) {
      return;
    }

    let toast = Toast.show(errorMessage, {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
      onShow: () => {},
      onShown: () => {},
      onHide: () => {},
      onHidden: () => {
        dispatch(clearError());
      },
    });

    // You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
    setTimeout(function () {
      Toast.hide(toast);
    }, 500);
  }, [errorMessage]);

  return {};
}
export default useToastMessage;
