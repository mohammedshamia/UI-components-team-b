import React from 'react';
import ReactDOM from 'react-dom';
import {
  ComboboxExample,
  CountrySelect,
  FreeSolo,
  IconExample,
  Playground,
  ValidationExample,
} from '../pages/documentation/AutoComplete/AutoComplete';

ReactDOM.render(
  <React.StrictMode>
    <ComboboxExample />
    <CountrySelect />
    <FreeSolo />
    <IconExample />
    <Playground />
    <ValidationExample />
  </React.StrictMode>,
  document.getElementById('root'),
);
