import { useState } from "react";
import ProductCard from "../components/ProductCard";
import "./styles.css";
const products = [
  {
    name: "apple",
    imageUrl:
      "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=",
    id: 1
  },
  {
    name: "orange",
    imageUrl:
      "https://media.istockphoto.com/id/185284489/photo/orange.jpg?s=612x612&w=0&k=20&c=m4EXknC74i2aYWCbjxbzZ6EtRaJkdSJNtekh4m1PspE=",
    id: 2
  }
];
export default function App() {
  const [basket, setBasket] = useState([]);
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: "100vh"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            borderBottom: "1px solid black",
            padding: "20px"
          }}
        >
          {basket.map((e, i) => (
            <ProductCard
              data={e}
              stage={"basket"}
              basket={basket}
              setBasket={setBasket}
            />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            borderBottom: "1px solid black",
            padding: "20px"
          }}
        >
          {products.map((e, i) => (
            <ProductCard
              data={e}
              stage={"catalogs"}
              basket={basket}
              setBasket={setBasket}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
