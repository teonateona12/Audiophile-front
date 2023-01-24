import styled from "styled-components";
import { useParams } from "react-router";
import Category from "./Category";
import { CategoryName, New, Description } from "./Styles";
import { Link } from "react-router-dom";
import { PropsType, ProductType } from "./types";

const Product: React.FC<PropsType> = ({ data }) => {
  const { id } = useParams();
  const product = data.filter(
    (product: ProductType) => id === product.category
  );

  return (
    <div>
      <div>
        <CategoryDiv>
          <CategoryName>{product[0]?.category}</CategoryName>
        </CategoryDiv>
        {product.map((product: ProductType) => (
          <Div>
            <Image
              src={`https://audiophile-r04o.onrender.com/product/${product.image.mobile}`}
            />
            <Cont>
              {product.new && <New>NEW PRODUCT</New>}
              <Name>{product.name}</Name>
              <Description>{product.description}</Description>
              <Link to={`/products/${product.category}/${product.slug}`}>
                <Button>SEE PRODUCT</Button>
              </Link>
            </Cont>
          </Div>
        ))}
      </div>
      <Category />
    </div>
  );
};
export default Product;
const Cont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (min-width: 1440px) {
    margin-top: 15%;
  }
`;
const CategoryDiv = styled.div`
  background-color: black;
  padding-bottom: 32px;
`;
const Button = styled.button`
  color: #ffffff;
  border: none;
  background: #d87d4a;
  padding: 15px 30px;
  width: 50%;
  display: flex;
  justify-content: center;
  margin: auto;
  @media (min-width: 768px) {
    width: 25%;
  }
  @media (min-width: 1440px) {
    margin: 0;
    width: 50%;
  }
`;

const Name = styled.p`
  font-size: 28px;
  line-height: 38px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000000;
  @media (min-width: 1440px) {
    text-align: left;
  }
`;
const Div = styled.div`
  margin: 100px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (min-width: 768px) {
    margin: 32px;
  }
  @media (min-width: 1440px) {
    margin: 10% 10%;
    flex-direction: row;
    gap: 10%;
  }
`;
const Image = styled.img`
  border-radius: 8px;
`;
