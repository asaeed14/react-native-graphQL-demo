/**
 *
 * DropdownModal
 *
 */
import React, { useRef } from 'react';
import { Modal, ScrollView, View } from 'react-native';
import TouchFeedback from 'theme/TouchFeedback';
import Text from 'theme/Text';
import Radio from 'theme/Radio';
import style from './style';
import { DataProps } from '../types';

type DropdownModalProps = {
  visible?: boolean;
  onRequestClose?: (...args: any[]) => any;
  title: object;
  data: DataProps[];
  onSelect?: (...args: any[]) => any;
  selectedValue?: string;
  selectionProperty?: string;
};

const DropdownModal: React.FC<DropdownModalProps> = ({
  visible = true,
  onRequestClose = () => {},
  onSelect = () => {},
  selectedValue = '',
  selectionProperty = '',
  ...props
}) => {
  const scroll = useRef(null);
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <View style={style.modal}>
        <TouchFeedback onPress={onRequestClose} style={style.overlay} />
        <ScrollView
          ref={scroll}
          style={style.scroll}
          contentContainerStyle={style.content}
          stickyHeaderIndices={[0]}
          bounces={false}
        >
          <Text style={style.header}>{props.title}</Text>
          {props.data.map((item) => (
            <Radio
              key={item.key || item.label}
              onPress={() => {
                onRequestClose();
                onSelect(item);
              }}
              active={selectedValue === item[selectionProperty]}
              label={item.label || item.title}
            />
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default DropdownModal;
