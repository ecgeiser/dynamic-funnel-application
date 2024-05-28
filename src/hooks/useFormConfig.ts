import { useState, useEffect } from 'react';
import { Config } from '../../global';

const useFormConfig = (): { config: Config | null; loading: boolean } => {
    const [config, setConfig] = useState<Config | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchConfig = async (): Promise<void> => {
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