import { useEffect, useState } from 'react';

const useHomeData = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timeout);
  }, []);

  return { loading };
};

export default useHomeData;
