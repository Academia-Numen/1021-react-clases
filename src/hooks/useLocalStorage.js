import { useEffect, useReducer } from "react";

const useLocalStorage = (key, valorInicial, funcionReductora) => {

    const [data, dispatch] = useReducer(funcionReductora, [], () => {
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