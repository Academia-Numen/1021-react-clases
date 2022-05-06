import { useEffect, useReducer } from "react";

const useLocalStorage = (key, valorInicial, reducer) => {

    const [data, dispatch] = useReducer(reducer, [], () => {
        const localData = localStorage.getItem(key);
        return localData ? JSON.parse(localData) : valorInicial;
    });

    useEffect(() => {
        const stringifiedData = JSON.stringify(data);
        localStorage.setItem(key, stringifiedData);
    }, [data]);

    return [data, dispatch];
}

export default useLocalStorage;