import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {TextInput, TouchableRipple} from 'react-native-paper';
import {COLORS} from '../../constants';
import styles from './styles';

const LoadWalletScreen = ({navigation}) => {
  const [secretkey, setSecretkey] = useState('');

  return (
    <ScrollView style={styles.container}>
      {/* title text container */}
      <View style={styles.textwrapper}>
        <Text style={styles.titleText}>
          Crypto
          <Text style={{color: COLORS.gray}}>Xpress</Text>
        </Text>
      </View>
      {/* secretkey input */}
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
      {/* load wallet button */}
      <View style={styles.buttonWrapper}>
        <TouchableRipple
          onPress={() => navigation.replace('HomeScreen')}
          rippleColor={COLORS.gray}
          style={styles.button}>
          <Text style={styles.buttonText}>Load Wallet</Text>
        </TouchableRipple>
      </View>
    </ScrollView>
  );
};

export default LoadWalletScreen;
