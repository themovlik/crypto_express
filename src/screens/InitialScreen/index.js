import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Button, TextInput, TouchableRipple} from 'react-native-paper';
import {COLORS, FONTS} from '../../constants';
import styles from './styles';

const LoadWalletScreen = ({navigation}) => {
  const [secretkey, setSecretkey] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.textwrapper}>
        <Text style={styles.titleText}>
          Crypto
          <Text style={{color: COLORS.black}}>Xpress</Text>
        </Text>
      </View>
      <TextInput
        label="Enter Your Secret Key"
        value={secretkey}
        style={styles.textInput}
        placeholderTextColor={COLORS.gray}
        underlineColor={COLORS.secondary}
        activeUnderlineColor={COLORS.secondary}
        onChangeText={key => setSecretkey(key)}
        theme={{
          colors: {text: COLORS.black, placeholder: COLORS.gray},
        }}
      />
      <View style={styles.buttonWrapper}>
        <TouchableRipple
          onPress={() => navigation.replace('HomeScreen')}
          rippleColor={COLORS.gray}
          style={styles.button}>
          <Text style={styles.buttonText}>Load Wallet</Text>
        </TouchableRipple>
      </View>
    </View>
  );
};

export default LoadWalletScreen;
