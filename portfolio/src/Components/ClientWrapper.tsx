'use client';

import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

const ClientWrapper = () => {
  useEffect(() => {
    const disableRightClick = (e: MouseEvent) => {
      e.preventDefault();
      toast.error('Check Github Buddy 😎', {
        duration: 2000,
        position: 'bottom-center',
      });
    };

    document.addEventListener('contextmenu', disableRightClick);
    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
    };
  }, []);

  return null;
};

export default ClientWrapper;
