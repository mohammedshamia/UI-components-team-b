
**<h1 id='autocomplete' >AutoComplete </h2>**

<br />

### The autocomplete is a normal text input enhanced by a panel of suggested options.
<br />

#### 1. The widget is useful for setting the value of a single-line textbox in one of two types of scenarios: The value for the textbox must be chosen from a predefined set of allowed values, e.g., a location field must contain a valid location name: **combo box**
<br />

#### 2. The textbox may contain any arbitrary value, but it is advantageous to suggest possible values to the user, e.g., a search field may suggest similar or previous searches to save the user time: **free solo**
<br />

<h2 id='combo-box' >Combo box </h2>
<br />

#### The value must be chosen from a predefined set of allowed values..
<br />

<ex1></ex1>



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

<h3 id='playground' >Playground</h3>
<br />

#### Each of the following examples demonstrates one feature of the Autocomplete component.
<br />
<ex2></ex2>

<br />
<br />
<br />

<h3 id='country-select' >Country select</h3>
<br />

#### Choose one of the countries..

<br />
<ex3></ex3>



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

<h2 id='free-solo' >Free Solo</h2>

### Set *freeSolo* to true so the textbox can contain any arbitrary value.
<br />
<ex4></ex4>


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

<h2 id='icons'>Icons</h2>

### There are multiple ways to display an icon with a text field.


<br />
<ex5></ex5>


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
<br />

<h2 id='validation' >Validation</h2>

### The error prop can then be used to provide feedback to the user about the error.

<br />
<ex6></ex6>



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
<br />
<br />
<h2 id='api' ></h2>



