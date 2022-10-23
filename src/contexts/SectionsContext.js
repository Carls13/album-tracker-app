import { createContext, useEffect, useState } from "react";

import { getAllSections } from "../services/sectionsService";

export const SectionsContext = createContext(null);

export const SectionsContextProvider = ({ children }) => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    getAllSections().then((response) => {
      const sectionsData = response.data.body;

      setSections(sectionsData);
    });
  }, []);

  const totalStickers = sections.reduce((currentCount, currentSection) => {
    return currentCount + currentSection.amount;
  }, 0);

  return (
    <SectionsContext.Provider value={{ sections, totalStickers }}>
      {children}
    </SectionsContext.Provider>
  );
};
