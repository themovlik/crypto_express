import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {TextInput, TouchableRipple} from 'react-native-paper';
import BottomSheet from 'react-native-raw-bottom-sheet';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLORS, SIZES} from '../../constants';
import styles from './styles';
import '../../../global';

const Web3 = require('web3');
const provider = new Web3(
  new Web3.providers.HttpProvider(
    `https://ropsten.infura.io/v3/bee5b8012e4b442ab57ab39c482ec059`,
  ),
);
const web3 = new Web3(provider);

const HomeScreen = ({navigation}) => {
  // all the states
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [secretkey, setSecretkey] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // refs
  const refBottomSheet = useRef();

  // all the useEffect
  useEffect(() => {
    getSecretKey();
    transactionChecker();
  }, []);

  // all the functions

  // get secret key
  const getSecretKey = async () => {
    try {
      let key = await AsyncStorage.getItem('privateKey');
      setSecretkey(key);
    } catch (error) {
      Toast.show(error.message);
    }
  };

  // reset the private key
  const resetPrivateKey = async () => {
    await AsyncStorage.setItem('privateKey', '');
    navigation.navigate('LoadWalletScreen');
    Toast.show('Private Key Reset Successfully');
  };

  // transfer the amount from one account to another
  const transferAmount = async () => {
    try {
      setIsLoading(true);
      // get the amount
      const account = await web3.eth.accounts.privateKeyToAccount(secretkey);
      const nonce = await web3.eth.getTransactionCount(
        account.address,
        'latest',
      );

      // create the transaction
      const transaction = {
        from: account.address,
        to: walletAddress,
        value: web3.utils.toHex(amount.toString()),
        nonce: nonce,
        gas: '0x0',
        gasPrice: '0x0',
        gasLimit: 53000,
      };

      // sign the transaction
      const signedTransaction = await account.signTransaction(transaction);

      // send the transaction
      web3.eth.sendSignedTransaction(
        signedTransaction.rawTransaction,
        (error, hash) => {
          if (error) {
            Toast.show(error.message);
            setIsLoading(false);
          } else {
            Toast.show('Transaction Successful');
            setIsLoading(false);
            transactionChecker();
          }
        },
      );
    } catch (error) {
      Toast.show(error.message);
      setIsLoading(false);
    }
  };

  // transaction list
  const transactionChecker = async () => {
    let tempTransaction = [];
    let block = await web3.eth.getBlock('latest');
    if (block !== null && block.transactions !== null) {
      for (let txHash of block.transactions) {
        let tx = await web3.eth.getTransaction(txHash);
        if (tx.from === provider.address) {
          tempTransaction.push(tx);
          setTransactions(tempTransaction);
        }
      }
    }
  };

  // render the transactio list item
  const renderTransaction = item => {
    <View style={styles.transactionWrapper}>
      <Text numberOfLines={1} style={styles.transactionText}>
        From:{' '}
        <Text
          style={{
            ...styles.transactionText,
            textTransform: 'lowercase',
          }}>
          {item.from}
        </Text>
      </Text>
      <Text numberOfLines={1} style={styles.transactionText}>
        To:{' '}
        <Text
          style={{
            ...styles.transactionText,
            textTransform: 'lowercase',
          }}>
          {item.to}
        </Text>
      </Text>
      <Text numberOfLines={1} style={styles.transactionText}>
        Value:{' '}
        <Text
          style={{
            ...styles.transactionText,
            textTransform: 'lowercase',
          }}>
          {item.value}
        </Text>
      </Text>
    </View>;
  };

  return (
    <ScrollView style={styles.container}>
      {/* logo */}
      <View style={styles.textwrapper}>
        <Text style={styles.titleText}>
          Crypto
          <Text style={{color: COLORS.gray}}>Xpress</Text>
        </Text>
      </View>
      {/* reset wallet button */}
      <TouchableRipple style={styles.smallButton} onPress={resetPrivateKey}>
        <Text style={styles.buttonText}>Reset Wallet</Text>
      </TouchableRipple>
      <Text style={styles.mediumTitle}>Transfer Amount</Text>
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
          disabled={isLoading}
          onPress={transferAmount}
          rippleColor={COLORS.gray}
          style={styles.button}>
          {isLoading ? (
            <ActivityIndicator size="small" color={COLORS.white} />
          ) : (
            <Text style={styles.buttonText}>Transfer</Text>
          )}
        </TouchableRipple>
        {/* transfer history button */}
        <TouchableRipple
          onPress={() => refBottomSheet.current.open()}
          rippleColor={COLORS.gray}
          style={styles.transactionButton}>
          <Text style={styles.buttonText}>Transaction History</Text>
        </TouchableRipple>
      </View>
      {/* bottom sheet component */}
      <BottomSheet
        ref={refBottomSheet}
        closeOnDragDown={true}
        // onOpen={transactionChecker}
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
        {transactions && transactions.length > 0 ? (
          <FlatList
            data={transactions}
            nestedScrollEnabled={true}
            keyExtractor={item => item.hash}
            renderItem={({item}) => renderTransaction(item)}
          />
        ) : (
          <View style={styles.notransationWrapper}>
            <Text style={styles.transationText}>No Transations Available</Text>
          </View>
        )}
      </BottomSheet>
    </ScrollView>
  );
};

export default HomeScreen;
