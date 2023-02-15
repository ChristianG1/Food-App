import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { RegisterWithImageAuthUseCase } from '../../../Domain/useCases/auth/RegisterWithImageAuth';
import { SaveUserLocalUseCase } from '../../../Domain/useCases/userLocal/SaveUserLocal';
import { useUserLocal } from '../../hooks/useUserLocal';
const RegisterViewModel = () => {

  const [errorMessage, setErrorMessage] = useState('');
  const [file, setFile] = useState<ImagePicker.ImagePickerAsset>()
  const { user, getUserSession } = useUserLocal();
  const [values, setValues] = useState({
    name: '',
    lastname: '',
    phone: '',
    email: '',
    image: '',
    password: '',
    confirmPassword: '',
  })
  const [loading, setLoading] = useState(false);

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
      setLoading(true);
      const response = await RegisterWithImageAuthUseCase(values, file!)
      setLoading(false);
      console.log('RESULT ' + JSON.stringify(response));

      if(response.success) {
        await SaveUserLocalUseCase(response.data);
        getUserSession();
      } else {
        setErrorMessage(response.message);
      }
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
      setErrorMessage('Ingresa tu correo electrónico');
      return false;
    }
    if(values.phone === '') {
      setErrorMessage('Ingresa tu teléfono');
      return false;
    }
    if(values.password === '') {
      setErrorMessage('Ingresa tu contraseña');
      return false;
    }
    if(values.confirmPassword === '') {
      setErrorMessage('Ingresa la confirmación de la contraseña');
      return false;
    }

    if(values.password !== values.confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden');
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
    user,
    loading,
  }
}

export default RegisterViewModel;