import React, { useContext, createContext } from "react";

const DEFAULT_PROPS = {
  isNotificationOpen: false,
  handleClose: () => {},
  handleOpen: () => {},
};

export const NotificationContext = createContext<ContextProps>(DEFAULT_PROPS);

type ContextProps = any;

interface IProviderProps {
  children: React.ReactElement;
}

export const NotificationProvider = ({ children }: IProviderProps) => {
  const [notificationType, setNotificationType] = React.useState("");

  const handleClose = () => {
    setNotificationType("");
  };

  const handleOpen = (type: "error" | "success") => {
    setNotificationType(type);
  };

  return (
    <NotificationContext.Provider
      value={{
        notificationType,
        handleClose,
        handleOpen,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => {
  return useContext(NotificationContext);
};

export default NotificationProvider;
