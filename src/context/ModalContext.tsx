import React, { useContext, createContext } from "react";

const DEFAULT_PROPS = {
  isModalOpen: false,
  handleClose: () => {},
  handleOpen: () => {},
};

export const ModalContext = createContext<ContextProps>(DEFAULT_PROPS);

interface ContextProps {
  isModalOpen: boolean;
  handleClose: () => void;
  handleOpen: () => void;
}

interface IProviderProps {
  children: React.ReactElement;
}

export const ModalProvider = ({ children }: IProviderProps) => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleOpen = () => {
    setModalOpen(true);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        handleClose,
        handleOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext(ModalContext);
};

export default ModalProvider;
