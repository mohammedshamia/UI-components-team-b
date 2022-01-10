 

<h2 id='typography'>Typography</h2>
<br />

#### The Typography component makes it easy to apply a default set of font weights and sizes in your application.
<br />

<ex1></ex1>


 
~~~jsx

import { Typography, InfoContainer } from '../../../components';

export const TypographyExample = () => (
  <InfoContainer>
    <Typography variant="h2" children="heading.1" />
    <Typography variant="h2" children="heading.2 " />
    <Typography variant="h3" children="heading.3 " />
    <Typography variant="h4" children="heading.4 " />
    <Typography variant="h5" children="heading.5 " />
    <Typography variant="h6" children="heading.6 " />
    <Typography variant="p" children=" paragraph " />
    <Typography variant="span" children=" span " />
  </InfoContainer>
);
<br />


~~~
<h2 id="accessibility">Accessibility</h2>

#### A few key factors to follow for an accessible typography:

<br />

* Color Provide enough contrast between text and its background, check out the minimum recommended WCAG 2.0 color contrast ratio (4.5:1).

<br />


<h2 id="colors">Colors</h2>

#### Convey meaning through color with a handful of color utility.
<br />

<ex2></ex2>

 
~~~jsx
export const TypographyExample2 = () => (
  <InfoContainer flexDirection="column">
    <Typography variant="h2" children="Hello World" color="pink" />
  </InfoContainer>
);

~~~
<br />


<h2 id="fontSize">fontSize and bold</h2>

<br />

<h3 id='fontSize'>fontSize</h3> 
<br />

#### (typically 16px) so visitors can customize their browser defaults as needed.
<br />

<ex3></ex3>


~~~jsx
export const TypographyExample3 = () => (
  <InfoContainer flexDirection="column">
    <Typography variant="h3" children="Hello World" fontSize="2rem" />
    <Typography variant="h2" children="Hello World" fontSize="3rem" />
    <Typography variant="h4" children="Hello World" fontSize="4rem" bold />
  </InfoContainer>
);
~~~
<br />

<h2 id="theme">Theme</h2>

#### In some situations you might not be able to use the Typography component. Hopefully, you might be able to take advantage of the typography keys of the theme.

<br />
<br />
<h2 id='api' ></h2>



 