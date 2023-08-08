import React, { useState, useEffect } from 'react';

const LocalTime = () => {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    // Update the local time every second
    const interval = setInterval(() => {
      // const currentTime = moment().format('YYYY-MM-DD HH:mm:ss');
      const currentTime = new Date().toLocaleString([], {
        hour: '2-digit',
        minute: '2-digit',
        // second: '2-digit',
      });
      setLocalTime(currentTime);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return <span>{localTime}</span>;
};

export default LocalTime;
