import { useState, useCallback, useEffect } from 'react';
import { atom, useAtom, useAtomValue } from 'jotai';
import { getUserInfo } from '../api';
import { type User } from '../types';

const userAtom = atom<User>(null);

export const useAuth = function useAuth(id: string) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useAtom(userAtom);

  const fetch = useCallback(() => {
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