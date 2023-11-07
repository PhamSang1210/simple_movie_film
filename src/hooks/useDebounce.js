import { useEffect, useState } from "react";

function useDebounce(initializeValue = "", delay = 1000) {
    const [useDebounceValue, setUsedebounceValue] = useState(initializeValue);

    useEffect(() => {
        const timer = setTimeout(() => {
            setUsedebounceValue(initializeValue);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [delay, initializeValue]);

    return useDebounceValue;
}

export { useDebounce };
