import React, { useState } from 'react';
import Btn from '../../components/layoutComponent/button';
import Typography from '../../components/baseComponent/Typography';
import gray from '../../assets/gray.jpg';

const data = {
  title: ['The React', 'you always wanted'],
  paragraph:
    ' MUI provides a robust, customizable, and accessible library of foundational and advanced components, enabling you to build your own design system and develop React applications faster.',
};
export default function Welcome() {
  const [state, setState] = useState<boolean>(false);
  return (
    <div>
      <div>
        <Typography
          variant="h1"
          bold
          fontSize="32px"
          color="black"
          children={
            <>
              {data.title[0]}
              <Typography variant="span" color="blue" fontSize="2rem">
                UI library
              </Typography>
              {data.title[1]}
            </>
          }
        />
        <Typography variant="p" children={data.paragraph} color="#3E5060" />
        <div>
          <Btn
            // children="Get Started"
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
          <Btn
            // children="Get Started"
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
        </div>
      </div>
      <div>
        <img src={gray} alt="pictures" />
      </div>
    </div>
  );
}
