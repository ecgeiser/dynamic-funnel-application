import { useState, useEffect } from 'react';

const useFormConfig = () => {
    const [config, setConfig] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchConfig = async () => {
          try {
            setLoading(true);
            
            const response = await fetch('/config.json');
            const data = await response.json();
            
            setConfig(data);
          } catch (err) {
            console.log("Problem loading config: ", err);
          } finally {
            setLoading(false);
          }
        }
    
        fetchConfig();
      }, []);

    return { config, loading };
};

export default useFormConfig;