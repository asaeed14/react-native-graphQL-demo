import React, { useState, useEffect } from 'react';
import { View, Keyboard } from 'react-native';
import style from './style';

interface ScreenFooterProps {
  children: React.ReactNode;
}
const ScreenFooter: React.FC<ScreenFooterProps> = (props) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const listener = Keyboard.addListener('keyboardDidShow', () => {
      setShow(false);
    });
    return () => listener.remove();
  }, []);

  useEffect(() => {
    const listener = Keyboard.addListener('keyboardDidHide', () => {
      setShow(true);
    });
    return () => listener.remove();
  }, []);

  if (!show) {
    return null;
  }
  return <View style={style.footer}>{props.children}</View>;
};

export default React.memo(ScreenFooter);
