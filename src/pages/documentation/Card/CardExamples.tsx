import styled from 'styled-components';
import {
  InfoContainer,
  Carding,
  Avatar,
  Typography,
} from '../../../components';

const Box = styled.div`
  margin-left: 10px;
`;

export const CardSimple = () => (
  <InfoContainer>
    <Carding.Card width="50%">
      <Carding.CardContent>
        <Carding.CardTitle>Basic card</Carding.CardTitle>
        <Carding.CardDesc>
          Some quick example text to build on the card description and make up
          the bulk of the card content.
        </Carding.CardDesc>
        <Carding.CardBtn>Learn More</Carding.CardBtn>
      </Carding.CardContent>
    </Carding.Card>
  </InfoContainer>
);

export const CardImg = () => (
  <InfoContainer>
    <Carding.Card width="50%">
      <Carding.CardImg
        src="https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg"
        height="200px"
      />
      <Carding.CardContent>
        <Carding.CardTitle>Image Card</Carding.CardTitle>
        <Carding.CardDesc>
          Some quick example text to build on the card description and make up
          the bulk of the card content.
        </Carding.CardDesc>
        <Carding.CardBtn>Learn More</Carding.CardBtn>
      </Carding.CardContent>
    </Carding.Card>
  </InfoContainer>
);

export const CardHeader = () => (
  <InfoContainer>
    <Carding.Card width="50%">
      <Carding.CardHeader>
        <Avatar src="https://mui.com/static/images/avatar/2.jpg" />
        <Box>
          <Typography
            variant="h3"
            children="Shrimp and Chorizo Paella"
            color="rgba(0, 0, 0, 0.87);"
          />
          <Typography
            variant="p"
            children="September 14, 2016"
            color="#0000008a"
          />
        </Box>
      </Carding.CardHeader>
      <Carding.CardImg src="https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg" />
      <Carding.CardContent>
        <Carding.CardTitle>Image Card</Carding.CardTitle>
        <Carding.CardDesc>
          Some quick example text to build on the card description and make up
          the bulk of the card content.
        </Carding.CardDesc>
        <Carding.CardBtn>Learn More</Carding.CardBtn>
      </Carding.CardContent>
    </Carding.Card>
  </InfoContainer>
);

export const CardSize = () => (
  <InfoContainer>
    <Carding.Card width="50%">
      <Carding.CardContent>
        <Carding.CardTitle size="large">Image Card</Carding.CardTitle>
        <Carding.CardDesc size="medium">
          Some quick example text to build on the card description and make up
          the bulk of the card content.
        </Carding.CardDesc>
        <Carding.CardBtn>Learn More</Carding.CardBtn>
      </Carding.CardContent>
    </Carding.Card>
  </InfoContainer>
);

export const CardColor = () => (
  <InfoContainer>
    <Carding.Card width="50%">
      <Carding.CardContent>
        <Carding.CardTitle color="#007bff">Image Card</Carding.CardTitle>
        <Carding.CardDesc color="#9f9f9f">
          Some quick example text to build on the card description and make up
          the bulk of the card content.
        </Carding.CardDesc>
        <Carding.CardBtn bgColor="#007bff" color="#fff">
          Learn More
        </Carding.CardBtn>
      </Carding.CardContent>
    </Carding.Card>
  </InfoContainer>
);
