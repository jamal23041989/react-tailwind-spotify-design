import { useState } from 'react';

function useModal() {
  const [isOpen, setIsOpen] = useState();

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return {
    open,
    close,
    isOpen,
  };
}

export default useModal;
