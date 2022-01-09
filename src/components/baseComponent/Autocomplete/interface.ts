export interface IProps {
  option: any[];
  getOptionLabel?: any[];
  value: string;
  onChange: (e: any) => void;
  name?: string;
  placeholder?: string;
  width?: string;
  alignItem?: string;
  freeSolo?: boolean;
  fontSize?: string;
  disabled?: boolean;
  disableCloseOnSelect?: boolean;
  disableClearable?: boolean;
  error?: string;
  renderOption?: JSX.Element[];
  search?: boolean;
  startAdornment?: JSX.Element;
  endAdornment?: JSX.Element;
  borderRadius?: string;
  margin?: string;
  id: string;
}
