import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {TextInput, TouchableRipple} from 'react-native-paper';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLORS} from '../../constants';
import styles from './styles';
import '../../../global';
const Web3 = require('web3');

const LoadWalletScreen = ({navigation}) => {
  //all the states
  const [secretkey, setSecretkey] = useState('');

  // all the useEffect
  useEffect(() => {
    isKeyAvailable();
  }, []);

  //all the functions

  //check if the key is available on the device
  const isKeyAvailable = async () => {
    const key = await AsyncStorage.getItem('privateKey');
    if (key && key.length > 0) {
      navigation.navigate('HomeScreen');
    } else {
      navigation.navigate('LoadWalletScreen');
    }
  };

  //load the wallet
  const handleLoadWallet = async () => {
    try {
      const web3 = new Web3(
        new Web3.providers.HttpProvider(
          `https://ropsten.infura.io/v3/bee5b8012e4b442ab57ab39c482ec059`,
        ),
      );
      const account = await web3.eth.accounts.privateKeyToAccount(secretkey);
      if (account) {
        await AsyncStorage.setItem('privateKey', account.privateKey);
        Toast.show('Wallet Loaded Successfully');
        navigation.navigate('HomeScreen');
      }
    } catch (error) {
      Toast.show(error.message);
    }
  };

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
          onPress={handleLoadWallet}
          rippleColor={COLORS.gray}
          style={styles.button}>
          <Text style={styles.buttonText}>Load Wallet</Text>
        </TouchableRipple>
      </View>
    </ScrollView>
  );
};

export default LoadWalletScreen;
