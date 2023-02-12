import React, { useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, Platform, ToastAndroid, Alert } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles';

export const HomeScreen = () => {
  const { email, password, onChange, login, errorMessage } = useViewModel();

  useEffect(() => {
    if(errorMessage !== '') {
      Platform.OS === 'android' ? ToastAndroid.show(errorMessage, ToastAndroid.SHORT) : Alert.alert('Lo sentimos', errorMessage);
    }
  }, [errorMessage])

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../../../assets/chef.jpg')} 
        style={styles.imageBackground} 
      />
      <View style={styles.logoContainer}>
        <Image 
          source={require('../../../../assets/logo.png')}
          style={styles.logoImage}
         />

        <Text style={styles.logoText}>FOOD APP</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>Ingresar</Text>
        <CustomTextInput
          image={require('../../../../assets/email.png')}
          placeholder='Correo electrónico'
          keyboardType="email-address"
          property='email'
          onChangeText={ onChange }
          value={ email }
        />
        <CustomTextInput
          image={require('../../../../assets/password.png')}
          placeholder="Contraseña"
          keyboardType='default'
          secureTextEntry={true}
          value={password}
          property="password"
          onChangeText={ onChange }
        /> 
        <View style={{ marginTop: 30 }}> 
          <RoundedButton
            text='LOGIN'
            onPress={ () => login()}
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

