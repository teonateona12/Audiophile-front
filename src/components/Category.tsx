import { Link } from "react-router-dom";
import { CategoryDiv, Image, Text, IconDiv, Div, TextSmall } from "./Styles";

export default function Category() {
  return (
    <CategoryDiv>
      <Div>
        <Image src="../assets/image1.png" />
        <Text>HEADPHONES</Text>
        <IconDiv>
          <Link to="/products/headphones">
            {" "}
            <TextSmall>SHOP</TextSmall>
          </Link>
          <img src="../assets/icon.svg" />
        </IconDiv>
      </Div>
      <Div>
        <Image src="../assets/image2.png" />
        <Text>SPEAKERS</Text>
        <IconDiv>
          <Link to="/products/speakers">
            {" "}
            <TextSmall>SHOP</TextSmall>
          </Link>
          <img src="../assets/icon.svg" />
        </IconDiv>
      </Div>
      <Div>
        <Image src="../assets/image3.png" />
        <Text>EARPHONES</Text>
        <IconDiv>
          <Link to="/products/earphones">
            <TextSmall>SHOP</TextSmall>
          </Link>
          <img src="../assets/icon.svg" />
        </IconDiv>
      </Div>
    </CategoryDiv>
  );
}
