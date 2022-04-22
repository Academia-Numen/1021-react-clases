import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState({
        isError: false,
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    async function getData() {
        setIsLoading(true);
        try {
            const res = await axios(url);
            setData(res.data);
        } catch (err) {
            setError({
                isError: true,
                message: err.message || "Hubo un error"
            });
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, 1500);
        }
    }

    useEffect(() => {
        getData()
    }, []);

    return { data, error, isLoading };
}

export default useAxios;