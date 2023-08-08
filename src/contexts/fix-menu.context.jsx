import { createContext, useState } from 'react';

export const FixMenuContext = createContext({
  isHitTarget: false,
  isFixMenuVisible: false,
});

export const FixMenuProvider = ({ children }) => {
  const [isHitTarget, setIsHitTarget] = useState(false);
  const [isFixMenuVisible, setIsFixMenuVisible] = useState(false);

  const value = {
    isHitTarget,
    setIsHitTarget,
    isFixMenuVisible,
    setIsFixMenuVisible,
  };

  return (
    <FixMenuContext.Provider value={value}>{children}</FixMenuContext.Provider>
  );
};
