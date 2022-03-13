import React from "react";
import { FlatList } from "react-native";
import { toString } from "lodash";
import Product from "@components/molecules/Product";
import { MockUpCardData } from "./dummy";
import { StoreScreenWrapperStyle } from "./style";

const Store = () => {
  const { VerticalCard } = Product;
  return (
    <StoreScreenWrapperStyle>
      <FlatList
        data={MockUpCardData}
        renderItem={({ item }) => (
          <VerticalCard
            onSell={item.onSell}
            productName={item.productName}
            description={item.description}
            price={item.price}
            cart={item.cart}
            label={item.label}
          />
        )}
        keyExtractor={item => toString(item.id)}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
      />
    </StoreScreenWrapperStyle>
  );
};

export default Store;
