import { api } from '../../shared/api';
import { NotVerifiedUser, VerifiedUser } from './types';

export const getUserInfo = (id: number) => api
  .get(`api/users/login/${id}/`, { validateStatus: () => true })
  .then((response) => {
    if (response.status === 200) {
      return {
        isVerified: true,
        tagsPerson: response.data?.tagsPerson || [],
        tagsOrganization: response.data?.tagsOrganization || [],
      } as VerifiedUser;
    }

    if (response.status === 401) {
      const user: NotVerifiedUser = {
        isVerified: false,
        isRejected: false,
        isNew: true,
      };

      return user;
    }

    if (response.status === 423) {
      const user: NotVerifiedUser = {
        isVerified: false,
        isRejected: false,
      };

      return user;
    }

      const user: NotVerifiedUser = {
        isVerified: false,
        isRejected: true,
      };

      return user;
  });

  export const userDescribe = (body: {
    sysId: number;
    userName: string
    firstName: string;
    lastName: string;
  }) => api
  .post(`api/users/register`, body)