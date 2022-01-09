export default `
## **Rating**
<br/>
<br/>
## Ratings provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own..

<br />

### **Basic rating**
<h3 id="radio-group"></h3/>
<br />
<br />

<ex1></ex1>

<br />

~~~js


export const AvatarExample = () => (

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

### **Sizes**

<h3 id="hover-feedback"></h3>
#### For larger or smaller ratings use the **size** prop.
[ **larger** , **medium** , **small**  ]

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

### **Sizes**
#### You can change the size of the avatar with pass size props to the component.
**Note:** The size of the avatar is not the size of the image.
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

### **Variants**
#### If you need square or rounded avatars, use the **variant** prop.
<br />
<ex4></ex4>
<br />

~~~js

  import { Avatar, InfoContainer } from '../../../components';

  export const AvatarWithVariant = () => (
    <InfoContainer>
      <Avatar
        src="https://mui.com/static/images/avatar/2.jpg"
        variant="square"
      />
      <Avatar
        src="https://mui.com/static/images/avatar/2.jpg"
        variant="square"
      />
    </InfoContainer>

~~~
<br />

### **Avatar Group**
##### **AvatarGroup** renders its children as a stack. Use the max prop to limit the number of avatars.

<br />
<ex5></ex5>
<br />

~~~jsx

export const AvatarGroupExample = () => (
  <InfoContainer>
    <AvatarGroup total={20} max={3}>
      <Avatar src="https://mui.com/static/images/avatar/2.jpg" />
      <Avatar src="https://mui.com/static/images/avatar/2.jpg" />
      <Avatar src="https://mui.com/static/images/avatar/2.jpg" />
    </AvatarGroup>
  </InfoContainer>

  );
  ~~~
<br />

### **Avatar With badge**
##### **Badge** renders a badge on the avatar at the bottom right corner with color can change by pass badge color props.

<br />
<ex6></ex6>
<br />

~~~jsx

export const AvatarWithBadge = () => (
  <InfoContainer>
    <Avatar src="https://mui.com/static/images/avatar/2.jpg" badge />
    <Avatar
      src="https://mui.com/static/images/avatar/2.jpg"
      badge
      badgeColor="#f44336"
    />
    <Avatar
      src="https://mui.com/static/images/avatar/2.jpg"
      badge
      badgeColor="orange"
    />
  </InfoContainer>
);

  ~~~


`;
