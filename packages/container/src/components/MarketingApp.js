import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

const MarketingApp = () => {
  const ref = useRef();

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div className='marketing-wrapper' ref={ref} />;
};

export default MarketingApp;
