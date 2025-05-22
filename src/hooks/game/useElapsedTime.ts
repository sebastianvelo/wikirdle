import { useState, useEffect } from 'react';

/**
 * Devuelve los segundos transcurridos desde `startTime`
 * y se actualiza cada segundo.
 */
const useElapsedTime = (startTime: number | undefined): number => {
    const [now, setNow] = useState(Date.now());

    useEffect(() => {
        if (!startTime) return;
        const interval = setInterval(() => setNow(Date.now()), 1000);
        return () => clearInterval(interval);
    }, [startTime]);

    return startTime ? Math.floor((now - startTime) / 1000) : 0;
}

export default useElapsedTime;