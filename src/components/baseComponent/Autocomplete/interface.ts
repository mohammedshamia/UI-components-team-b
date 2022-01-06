export interface IProps {
  option: any[];
  value: string;
  onChange: (e: any) => void;
  name: string;
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
}
