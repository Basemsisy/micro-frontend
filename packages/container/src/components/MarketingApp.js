import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

const MarketingApp = () => {
  const ref = useRef();

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default MarketingApp;
