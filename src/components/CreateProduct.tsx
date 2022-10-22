import React, { useState } from "react";
import { IProduct } from "../models";
import axios from "axios";
import { ErrorMessage } from "./ErrorMessage";

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

const productData: IProduct = {
  title: "",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 5,
    count: 23,
  },
};

export function CreateProduct({ onCreate }: CreateProductProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  async function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    setError("");

    if (value.trim().length === 0) {
      setError("Please enter valid title!");
    }

    productData.title = value;
    const response = await axios
      .post<IProduct>("https://fakestoreapi.com/products", productData)
      .then();

    onCreate(response.data);
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full"
        placeholder="Enter product title..."
        value={value}
        onChange={changeHandler}
      />

      {error && <ErrorMessage error={error} />}

      <button type="submit" className="py-2 px-4 border bg-green-500">
        Create
      </button>
    </form>
  );
}
