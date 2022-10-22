import React, { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false);
  const btnBgClassName = details ? "bg-yellow-400" : "bg-green-600";
  const btnClasses = ["py-2 px-4 border", btnBgClassName];

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} alt={product.title} className="w-1/6" />
      <p>{product.title}</p>
      <p className="font-bold">{product.price}</p>
      <button
        onClick={() => setDetails((prevState) => !prevState)}
        className={btnClasses.join(" ")}
      >
        {details ? "Hide" : "More"}
      </button>

      {details && (
        <div>
          <p>{product.description}</p>
          <p>
            Rating:{" "}
            <span style={{ fontWeight: "bold" }}>{product?.rating?.rate}</span>
          </p>
        </div>
      )}
    </div>
  );
}
