import { useEffect, useState } from 'react';
import './wake-lock';

type WakeLockType = 'screen' | 'system';

function useWakeLock(type: WakeLockType | undefined): boolean {
  const [isWakeLockSupported, setIsWakeLockSupported] = useState(false);

  useEffect(() => {
    let wakeLock: WakeLockSentinel | null = null;

    async function requestWakeLock() {
      try {
        // Check if wake lock is supported
        if ('wakeLock' in navigator) {
          setIsWakeLockSupported(true);

          // Request the wake lock
          if (type === 'screen') {
            wakeLock = await navigator.wakeLock.request('screen');
          } else if (type === 'system') {
            // Handle the "system" type separately (e.g., log a warning)
            console.warn('Wake lock type "system" is not supported for preventing screen dimming or auto sleep.');
          }
        }
      } catch (error) {
        console.error('Error requesting wake lock:', error);
      }
    }

    requestWakeLock();

    return () => {
      // Release the wake lock when the component is unmounted
      if (wakeLock) {
        wakeLock.release().catch((error: any) => {
          console.error('Error releasing wake lock:', error);
        });
      }
    };
  }, [type]);

  return isWakeLockSupported;
}

export default useWakeLock;
