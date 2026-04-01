import { useState } from "react";

export const useNavigation = (initialTab = "Home") => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const navigateTo = (tabName: string) => {
    setActiveTab(tabName);
  };

  return { activeTab, navigateTo };
};
