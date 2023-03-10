import { useState } from 'react';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';
import * as ImagePicker from 'expo-image-picker';
import { RegisterWithImageAuthUseCase } from '../../../Domain/useCases/auth/RegisterWithImageAuth';

const RegisterViewModel = () => {

  const [errorMessage, setErrorMessage] = useState('');
  const [file, setFile] = useState<ImagePicker.ImagePickerAsset>()
  const [values, setValues] = useState({
    name: '',
    lastname: '',
    phone: '',
    email: '',
    image: '',
    password: '',
    confirmPassword: '',
  })

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true, 
      quality: 1,
    });

    if(!result.canceled) {
      onChange('image', result.assets[0].uri);
      setFile(result.assets[0]);
    }
  }

  const takePhoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true, 
      quality: 1,
    });

    if(!result.canceled) {
      onChange('image', result.assets[0].uri);
      setFile(result.assets[0]);
    }
  }

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [ property]: value })
  }

  const register = async () => {
    if (isValidForm()) {
      // const response = await RegisterAuthUseCase(values);
      const response = await RegisterWithImageAuthUseCase(values, file!)
      console.log('RESULT ' + JSON.stringify(response));
    }
  }

  const isValidForm = (): boolean => {
    if(values.name === '') {
      setErrorMessage('Ingresa tu nombre');
      return false;
    }
    if(values.lastname === '') {
      setErrorMessage('Ingresa tu apellido');
      return false;
    }
    if(values.email === '') {
      setErrorMessage('Ingresa tu correo electr??nico');
      return false;
    }
    if(values.phone === '') {
      setErrorMessage('Ingresa tu tel??fono');
      return false;
    }
    if(values.password === '') {
      setErrorMessage('Ingresa tu contrase??a');
      return false;
    }
    if(values.confirmPassword === '') {
      setErrorMessage('Ingresa la confirmaci??n de la contrase??a');
      return false;
    }

    if(values.password !== values.confirmPassword) {
      setErrorMessage('Las contrase??as no coinciden');
      return false;
    }
    if(values.image === '') {
      setErrorMessage('Selecciona una imagen');
      return false;
    }

    return true;
  }

  return {
    ...values,
    onChange,
    register,
    pickImage,
    errorMessage,
    takePhoto,
  }
}

export default RegisterViewModel;