import { useState } from "react";

export function useLocalStorage(key, initialValue) {

    const [value, setValue] = useState(() => {

        let data = localStorage.getItem(key);

        return data ? JSON.parse(data) : initialValue;
    });

    function setUser(newValue) {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    }

    return [value, setUser];
}