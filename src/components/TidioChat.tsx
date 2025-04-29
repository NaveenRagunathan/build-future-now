
import { useEffect } from 'react';

const TidioChat = () => {
  useEffect(() => {
    // Load Tidio Chat script
    const script = document.createElement('script');
    script.src = '//code.tidio.co/REPLACE_WITH_YOUR_TIDIO_KEY.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up - remove the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default TidioChat;
