import { useState, useEffect } from 'react';

const useProductApi = () => {
  const apiUrl = 'https://dummyjson.com/products';
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => { 
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        setData(jsonData?.products);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

   fetchData();
   
  }, [apiUrl]);
  return { data, loading };
};


export default useProductApi;