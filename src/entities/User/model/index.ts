import { useState, useCallback, useEffect } from 'react';
import { atom, useAtom, useAtomValue } from 'jotai';

interface VerifiedUser {
  tagsPerson: string[];
  tagsOrganization: string[]; 
}
interface WaitVerifyUser {
  isRejected: boolean;
  isVerified: boolean;
}

type User = VerifiedUser | WaitVerifyUser | null;

const userAtom = atom(null);

export const useAuth = function useAuth() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useAtom(userAtom);

  const fetch = useCallback(() => {
    // getUserInfo()
    //   .then((data) => {
    //     if (data) {
    //       setUser(data);
    //     }
    //   })
    //   .catch(() => null)
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  }, [setUser]);

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