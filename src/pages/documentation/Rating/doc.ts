export default `
<h2 id="rating">Rating</h2>
<br/>
<h3>Ratings provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own.
</h3>

<br />
<br />
<br />

**<h2 id="basic-rating">Basic Rating Example</h2>**
<br />

### use  custom  rating  with  simple  example like  readonly  or  controllor example  and  disable the action.

<br />
<br />

<ex1></ex1>

<br />
<br />

~~~js

export const SimpleRatingExample = () => {
  const [value] = useState<number>(2);
  return (
    <InfoContainer flexDirection="column">
      <WrapperParent display="flex" JC="space-between" item="center">
        <h3> Controlled</h3>
        <Rating value={value} isRow />
      </WrapperParent>
      <br />
      <WrapperParent display="flex" JC="space-between" item="center">
        <h3> Readonly</h3>
        <Rating value={value} readonly />
      </WrapperParent>
      <br />
      <WrapperParent display="flex" JC="space-between" item="center">
        <h3> Disabled</h3>
        <Rating value={value} disabled />
      </WrapperParent>
    </InfoContainer>
  );
};


~~~

### Sizes
#### You can change the size of the avatar with pass size props to the component.
*Note:* The size of the avatar is not the size of the image.
<br />
<br />

**<h2 id="sizes">Sizes</h2>**

<br />

### For larger , smaller and  medium ratings use the **size** prop.
[ **larger** , **medium** , **small**  ]


<br />
<br />

<ex2></ex2>

<br />

~~~js
export const SizeRatingExample = () => (
  <InfoContainer flexDirection="column">
    <WrapperParent display="flex" JC="space-between" item="center">
      <h3> small</h3>
      <Rating value={2} isRow size="small" />
    </WrapperParent>
    <br />
    <WrapperParent display="flex" JC="space-between" item="center">
      <h3> medium</h3>
      <Rating value={2} isRow size="medium" />
    </WrapperParent>
    <br />
    <WrapperParent display="flex" JC="space-between" item="center">
      <h3> large</h3>
      <Rating value={2} isRow size="large" />
    </WrapperParent>
    <br />
  </InfoContainer>
);

~~~
<br />


**<h2 id="customization">Customization</h2>**

<br />
<br />

### use  speical Maximum rating  alos with  with  you icon as  you want.

<br/>

**Note:** The ioon should be  svg  and  form  reac-icon .
<br />
<ex3></ex3>

<br />
<br />


~~~js

 export const CustomizationRating = () => (
  <InfoContainer flexDirection="column">
    <WrapperParent display="flex" JC="space-between" item="center">
      <h3> count 10</h3>
      <Rating value={8} isRow count={10} />
    </WrapperParent>
    <br />
    <WrapperParent display="flex" JC="space-between" item="center">
      <h3>render item as the coloum</h3>
      <Rating value={2} isRow={false} size="medium" />
    </WrapperParent>
    <br />
    <WrapperParent display="flex" JC="space-between" item="center">
      <h3> large</h3>
      <Rating value={2} isRow size="large" icon={<AiFillApple />} />
    </WrapperParent>
    <br />
  </InfoContainer>
);

~~~

<br />

`;
