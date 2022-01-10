<h2 id="avatar">Avatar</h2>

## Test

### Avatars are found throughout material design with uses in everything from tables to dialog menus.

<br />

<h2 id="image">Image avatars</h2>

### Image avatars can be created by passing standard img props src to the component.
<br />

<ex1></ex1>


~~~js

  import { Avatar, InfoContainer } from '../../../components';

  export const AvatarExample = () => (
    <InfoContainer>
      <Avatar src="https://mui.com/static/images/avatar/2.jpg" />
      <Avatar src="https://mui.com/static/images/avatar/2.jpg" />
      <Avatar src="https://mui.com/static/images/avatar/2.jpg" />
    </InfoContainer>
  );

~~~

<br />

<h2 id="letter-avatars">Letter avatars</h2>

### Avatars containing simple characters can be created by passing a string as children
<br />
<ex2></ex2>

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

<h2 id="avatar-sizes">Avatars Sizes</h2>

### You can change the size of the avatar with pass size props to the component.
Note: The size of the avatar is not the size of the image.
 [  small , medium , large ,  xlarge ]
<br />
<ex3></ex3>


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

<h2 id="avatar-variants">Avatars Variants</h2>

### If you need square or rounded avatars, use the variant prop.
<br />
<ex4></ex4>

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

<h2 id="avatar-group">Avatar Group</h2>

### AvatarGroup renders its children as a stack. Use the max prop to limit the number of avatars.

<br />
<ex5></ex5>

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

<h2 id="avatar-badge">Avatar With badge</h2>

#### Badge renders a badge on the avatar at the bottom right corner with color can change by pass badge color props.

<br />
<ex6></ex6>

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

<br />
<br />
<h2 id='api' ></h2>

 

