import { api } from '../../shared/api';
import { NotVerifiedUser, VerifiedUser } from './types';

export const getUserInfo = (id: string) => api
  .get(`http://192.168.192.232:8099/login/${id}`)
  .then((response) => {
    if (response.status === 401) {
      const user: NotVerifiedUser = {
        isVerified: false,
        isRejected: false,
        isNew: true,
      };

      return user;
    }

    return response.data as VerifiedUser ;
  });