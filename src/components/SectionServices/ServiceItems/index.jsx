const ServiceHighlights = ({ item }) => {
  return (
    <div>
      <img src={item.img} />
      <p>{item.text}</p>
    </div>
  );
};

export default ServiceHighlights;
