export interface VerifiedUser {
  tagsPerson: string[];
  tagsOrganization: string[]; 
}
export interface NotVerifiedUser {
  isRejected: boolean;
  isVerified: boolean;
  isNew?: boolean;
}

export type User = VerifiedUser | NotVerifiedUser | null;
