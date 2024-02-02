// useCookie.js
import { useState, useEffect } from 'react';

const useCookie = (cookieName) => {
  const [cookieValue, setCookieValue] = useState(null);

  useEffect(() => {
    const storedCookie = localStorage.getItem(cookieName);
    setCookieValue(storedCookie);
  }, [cookieName]);

  const setCookie = (value) => {
    localStorage.setItem(cookieName, value);
    setCookieValue(value);
  };

  const deleteCookie = () => {
    localStorage.removeItem(cookieName);
    setCookieValue(null);
  };

  return { cookieValue, setCookie, deleteCookie };
};

export default useCookie;
