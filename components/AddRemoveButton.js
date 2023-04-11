const AddRemoveButton = ({ data, type, basket, setBasket }) => {
  const buttonName = type == "add" ? "ADD" : "REMOVE";
  const handleClickButton = () => {
    if (type === "add") {
      setBasket((e) => [...e, data]);
    } else {
      setBasket((prevArray) => prevArray.filter((obj) => obj.id !== data.id));
    }
  };
  return <button onClick={handleClickButton}>{buttonName}</button>;
};
export default AddRemoveButton;
