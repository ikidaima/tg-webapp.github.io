import { useState, useCallback, useEffect } from 'react';
import { atom, useAtom, useAtomValue } from 'jotai';
import { useMutation } from '@tanstack/react-query';
import { getUserInfo, userDescribe } from '../api';
import { type User } from '../types';

export const userAtom = atom<User>(null);

export const useAuth = function useAuth(id?: number) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useAtom(userAtom);

  const fetch = useCallback(() => {
    if (!id) {
      setUser({
        isVerified: false,
        isRejected: true,
      });
      return;
    }

    getUserInfo(id)
      .then((data) => {
        if (data) {
          setUser(data);
        }
      })
      .catch(() => null)
      .finally(() => {
        setIsLoading(false);
      });
  }, [setUser, id]);

  useEffect(() => {
    if (!user) {
      fetch();
    }
  }, [fetch, user]);

  return {
    user,
    isLoading,
    refetch: fetch,
  };
};


export const useUser = () => {
  return useAtomValue(userAtom);
};

export const useUserDescribe = () => {
  return useMutation({
    mutationFn: userDescribe,
  });
}