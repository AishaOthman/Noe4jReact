declare interface WakeLockSentinel extends EventTarget {
    readonly released: boolean;
    release(): Promise<void>;
  }
  
  interface Navigator {
    readonly wakeLock: {
      request(type: 'screen' | 'system'): Promise<WakeLockSentinel>;
      request(type: 'screen' | 'system', options: { signal?: AbortSignal }): Promise<WakeLockSentinel>;
    };
  }
  