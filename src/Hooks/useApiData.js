import { useState, useEffect } from 'react';

const useApiData = (containerSize = '20FT', containerType = 'dry') => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `https://test-api.oneport365.com/api/live_rates/get_special_rates_no_auth?container_size=${containerSize}&container_type=${containerType}`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
  
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [containerSize, containerType]);
  

  return { data, loading, error };
};

export default useApiData;
