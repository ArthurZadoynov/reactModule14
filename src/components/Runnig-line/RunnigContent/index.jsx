const RunningLineContent = ({ item }) => {
  return (
    <>
      <img src={item.img} />
      <p>{item.text}</p>
    </>
  );
};

export default RunningLineContent;
