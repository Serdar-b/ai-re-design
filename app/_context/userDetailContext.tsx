import { createContext, Dispatch, SetStateAction } from "react";

export interface UserDetail {
  name: string;
  email: string;
  imageUrl: string;
}

interface UserDetailContextType {
  userDetail: UserDetail[];
  setUserDetail: Dispatch<SetStateAction<UserDetail[]>>;
}

// Create the context with the correct type
export const UserDetailContext = createContext<UserDetailContextType | null>(
  null
);
