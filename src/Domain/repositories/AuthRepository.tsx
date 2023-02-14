import { ResponseAPIDelivery } from '../../Data/sources/remote/models/ResponseApiDelivery';
import { User } from "../entities/User";
import * as ImagePicker from 'expo-image-picker';

export interface AuthRepository {
  register(user: User): Promise<ResponseAPIDelivery>;
  login(email: string, password: string): Promise<ResponseAPIDelivery>;
  registerWithImage(user: User, file: ImagePicker.ImageInfo): Promise<ResponseAPIDelivery>
}