import { useState } from 'react';
import ButtonUi from '../../components/layoutComponent/button';
import Typography from '../../components/baseComponent/Typography';
import gray from '../../assets/gray.jpg';
import { Wrapper, Content, ContainerImg, ContainerButton } from './style';

const data = {
  title: ['The React', 'you always wanted'],
  paragraph:
    ' MUI provides a robust, customizable, and accessible library of foundational and advanced components, enabling you to build your own design system and develop React applications faster.',
};
export default function Welcome() {
  const [state, setState] = useState<boolean>(false);
  return (
    <Wrapper>
      <Content>
        <Typography
          variant="h1"
          bold
          // fontSize="64px"
          fontSize="clamp(2.625rem, 1.2857rem + 3.5714vw, 3rem)"
          color=" #0A1929"
          style={{
            marginTop: '20px',
            marginBottom: '20px',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            lineHeight: '.9',
            fontFamily: 'Robot',
          }}
          children={
            <>
              {/* <div> */}
              {data.title[0]}
              <Typography
                variant="span"
                color="blue"
                // fontSize="64px"
                className="ui"
                fontSize="clamp(2.625rem, 1.2857rem + 3.5714vw, 3rem)"
                bold
              >
                UI library
              </Typography>
              {/* </div> */}
              {data.title[1]}
            </>
          }
        />
        <Typography
          variant="p"
          children={data.paragraph}
          fontSize="clamp(.625rem, .2857rem + 3.5714vw, 1rem)"
          color="#3e5060"
          // fontSize="16px"
          style={{
            lineHeight: '24px',
          }}
        />
        <ContainerButton>
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
      <ContainerImg src={gray} alt="pictures" />
    </Wrapper>
  );
}
