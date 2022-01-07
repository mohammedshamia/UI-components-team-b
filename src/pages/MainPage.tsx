import {
  SideBar,
  Container,
  InfoContainer,
} from '../components/layoutComponent';

const MainPage = () => {
  return (
    <Container style={{ display: 'flex' }} width="100%">
      <div>ddd</div>
      <Container width="100%">
        ddd
        <InfoContainer>ddd</InfoContainer>
      </Container>
    </Container>
  );
};

export default MainPage;
