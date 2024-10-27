import { createContext, Dispatch, SetStateAction, useContext } from "react";
import type { UserDetail } from "../provider";

// Define the context type with both `userDetail` and `setUserDetail`
export interface UserDetailContextType {
  userDetail: UserDetail;
  setUserDetail: Dispatch<SetStateAction<UserDetail>>;
}

export const UserDetailContext = createContext<
  UserDetailContextType | undefined
>(undefined);

export const useUserDetailContext = () => {
  const context = useContext(UserDetailContext);

  if (context === undefined) {
    throw new Error(
      "useUserDetailContext must be used within a UserDetailContext.Provider"
    );
  }

  return context;
};
