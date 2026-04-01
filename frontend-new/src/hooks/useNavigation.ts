import { useNavigate, useLocation } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveTab = () => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/timeline":
        return "Timeline";
      case "/scan":
        return "Scan";
      case "/reports":
        return "Reports";
      case "/settings":
        return "Settings";
      default:
        return "Home";
    }
  };

  const activeTab = getActiveTab();
  const navigateTo = (tabName: string) => {
    const path = tabName === "Home" ? "/" : `/${tabName.toLowerCase()}`;
    navigate(path);
  };

  return { activeTab, navigateTo };
};
