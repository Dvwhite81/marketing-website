import { useEffect, useState } from "react";

interface FeatureProps {
  index: number;
  activeIndex: number;
  item: string;
}

const Feature = ({ index, activeIndex, item }: FeatureProps) => {
  const [featureClass, setFeatureClass] = useState('');

  useEffect(() => {
    if (index === activeIndex) {
      setFeatureClass('active-item');
    } else {
      setFeatureClass('not-active-item');
    }
  });

  return (
    <p className={`feature ${featureClass}`}>{ item }</p>
  )
}

export default Feature;
