export default `
## **Autocomplete**
<br />

#### The autocomplete is a normal text input enhanced by a panel of suggested options.
<br />

##### 1. The widget is useful for setting the value of a single-line textbox in one of two types of scenarios: The value for the textbox must be chosen from a predefined set of allowed values, e.g., a location field must contain a valid location name: **combo box**.
<br />

##### 2. The textbox may contain any arbitrary value, but it is advantageous to suggest possible values to the user, e.g., a search field may suggest similar or previous searches to save the user time: **free solo**.
<br />

### **combo box**
<br />

##### The value must be chosen from a predefined set of allowed values..
<br />

<ex1></ex1>

<br />

~~~js

 import { SelectInput } from '../../../components/baseComponent/Autocomplete';

  export const ComboboxExample = () => (
    <AutoComplete
        width="300px"
        onChange={handeleChange}
        placeholder="select"
        name="combo box"
        option={option}
        value={state}
      />
  );

~~~

<br />

### **Letter avatars**

#### Avatars containing simple characters can be created by passing a string as **children**
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
 [ **small** , **medium** , **large** ,  **xlarge** ]
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
