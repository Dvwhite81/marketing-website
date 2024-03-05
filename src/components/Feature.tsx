interface FeatureProps {
  item: string;
}

const Feature = ({ item }: FeatureProps) => {
  return (
    <p className="feature">{ item }</p>
  )
}

export default Feature;
