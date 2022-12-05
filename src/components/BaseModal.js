import ReactDOM from 'react-dom';
import { useEffect, useRef } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import useEvent from '../hooks/useEvent';

function BaseModal({ classes, onClose: handleClose, children }) {
  const ref = useRef();
  const contentRef = useRef();

  useEffect(() => {
    setTimeout(animate);
  });

  useEvent('keydown', handleEsc);

  function handleEsc({ key }) {
    if (key === 'Escape') close();
  }

  function close() {
    animate(true);

    setTimeout(handleClose, 500);
  }

  function animate(isClosing = false) {
    ref.current.classList.toggle('opacity-0', isClosing);
    contentRef.current.classList.toggle('-translate-y-10', isClosing);
  }

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black/70 z-30 flex justify-center items-center opacity-0 transition-opacity duration-500"
      role="dialog"
      ref={ref}
      onClick={close}
    >
      <div
        className={`flex flex-col relative text-white rounded-xl -translate-y-10 transition-transform duration-500 ${classes}`}
        ref={contentRef}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="absolute right-0 p-3 text-neutral-500 hover:text-neutral-200"
          onClick={close}
        >
          <XMarkIcon className="h-8 w-8" />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default BaseModal;
