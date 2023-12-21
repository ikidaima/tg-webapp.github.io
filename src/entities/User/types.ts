export interface VerifiedUser {
  tagsPerson: string[];
  tagsOrganization: string[];
  isVerified: true;
}
export interface NotVerifiedUser {
  isRejected: boolean;
  isVerified: boolean;
  isNew?: boolean;
}

export type User = VerifiedUser | NotVerifiedUser | null;
