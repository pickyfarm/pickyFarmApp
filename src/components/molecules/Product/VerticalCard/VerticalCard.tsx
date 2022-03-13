import React from "react";
import { Dimensions, Image } from "react-native";
import { numberWithCommas } from "@lib/utils";
import {
  CART_AFTER_ICON,
  CART_BEFORE_ICON,
  MOONAN_BADGE_ICON,
  MOONAN_LABEL_ICON,
  NORMAL_LABEL_ICON,
  PRODUCT_MAIN_DUMMY_ICON,
} from "@constants/path/icon";
import { VerticalCardLabelType } from "@screens/Store/types";
import {
  CardCartStyle,
  CardInfoStyle,
  CardImageStyle,
  CardTitleStyle,
  CardLabelStyle,
  CardSubTitleStyle,
  CardPriceStyle,
  CardBadgeStyle,
  CardWrapperStyle,
  CardTitleTextStyle,
  CardSubTitleTextStyle,
  CardPriceTextStyle,
  CardNoSellCoverStyle,
  CardNoSellCoverTextStyle,
} from "./style";

interface IVerticalCardProps {
  onSell: boolean;
  productName: string;
  description: string;
  price: number;
  cart: boolean;
  label: VerticalCardLabelType;
}

function VerticalCard(props: IVerticalCardProps) {
  const { onSell, productName, description, price, cart, label } = props;
  return (
    <CardWrapperStyle width={Dimensions.get("window").width / 2 - 20} onPress={() => console.log("click")}>
      {!onSell && (
        <CardNoSellCoverStyle>
          <CardNoSellCoverTextStyle>곧 다시 만나요!</CardNoSellCoverTextStyle>
        </CardNoSellCoverStyle>
      )}
      <CardImageStyle>
        <Image
          source={PRODUCT_MAIN_DUMMY_ICON}
          style={{
            width: Dimensions.get("window").width / 2 - 20,
            height: 194,
            borderRadius: 9,
          }}
        />
        {label === "moonan" && onSell && (
          <CardBadgeStyle
            source={MOONAN_BADGE_ICON}
            style={{
              width: Dimensions.get("window").width / 3,
              height: Dimensions.get("window").height / 10,
              resizeMode: "contain",
            }}
          />
        )}
        {onSell && (
          <CardCartStyle
            source={cart ? CART_AFTER_ICON : CART_BEFORE_ICON}
            style={{
              width: 33,
              height: 33,
              resizeMode: "contain",
            }}
          />
        )}
      </CardImageStyle>
      <CardInfoStyle>
        <CardTitleStyle>
          <CardTitleTextStyle>{productName}</CardTitleTextStyle>
        </CardTitleStyle>
        <CardSubTitleStyle>
          <CardSubTitleTextStyle>{description}</CardSubTitleTextStyle>
        </CardSubTitleStyle>
        <CardPriceStyle>
          <CardPriceTextStyle>{numberWithCommas(price)}원</CardPriceTextStyle>
        </CardPriceStyle>
        {label && (
          <CardLabelStyle
            source={label === "normal" ? NORMAL_LABEL_ICON : MOONAN_LABEL_ICON}
            style={{
              width: 40,
              height: 20,
              resizeMode: "stretch",
            }}
          />
        )}
      </CardInfoStyle>
    </CardWrapperStyle>
  );
}

export default VerticalCard;
