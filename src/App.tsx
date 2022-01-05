import React from 'react';
import { Avatar } from './components/baseComponent';
// import AllRoutes from './routes';
import {
  Card,
  CardImg,
  CardContent,
  CardTitle,
  CardDesc,
  CardBtn,
  CardHeader,
} from './components/baseComponent/Card/Card';

function App() {
  return (
    <div className="App">
      <h1> React UI library</h1>
      <Card id="dmd" className="fdf">
        <CardHeader>
          <Avatar
            src="https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1"
            size="medium"
          />
        </CardHeader>
        <CardImg
          src="https://www.w3schools.com/w3images/team2.jpg"
          alt="photo"
          title="photo"
        />
        <CardContent>
          <CardTitle>Card title</CardTitle>
          <CardDesc>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </CardDesc>
          <CardBtn color="#fff" bgColor="#0d6efd">
            more
          </CardBtn>
          <CardBtn>more</CardBtn>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
