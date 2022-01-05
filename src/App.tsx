import React from 'react';
import {
  Card,
  CardImg,
  CardContent,
  CardTitle,
  CardDesc,
  CardBtn,
} from './components/baseComponent/Card/Card';

function App() {
  return (
    <div className="App">
      <h1> React UI library</h1>
      <Card id="dmd" className="fdf">
        <CardImg src="https://www.w3schools.com/w3images/team2.jpg" />
        <CardContent>
          <CardTitle size="large" color="red">
            Card title
          </CardTitle>
          <CardDesc>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </CardDesc>
          <CardBtn color="#fff" bgColor="#0d6efd">
            more
          </CardBtn>
          <CardBtn color="#fff" bgColor="#0d6efd">
            more
          </CardBtn>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
