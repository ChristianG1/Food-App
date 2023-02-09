import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TextInput, ToastAndroid, TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

export const HomeScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log('first');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../../assets/chef.jpg')} 
        style={styles.imageBackground} 
      />
      <View style={styles.logoContainer}>
        <Image 
          source={require('../../../assets/logo.png')}
          style={styles.logoImage}
         />

        <Text style={styles.logoText}>FOOD APP</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>Ingresar</Text>
        <View style={styles.formInput}>
          <Image
            source={require('../../../assets/email.png')}
            style={styles.formIcon}
          />
          <TextInput
            placeholder='Correo electrónico'
            style={styles.formTextInput} 
            keyboardType="email-address"
            value={email}
            onChangeText={ text => setEmail(text) }
          />
        </View>
        
        <View style={styles.formInput}>
          <Image
            source={require('../../../assets/password.png')}
            style={styles.formIcon}
          />
          <TextInput
            placeholder='Contraseña'
            style={styles.formTextInput} 
            keyboardType="default"
            secureTextEntry={true}
            value={password}
            onChangeText={ text => setPassword(text) }
          />
        </View>

        <View style={{ marginTop: 30 }}> 
          <RoundedButton
            text='LOGIN'
            onPress={ () => {
              console.log(`Email: ${email} - Password: ${password}`);
            }}
          />
        </View>

        <View style={styles.formRegister}>
          <Text>No tienes cuenta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.formRegisterText}>Registrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
    bottom: '30%'
  },
  form: {
    width: '100%',
    height: '40%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
  },
  formText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16
  },
  formInput: {
    flexDirection: 'row',
    marginTop: 30,
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#AAAAAA',
    marginLeft: 15,
  },
  formIcon: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
  formRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  formRegisterText: {
    fontStyle: 'italic',
    color: 'orange',
    borderBottomWidth: 1,
    borderBottomColor: 'orange',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  logoContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '15%',
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  logoText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
});
