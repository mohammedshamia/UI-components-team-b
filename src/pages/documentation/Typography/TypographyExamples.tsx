import { Typography, InfoContainer } from '../../../components';

export const TypographyExample = () => (
  <InfoContainer flexDirection="column">
    <Typography variant="h1" children="heading.1 " />
    <Typography variant="h2" children="heading.2 " />
    <Typography variant="h3" children="heading.3 " />
    <Typography variant="h4" children="heading.4 " />
    <Typography variant="h5" children="heading.5 " />
    <Typography variant="h6" children="heading.6 " />
    <Typography variant="p" children=" paragraph " />
    <Typography variant="span" children="span" />
  </InfoContainer>
);
