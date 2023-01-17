import styled from "styled-components";
import Footer from "./Footer";
import Category from "./Category";
import {
  MainCont,
  Container,
  TextH1,
  TextH2,
  Button,
  Orange,
  ImageOrange,
  ImageGreyDesk,
  ImageGreyMob,
  ImageGreyTab,
  Cont,
  Name,
  Grey,
  TextP,
  SeeProduct,
  SeeProduct2,
  ContainerInside,
  H4,
  DarkDiv,
  ImageDesk,
} from "./Styles";

export default function () {
  return (
    <MainCont>
      <Div>
        <Image src="../assets/home/mobile/image-header.jpg" />
        <Container>
          <Text>NEW PRODUCT</Text>
          <TextH1>XX99 MARK II HEADPHONES</TextH1>
          <TextH2>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </TextH2>
          <Button>SEE PRODUCT</Button>
        </Container>
      </Div>

      <Category />

      <Orange>
        <ImageOrange src="../assets/home/mobile/image-speaker-zx9.png" />
        <Cont>
          <Name>ZX9 SPEAKER</Name>
          <TextP>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </TextP>
          <SeeProduct>SEE PRODUCT</SeeProduct>
        </Cont>
      </Orange>

      <Grey>
        <ImageGreyMob src="../assets/home/mobile/image-speaker-zx7.jpg" />
        <ImageGreyTab src="../assets/home/tablet/image-speaker-zx7.jpg" />
        <ImageGreyDesk src="../assets/home/desktop/image-speaker-zx7.jpg" />
        <ContainerInside>
          <H4>ZX7 SPEAKER</H4>
          <SeeProduct2>SEE PRODUCT</SeeProduct2>
        </ContainerInside>
      </Grey>

      <DarkDiv>
        <Img src="../assets/home/mobile/image-earphones-yx1.jpg" />
        <Container2>
          <H4>YX1 EARPHONES</H4>
          <SeeProduct2>SEE PRODUCT</SeeProduct2>
        </Container2>
      </DarkDiv>

      <LastDiv>
        <ImageGreyMob src="../assets/shared/mobile/image-best-gear.jpg" />
        <ImageGreyTab src="../assets/shared/tablet/image-best-gear.jpg" />
        <ImageDesk src="../assets/shared/desktop/image-best-gear.jpg" />
        <TextDiv>
          <Txt>
            BRINGING YOU THE <span>BEST</span> AUDIO GEAR
          </Txt>
          <Paragraph>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </Paragraph>
        </TextDiv>
      </LastDiv>
      <Footer />
    </MainCont>
  );
}
const TextDiv = styled.div`
  @media (min-width: 1440px) {
    margin-top: 5%;
  }
`;
const Paragraph = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #000000;
  opacity: 0.5;
  @media (min-width: 1440px) {
    text-align: left;
  }
`;
const Txt = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 1px;
  color: #000000;
  margin: 30px 0;
  @media (min-width: 1440px) {
    text-align: left;
  }
`;
export const LastDiv = styled.div`
  margin: 24px;
  margin-top: 15%;
  @media (min-width: 1440px) {
    display: flex;
    margin: 0 12% 0 12%;
    gap: 15%;
  }
`;
const Img = styled.img`
  width: 100%;
`;

const Container2 = styled.div`
  padding: 50px;
  background-color: #f1f1f1;
`;
export const Text = styled.p`
  text-align: center;
  letter-spacing: 10px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;
  @media (min-width: 1440px) {
    text-align: left;
  }
`;
export const Div = styled.div`
  background-color: #191919;
  position: relative;
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    padding: 0 10%;
  }
`;
export const Image = styled.img`
  margin: auto;
  display: flex;
`;
