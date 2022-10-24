import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const updateUserStickers = (newStickersData) => {
    setUser({
      ...user,
      stickers: newStickersData,
    });
  };

  const updateUserDuplicates = (newDuplicatesData) => {
    setUser({
      ...user,
      duplicates: newDuplicatesData,
    });
  };

  let userProgress = 0;
  if (user?.stickers) {
    userProgress = Object.values(user?.stickers)?.reduce((currentCount, userSection) => {
      return currentCount + userSection.length;
    }, 0);
  }

  let totalDuplicates = 0;
  if (user?.duplicates) {
    totalDuplicates = Object.values(user?.duplicates)?.reduce((currentCount, userSection) => {
      return currentCount + userSection.length;
    }, 0);
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        updateUserStickers,
        updateUserDuplicates,
        userProgress,
        totalDuplicates,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
