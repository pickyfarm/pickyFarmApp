import React, { ReactNode } from "react";
import { View } from "react-native";
import VerticalCard from "./VerticalCard";

interface IProductProps {
  children: ReactNode;
}

function Product(props: IProductProps) {
  const { children } = props;
  return <View>{children}</View>;
}

Product.VerticalCard = VerticalCard;

export default Product;
