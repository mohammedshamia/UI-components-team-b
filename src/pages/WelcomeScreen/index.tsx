import { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonUi from '../../components/layoutComponent/button';
import Typography from '../../components/baseComponent/Typography';
import gray from '../../assets/gray.jpg';
import {
  Wrapper,
  Content,
  ContainerImg,
  ContainerButton,
  contentStyle,
  ImageContainer,
} from './style';

const data = {
  title: ['The React', 'UI library', ' you', 'always wanted'],
  paragraph:
    ' MUI provides a robust, customizable, and accessible library of foundational and advanced components, enabling you to build your own design system and develop React applications faster.',
};

export default function Welcome() {
  const [state, setState] = useState<boolean>(false);
  return (
    <Wrapper>
      <Content>
        <Typography
          fontFamily="PlusJakartaSans"
          bold
          variant="h1"
          fontSize="4rem"
        >
          {data.title[0]}
        </Typography>
        <Typography>
          <Typography
            fontFamily="PlusJakartaSans"
            variant="span"
            bold
            fontSize="4rem"
            color="#0169D2"
          >
            {data.title[1]}
          </Typography>
          <Typography
            variant="span"
            fontFamily="PlusJakartaSans"
            bold
            fontSize="4rem"
          >
            {data.title[2]}
          </Typography>
        </Typography>
        <Typography
          variant="h1"
          fontFamily="PlusJakartaSans"
          bold
          fontSize="4rem"
        >
          {data.title[3]}
        </Typography>
        <Typography {...contentStyle}>{data.paragraph}</Typography>
        <ContainerButton>
          <Link to="/getting-started/install">
            <ButtonUi
              hover
              bold
              width="150px"
              height="56px"
              children={
                <>
                  Get Started
                  <i className="fas fa-angle-right" />
                </>
              }
            />
          </Link>
          <ButtonUi
            border
            bold
            color="#2D3843"
            backgroundColor="#f3f6f9"
            width="272px"
            height="56px"
            fontSize="14px"
            onClick={() => {
              navigator.clipboard.writeText(' $ npm install @mui/material');
              setState(!state);
            }}
            children={
              <>
                $ npm install @mui/material
                {state && <i className="fas fa-check" />}
                {!state && <i className="fas fa-copy" />}
              </>
            }
          />
        </ContainerButton>
      </Content>
      <ImageContainer>
        <ContainerImg src={gray} alt="pictures" />
      </ImageContainer>
    </Wrapper>
  );
}
