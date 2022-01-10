export default `
<h1 id="radio-group">Rating</h3/>
<br/>
<br/>
## Ratings provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own.

<br />


<h3 id="radio-group">Basic rating</h3/>
<br />
<br />

<ex1></ex1>

<br />

~~~js


export const RatingExample = () => (

  <InfoContainer flexDirection="column">
    <WrapperParent display="flex" JC="space-between" item="center">
      <h3> Controlled</h3>
      <Rating value={2} isRow />
    </WrapperParent>
  
    <br />
  
    <WrapperParent display="flex" JC="space-between" item="center">
      <h3> Readonly</h3>
      <Rating value={2} readonly />
    </WrapperParent>
    <br />

    <WrapperParent display="flex" JC="space-between" item="center">
      <h3> Readonly</h3>
      <Rating value={2} disabled />
    </WrapperParent>
    <br />

    </InfoContainer>
);
~~~

<br />



<h2 id="hover-feedback">Sizes</h3>

#### For larger or smaller ratings use the size prop.
**larger** , **medium** , **small**

<br />
<br />
<br />

<ex2></ex2>

<br />

~~~js

  import { Avatar, InfoContainer } from '../../../components';

  export const LetterAvatar = () => (
    <InfoContainer>
      <Avatar name="Ahmad Salah" />
      <Avatar name="MA" backgroundColor="AC2D2D" />
      <Avatar name="MN" />
    </InfoContainer>
  );

~~~
<br />

### Sizes
#### You can change the size of the avatar with pass size props to the component.
*Note:* The size of the avatar is not the size of the image.
<br />
<ex3></ex3>
<br />


~~~js

  import { Avatar, InfoContainer } from '../../../components';

  export const AvatarWithSizes = () => (
    <InfoContainer>
      <Avatar
        src="https://mui.com/static/images/avatar/2.jpg"
        size="small"
      />
      <Avatar
        src="https://mui.com/static/images/avatar/2.jpg"
        size="medium"
      />
      <Avatar
        src="https://mui.com/static/images/avatar/2.jpg"
        size="large"
      />
      <Avatar
        src="https://mui.com/static/images/avatar/2.jpg"
        size="xlarge"
      />
    </InfoContainer>
  );

~~~

<br />

`;
