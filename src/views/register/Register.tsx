import React from 'react';
import { 
  StyleSheet, Text, View, 
  Image, TextInput,
  ToastAndroid 
} from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';

export const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../../assets/chef.jpg')} 
        style={styles.imageBackground} 
      />
      <View style={styles.logoContainer}>
        <Image 
          source={require('../../../assets/user_image.png')}
          style={styles.logoImage}
         />

        <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>REGISTRARSE</Text>
        <View style={styles.formInput}>
          <Image
            source={require('../../../assets/user.png')}
            style={styles.formIcon}
          />
          <TextInput
            placeholder='Nombre'
            style={styles.formTextInput} 
            keyboardType="default"
          />
        </View>
        <View style={styles.formInput}>
          <Image
            source={require('../../../assets/my_user.png')}
            style={styles.formIcon}
          />
          <TextInput
            placeholder='Apellidos'
            style={styles.formTextInput} 
            keyboardType="default"
          />
        </View>
        <View style={styles.formInput}>
          <Image
            source={require('../../../assets/email.png')}
            style={styles.formIcon}
          />
          <TextInput
            placeholder='Correo electrónico'
            style={styles.formTextInput} 
            keyboardType="email-address"
          />
        </View>
        <View style={styles.formInput}>
          <Image
            source={require('../../../assets/user.png')}
            style={styles.formIcon}
          />
          <TextInput
            placeholder='Telefono'
            style={styles.formTextInput} 
            keyboardType="numeric"
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
          />
        </View>
        <View style={styles.formInput}>
          <Image
            source={require('../../../assets/password.png')}
            style={styles.formIcon}
          />
          <TextInput
            placeholder='Confirmar contraseña'
            style={styles.formTextInput} 
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>

        <View style={{ marginTop: 30 }}> 
         <RoundedButton text='CONFIRMAR' onPress={() => ToastAndroid.show('Click', ToastAndroid.SHORT)} />
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
    height: '70%',
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
    top: '5%',
    alignItems: 'center',
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
})