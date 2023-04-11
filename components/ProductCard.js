import AddRemoveButton from "./AddRemoveButton";

const ProductCard = ({ data, stage, basket, setBasket }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "250px",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        border: "1px solid black",
        padding: "10px 0px",
        minWidth: "150px"
      }}
    >
      {data.name}
      <img
        style={{
          height: "100px",
          width: "100px"
        }}
        alt={data.name}
        src={data.imageUrl}
      />
      <AddRemoveButton
        type={stage === "catalogs" ? "add" : "remove"}
        basket={basket}
        setBasket={setBasket}
        data={data}
      />
    </div>
  );
};

export default ProductCard;
