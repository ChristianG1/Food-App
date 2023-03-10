import React, { useEffect } from 'react';
import { 
  Text, View, 
  Image,
  ScrollView,
  ToastAndroid,
  Alert,
  Platform,
  TouchableOpacity
} from 'react-native';

import { CustomTextInput } from '../../components/CustomTextInput';
import { RoundedButton } from '../../components/RoundedButton';
import useViewModel from './ViewModel';
import styles from './Styles';
import { useState } from 'react';
import { ModalPickImage } from '../../components/ModalPickImage';

export const RegisterScreen = () => {
  const { name, lastname, email, image, phone, password, confirmPassword, onChange, register, errorMessage, pickImage, takePhoto } = useViewModel();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
    if(errorMessage != '') {
      Platform.OS === 'android' ? ToastAndroid.show(errorMessage, ToastAndroid.LONG) : Alert.alert('Información incorrecta', errorMessage, ) 
    }
  }, [errorMessage])


  return (
    <View style={styles.container}>
      <Image 
          source={require('../../../../assets/chef.jpg')} 
          style={styles.imageBackground} 
      />
      <View style={styles.logoContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          {
            image === ''
            ? 
              <Image
                source={require('../../../../assets/user_image.png')}
                style={styles.logoImage}
              />
            :
              <Image
                source={{ uri: image }}
                style={styles.logoImage}
              />
          }
        </TouchableOpacity>

        <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
      </View>
      <View style={styles.form}>
        <ScrollView>
          <Text style={styles.formText}>REGISTRARSE</Text>
          <CustomTextInput
            image={require('../../../../assets/user.png')}
            placeholder="Nombre"
            value={name}
            keyboardType="default"
            property='name'
            onChangeText={ onChange }
          />
          <CustomTextInput
            image={require('../../../../assets/my_user.png')}
            placeholder="Apellidos"
            value={lastname}
            keyboardType="default"
            property='lastname'
            onChangeText={ onChange }
          />
          <CustomTextInput
            image={require('../../../../assets/email.png')}
            placeholder="Correo electrónico"
            value={email}
            keyboardType="default"
            property='email'
            onChangeText={ onChange }
          />
          <CustomTextInput
            image={require('../../../../assets/phone.png')}
            placeholder="Teléfono"
            value={phone}
            keyboardType="numeric"
            property='phone'
            onChangeText={ onChange }
          />
          <CustomTextInput
            image={require('../../../../assets/password.png')}
            placeholder="Contraseña"
            value={password}
            keyboardType="default"
            secureTextEntry={true}
            property='password'
            onChangeText={ onChange }
          />
          <CustomTextInput
            image={require('../../../../assets/password.png')}
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            keyboardType="default"
            secureTextEntry={true}
            property='confirmPassword'
            onChangeText={ onChange }
          />
          <View style={{ marginTop: 30 }}> 
          <RoundedButton text='CONFIRMAR' onPress={() => {register()}} />
          </View>
        </ScrollView>
      </View>
      <ModalPickImage
        openGallery={ pickImage }
        openCamera={ takePhoto }
        modalUseState={ modalVisible }
        setModalUseState={ setModalVisible }
      />
    </View>
  )
}
