import {useEffect, useState} from 'react';
import {View} from 'react-native';

const usePagePosition = <T extends View>(ref: T | null) => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    ref?.measure((relativeX, relativeY, width, height, pageX, pageY) => {
      const x = Math.round(pageX);
      const y = Math.round(pageY);

      if (x !== position.x || y !== position.y) {
        setPosition({x, y});
      }
    });
  });

  return position;
};

export default usePagePosition;
