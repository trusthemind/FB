import React, { useRef, useEffect } from 'react';
import { Card } from 'antd';

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
   
        
  }, []);

  return <p className = 'cardmap' ref={mapContainerRef}></p>;
};

export default Map;