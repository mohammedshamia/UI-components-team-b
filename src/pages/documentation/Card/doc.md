## **Card**
#### Cards contain content and actions about a single subject.

<br />

<h2 id="simple-card">Simple card</h2>
<br />
Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.

<br />
<ex1></ex1>


~~~js

  import { Card, CardContent CardTitle, CardDesc, CardBtn } from '../../../components';

  export const CardSimple = () => (
    
    <Card>
      <CardContent>
        <CardTitle>Simple card</CardTitle>
        <CardDesc>
        </CardDesc>
        <CardBtn>Learn More</CardBtn>
      </CardContent>
    </Card>
    
  );

~~~

<br />

<h2 id="image-card">Image card</h2>
<br />
CardImg places an image to the top of the card to reinforce the content.

<br />
<ex2></ex2>


~~~js

  import { Card, CardImg, CardContent CardTitle, CardDesc, CardBtn} from '../../../components';

  export const CardImage = () => (
    
      <Card>
        <CardImg
          src="https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg"
          height="200px"
        />
        <CardContent>
          <CardTitle>Image Card</CardTitle>
          <CardDesc>
            Some quick example text to build on the card description and make up the bulk of the card content.
          </CardDesc>
          <CardBtn>Learn More</CardBtn>
        </CardContent>
      </Card>
    
  );

~~~

<br />

<h2 id="header-card">Header Card</h2>
<br />
Card header can be used by adding cardHeader to the card.

You can inside use other components as Avatar and Typography.

<br />
<ex3></ex3>


~~~jsx

import { Card, CardHeader, Avatar, Typography, CardContent CardTitle, CardDesc, CardBtn} from '../../../components';

export const CardHeader = () => (
  
    <Card>
      <CardHeader>
        <Avatar src="https://mui.com/static/images/avatar/2.jpg" />
        <div>
          <Typography
            variant="h3"
            children="Shrimp and Chorizo Paella"
          />
          <Typography
            variant="p"
            children="September 14, 2016"
            color="#0000008a"
          />
        </div>
      </CardHeader>
      <CardImg src="https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg" />
      <CardContent>
        <CardTitle>Header Card</CardTitle>
        <CardDesc>
          Some quick example text to build on the card description and make up
          the bulk of the card content.
        </CardDesc>
        <CardBtn>Learn More</CardBtn>
      </CardContent>
    </Card>
    

  );
  
  ~~~

<br />

<h2 id="size-card">Size Card</h2>
<br />
You can change the font size of the components card with pass size props to the components.

Note: The size of the component is. [ small , medium , large]

<br />
<ex4></ex4>


~~~js

  import { Card, CardContent CardTitle, CardDesc, CardBtn } from '../../../components';

    <Card>
      <CardContent>
        <CardTitle size="large">Size Card</CardTitle>
        <CardDesc size="medium">
          Some quick example text to build on the card description and make up
          the bulk of the card content.
        </CardDesc>
        <CardBtn>Learn More</CardBtn>
      </CardContent>
    </Card>
  
  );

~~~

<br />

<h2 id="color-card">Color Card</h2>
<br />
You can change the color of the components card with pass color props to the components.

<br />
<ex5></ex5>


~~~js

  import { Card, CardContent CardTitle, CardDesc, CardBtn } from '../../../components';

    <Card>
      <CardContent>
        <CardTitle color="#007bff">Color Card</CardTitle>
        <CardDesc color="#9f9f9f">
          Some quick example text to build on the card description and make up
          the bulk of the card content.
        </CardDesc>
        <CardBtn bgColor="#007bff" color="#fff">Learn More</CardBtn>
      </CardContent>
    </Card>
  
  );

~~~
<br />
<br />
<h2 id='api' ></h2>


