import { useState } from 'react';
import { ApiDelivery } from '../../../Data/sources/remote/api/ApiDelivery';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';

const RegisterViewModel = () => {
  const [values, setValues] = useState({
    name: '',
    lastname: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [ property]: value })
  }

  const register = async () => {
    const { result, error } = await RegisterAuthUseCase(values);
    console.log('RESULT ' + JSON.stringify(result));
    console.log('ERROR ' + JSON.stringify(error));
    
  }

  return {
    ...values,
    onChange,
    register
  }
}

export default RegisterViewModel;