import { useEffect, RefObject } from "react";

const useInteractionOutsideRef = (
  ref: RefObject<HTMLElement>,
  callback: () => void
) => {
  useEffect(() => {
	const handleOutsideInteraction = (event: MouseEvent | FocusEvent) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
		  ref.current.blur();
		  callback();
		}
	};

    document.addEventListener('click', handleOutsideInteraction);
    document.addEventListener('focusin', handleOutsideInteraction);

    return () => {
      document.removeEventListener('click', handleOutsideInteraction);
      document.removeEventListener('focusin', handleOutsideInteraction);
    };
  }, [ref, callback]);
};

export default useInteractionOutsideRef;
