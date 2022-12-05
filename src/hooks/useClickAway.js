import useEvent from './useEvent';

function useClickAway(ref, handler, shouldHandle = true) {
  useEvent('mousedown', handleMousedown);

  function handleMousedown(event) {
    const handle =
      shouldHandle instanceof Function ? shouldHandle(event) : shouldHandle;

    if (handle && !ref.current.contains(event.target)) handler();
  }
}

export default useClickAway;
