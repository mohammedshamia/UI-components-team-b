import { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonUi from '../../components/layoutComponent/button';
import Typography from '../../components/baseComponent/Typography';

import {
  Wrapper,
  Content,
  ContainerButton,
  contentStyle,
  ImageContainer,
} from './style';
import { AvatarWithSizes } from '../documentation/Avatar/AvatarExamples';
import {
  CardColor,
  CardImg,
  CardSimple,
} from '../documentation/Card/CardExamples';
import { CountrySelect } from '../documentation/AutoComplete/AutoComplete';
import { TypographyExample3 } from '../documentation/Typography/TypographyExamples';
import { SimpleRatingExample } from '../documentation/Rating/RatingExamples';

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
          <Link to="/getting-started/installation">
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
              navigator.clipboard.writeText(' $ coming soon ');
              setState(!state);
            }}
            children={
              <>
                $ npm coming soon
                {state && <i className="fas fa-check" />}
                {!state && <i className="fas fa-copy" />}
              </>
            }
          />
        </ContainerButton>
      </Content>
      <ImageContainer>
        <div>
          <CardColor />
          <CardSimple />
          <div style={{ padding: '0 1rem 0 2rem' }}>
            <TypographyExample3 />
            {/* <TypographyExample2 /> */}
            <SimpleRatingExample />
          </div>
          <div>
            <AvatarWithSizes />
            <CardImg />
            <CountrySelect />
          </div>
        </div>
      </ImageContainer>
    </Wrapper>
  );
}
