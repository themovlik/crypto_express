import React, {useState, useRef} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {TextInput, TouchableRipple} from 'react-native-paper';
import BottomSheet from 'react-native-raw-bottom-sheet';
import {COLORS, SIZES} from '../../constants';
import styles from './styles';

const HomeScreen = () => {
  // all the states
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('');

  // refs
  const refBottomSheet = useRef();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.textwrapper}>
        <Text style={styles.titleText}>
          Crypto
          <Text style={{color: COLORS.gray}}>Xpress</Text>
        </Text>
      </View>
      {/* wallet address input */}
      <TextInput
        label="Wallet Address"
        value={walletAddress}
        style={styles.textInput}
        placeholderTextColor={COLORS.gray}
        underlineColor={COLORS.secondary}
        activeUnderlineColor={COLORS.secondary}
        onChangeText={adress => setWalletAddress(adress)}
        theme={{
          colors: {text: COLORS.black, placeholder: COLORS.gray},
        }}
      />
      {/* amount input */}
      <TextInput
        label="Amount"
        value={amount}
        style={styles.textInput}
        placeholderTextColor={COLORS.gray}
        underlineColor={COLORS.secondary}
        activeUnderlineColor={COLORS.secondary}
        onChangeText={adress => setAmount(adress)}
        theme={{
          colors: {text: COLORS.black, placeholder: COLORS.gray},
        }}
      />
      {/* transfer button */}
      <View style={styles.buttonWrapper}>
        <TouchableRipple
          onPress={() => console.log('pressed')}
          rippleColor={COLORS.gray}
          style={styles.button}>
          <Text style={styles.buttonText}>Transfer</Text>
        </TouchableRipple>
        {/* transfer history button */}
        <TouchableRipple
          onPress={() => refBottomSheet.current.open()}
          rippleColor={COLORS.gray}
          style={{
            ...styles.button,
            marginTop: 10,
            backgroundColor: COLORS.gray,
          }}>
          <Text style={styles.buttonText}>Transaction History</Text>
        </TouchableRipple>
      </View>
      {/* bottom sheet component */}
      <BottomSheet
        ref={refBottomSheet}
        closeOnDragDown={true}
        height={SIZES.height * 0.7}
        customStyles={{
          container: {
            borderTopLeftRadius: SIZES.radius,
            borderTopRightRadius: SIZES.radius,
          },
          draggableIcon: {
            backgroundColor: COLORS.gray,
          },
        }}>
        {/* transaction list component */}
        <View style={styles.notransationWrapper}>
          <Text style={styles.transationText}>No Transations Available</Text>
        </View>
      </BottomSheet>
    </ScrollView>
  );
};

export default HomeScreen;
