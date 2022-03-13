import styled from "@emotion/native";
import theme from "@styles/theme";

interface ICardWrapperStyleProps {
  width: number;
}

export const CardWrapperStyle = styled.Pressable<ICardWrapperStyleProps>`
  position: relative;
  width: ${props => props.width};
  height: 280px;
`;

export const CardImageStyle = styled.View`
  flex: 0.7;
`;

export const CardNoSellCoverStyle = styled.View`
  position: absolute;
  width: 100%;
  height: 194px;
  opacity: 0.6;
  background-color: black;
  z-index: 1;
  justify-content: center;
  align-items: center;
`;

export const CardNoSellCoverTextStyle = styled.Text({
  color: "white",
  fontWeight: "bold",
  fontSize: 12,
});

export const CardBadgeStyle = styled.Image`
  position: absolute;
  right: -30px;
`;

export const CardInfoStyle = styled.View`
  position: relative;
  flex: 0.3;
  margin-top: 12px;
`;

export const CardCartStyle = styled.Image`
  position: absolute;
  bottom: 4px;
  right: 13px;
`;

export const CardTitleStyle = styled.View``;

export const CardTitleTextStyle = styled.Text({
  fontSize: 14,
  fontWeight: "bold",
  color: theme.color.green_01,
});

export const CardSubTitleStyle = styled.View``;

export const CardSubTitleTextStyle = styled.Text({
  fontSize: 12,
  fontWeight: "normal",
  color: theme.color.gray_03,
});

export const CardPriceStyle = styled.View`
  margin-top: 0.7px;
`;

export const CardPriceTextStyle = styled.Text({
  fontSize: 14,
  fontWeight: "bold",
  color: theme.color.green_03,
});

export const CardLabelStyle = styled.Image`
  margin-top: 3.3px;
`;
