export default `
**<h1 id='intro' >Ui Library of React </h2>**

<br />

### Following the UI Library specification, we developed a React UI library antd that contains a set of high quality components and demos for building rich, interactive user interfaces..
<br />


**<h2 id='features' >Features</h2>**
<br />

#### * A set of high-quality React components out of the box.
#### * Powerful theme customization in every detail.
#### * Written in TypeScript with predictable static types.
#### * The value must be chosen from a predefined set of allowed values..
<br />

<ex1></ex1>

<br />

~~~js

 import { AutoComplete } from '../../../components/baseComponent/Autocomplete';

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
<br />

**<h3 id='playground' >Playground</h3>**

#### Each of the following examples demonstrates one feature of the Autocomplete component.
<br />
<ex2></ex2>

<br />
<br />
<br />

**<h3 id='country-select' >Country select</h3>**

### Choose one of the countries..

<br />
<ex3></ex3>
<br />


~~~js

  import { AutoComplete } from '../../../components/baseComponent/Autocomplete';

  export const CountrySelectExample = () => (
    <AutoComplete
        width="300px"
        onChange={handeleChange}
        placeholder="CountrySelect"
        name="CountrySelect"
        option={Countries.map(item => item.label)}
        renderOption={Countries.map(item => (
          <div>
            <img
              loading="lazy"
              width="20"
              src={https://flagcdn.com/w20/{item.code}.toLowerCase().png}
              srcSet={https://flagcdn.com/w40/{item.code}.toLowerCase().png 2x}
              alt=""
            />
            {item.label} ({item.code}) +{item.phone}
          </div>
        ))}
        value={state}
      />
  );

~~~

<br />
<br />
<br />

**<h2 id='free-solo' >Free Solo</h2>**

### Set **freeSolo** to true so the textbox can contain any arbitrary value.
<br />
<ex4></ex4>
<br />

~~~js

    import { AutoComplete } from '../../../components/baseComponent/Autocomplete';

  export const FreeSoloExample = () => (
    <AutoComplete
        width="300px"
        freeSolo={true}
        onChange={handeleChange}
        placeholder="Free Solo"
        name="freesolo"
        option={Countries.map(item => item.label)}
        value={state}
      />
      <AutoComplete
        width="300px"
        freeSolo={true}
        search={true}
        onChange={handeleChange}
        placeholder="Search"
        name="search"
        option={Countries.map(item => item.label)}
        value={state}
      />
  );


~~~
<br />

**<h3 id='icon' >Icons</h3>**
#### There are multiple ways to display an icon with a text field.

<br />
<ex5></ex5>
<br />

~~~jsx

  import { AutoComplete } from '../../../components/baseComponent/Autocomplete';

  export const FreeSoloExample = () => (
    <AutoComplete
        freeSolo
        width="300px"
        onChange={handeleChange}
        placeholder="Start Adornment"
        name="start"
        startAdornment={<i className="fas fa-user-edit" />}
        option={[]}
        value={state}
      />
      <AutoComplete
        freeSolo
        search
        width="300px"
        onChange={handeleChange}
        placeholder="End Adornment"
        endAdornment={<i className="fas fa-search" />}
        name="end"
        option={[]}
        value={state}
      />
  );

  ~~~
<br />

**<h3 id='icon' >Validation</h3>**
#### The error prop can then be used to provide feedback to the user about the error.

<br />
<ex6></ex6>

<br />

~~~jsx


  import { AutoComplete } from '../../../components/baseComponent/Autocomplete';

  export const FreeSoloExample = () => (
    <AutoComplete
      width="300px"
        onChange={handeleChange}
        error="Input is Required"
        placeholder="Validation"
        name="Validation"
        option={[]}
        value={state}
      />
    
      />
  );


  ~~~


`;
