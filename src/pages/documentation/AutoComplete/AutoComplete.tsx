import { useState } from 'react';
import { InfoContainer } from '../../../components';
import SelectInput from '../../../components/baseComponent/Autocomplete/selectInput';
import { Countries, top100Films } from './dataOption';

export const ComboboxExample = () => {
  const [state, setState] = useState<string>('');
  const handeleChange = (newvalue: string) => {
    setState(newvalue);
  };
  return (
    <InfoContainer>
      <SelectInput
        borderRadius="7px"
        id="combo-box-demo"
        width="300px"
        onChange={handeleChange}
        placeholder="select"
        name="combo box"
        option={top100Films.map(item => item.label)}
        value={state}
      />
    </InfoContainer>
  );
};

export const Playground = () => {
  const [state, setState] = useState<string>('');
  const handeleChange = (newvalue: string) => {
    setState(newvalue);
  };
  return (
    <InfoContainer flexDirection="column">
      <SelectInput
        borderRadius="7px"
        id="disable-close-onSelect"
        margin="15px"
        width="300px"
        disableCloseOnSelect
        onChange={handeleChange}
        placeholder="disableCloseOnSelect"
        name="disableCloseOnSelect"
        option={top100Films.map(item => item.label)}
        value={state}
      />
      <SelectInput
        borderRadius="7px"
        id="disable-clear-able"
        margin="15px"
        width="300px"
        disableClearable
        onChange={handeleChange}
        placeholder="disableClearable"
        name="disableClearable"
        option={top100Films.map(item => item.label)}
        value={state}
      />
      <SelectInput
        id="disabled"
        margin="15px"
        width="300px"
        disabled
        onChange={handeleChange}
        placeholder="disabled"
        name="disabled"
        option={[]}
        value={state}
      />
    </InfoContainer>
  );
};
export const CountrySelect = () => {
  const [state, setState] = useState<string>('');
  const handeleChange = (newvalue: string) => {
    setState(newvalue);
  };
  return (
    <InfoContainer>
      <SelectInput
        id="country-select-demo"
        width="300px"
        onChange={handeleChange}
        align-items="left"
        placeholder="Country Select"
        name="CountrySelect"
        option={Countries.map(item => item.label)}
        renderOption={Countries.map(item => (
          <div>
            <img
              loading="lazy"
              width="20"
              src={`https://flagcdn.com/w20/${item.code.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w40/${item.code.toLowerCase()}.png 2x`}
              alt=""
            />
            <span style={{ marginLeft: '10px' }}>
              {item.label} ({item.code}) +{item.phone}
            </span>
          </div>
        ))}
        value={state}
      />
    </InfoContainer>
  );
};
export const FreeSolo = () => {
  const [state, setState] = useState<string>('');
  const handeleChange = (newvalue: string) => {
    setState(newvalue);
  };
  return (
    <InfoContainer flexDirection="column">
      <SelectInput
        id="free-solo-demo"
        freeSolo
        margin="10px"
        width="300px"
        onChange={handeleChange}
        placeholder="Free Solo"
        name="freesolo"
        option={Countries.map(item => item.label)}
        value={state}
      />
      <SelectInput
        id="free-solo-2-demo"
        freeSolo
        margin="10px"
        search
        width="300px"
        onChange={handeleChange}
        placeholder="Search"
        name="search"
        option={Countries.map(item => item.label)}
        value={state}
      />
    </InfoContainer>
  );
};

export const IconExample = () => {
  const [state, setState] = useState<string>('');
  const handeleChange = (newvalue: string) => {
    setState(newvalue);
  };
  return (
    <InfoContainer flexDirection="column">
      <SelectInput
        id="start-Adornment-demo"
        freeSolo
        margin="10px"
        width="300px"
        onChange={handeleChange}
        placeholder="Start Adornment"
        name="start"
        startAdornment={<i className="fas fa-user-edit" />}
        option={[]}
        value={state}
      />
      <SelectInput
        margin="10px"
        id="end-Adornment-demo"
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
    </InfoContainer>
  );
};

export const ValidationExample = () => {
  const [state, setState] = useState<string>('');
  const handeleChange = (newvalue: string) => {
    setState(newvalue);
  };
  return (
    <InfoContainer>
      <SelectInput
        id="validation-demo"
        width="300px"
        onChange={handeleChange}
        error="Input is Required"
        placeholder="Validation"
        name="Validation"
        option={top100Films.map(item => item.label)}
        value={state}
      />
    </InfoContainer>
  );
};
