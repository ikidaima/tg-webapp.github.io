import { api } from '../../shared/api';
import { NotVerifiedUser, VerifiedUser } from './types';

export const getUserInfo = (id: number) => api
  .get(`/login/${id}`)
  .then((response) => {
    if (response.status === 401) {
      const user: NotVerifiedUser = {
        isVerified: false,
        isRejected: false,
        isNew: true,
      };

      return user;
    }

    if (response.status === 403) {
      const user: NotVerifiedUser = {
        isVerified: false,
        isRejected: true,
      };

      return user;
    }

    return response.data as VerifiedUser ;
  });