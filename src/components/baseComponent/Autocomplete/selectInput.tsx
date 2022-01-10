import React, { memo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChoicesWrapper,
  StyledAutoComplete,
  Wrapper,
  Icon,
  ArrowIcon,
  Button,
  TextError,
  StartIcon,
  BoxInput,
  Box,
} from './styled';
import { ReactComponent as CloseIcon } from '../../../assets/Icons/x.svg';
import { ReactComponent as ArrowUp } from '../../../assets/Icons/chevron-up.svg';
import { ReactComponent as ArrowDown } from '../../../assets/Icons/chevron-down.svg';
import { IProps } from './interface';

function SelectInput({
  option,
  value,
  placeholder,
  name,
  onChange,
  width = '100%',
  alignItem = 'left',
  freeSolo,
  fontSize = '1rem',
  id,
  ...others
}: IProps) {
  const [state, setstate] = useState<string>(value);
  const [openChoices, setOpenChoices] = useState<boolean>(false);
  const [Choices, setChoices] = useState<any>([...option]);
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);

  const handleSearchItem = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && others.search) {
      navigate(`/components/${state}`);
    }
  };
  const handleClickChoice = (item: string | any) => {
    if (others.renderOption) {
      const setvalue = item.props.children[1].props.children[0];
      onChange(setvalue);
      setstate(setvalue);
    } else {
      onChange(item);
      setstate(item);
    }

    if (!others.disableCloseOnSelect || false) {
      setOpenChoices(false);
    }
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setstate(e.target.value);
    setChoices(option.filter(item => item.includes(e.target.value)));
    onChange(e.target.value);
  };

  const handleFocusInput = () => {
    setOpenChoices(true);
  };

  const checkIfClickedOutside = (e: MouseEvent) => {
    if (
      !(
        ref.current !== null &&
        e.target !== null &&
        ref.current.contains(e.target as any)
      )
    )
      setOpenChoices(false);
  };
  document.addEventListener('mousedown', checkIfClickedOutside);
  const handleClearInput = () => {
    onChange('');
    setstate('');
  };
  return (
    <Box>
      <Wrapper
        margin={others.margin || ''}
        borderRadius={others.borderRadius}
        error={others.error || ''}
        disabled={others.disabled || false}
        width={width}
        ref={ref}
      >
        <BoxInput>
          {others.startAdornment && (
            <StartIcon>{others.startAdornment}</StartIcon>
          )}
          <StyledAutoComplete
            id={id}
            autoComplete="false"
            onChange={handleChangeInput}
            value={state}
            placeholder={placeholder}
            onFocus={handleFocusInput}
            name={name}
            fontSize={fontSize}
            onKeyUp={e => handleSearchItem(e)}
            disabled={others.disabled || false}
          />

          {state && !others.disableClearable && (
            <Icon onClick={handleClearInput}>
              <CloseIcon />
            </Icon>
          )}
          {!freeSolo && (
            <ArrowIcon
              onClick={() => {
                setOpenChoices(!openChoices);
              }}
            >
              {openChoices ? <ArrowUp /> : <ArrowDown />}
            </ArrowIcon>
          )}
          {others.endAdornment && <StartIcon>{others.endAdornment}</StartIcon>}
        </BoxInput>

        {!others.renderOption && Choices.length > 0 && (
          <ChoicesWrapper
            maxHeight="300px"
            alignItem={alignItem}
            openChoices={openChoices || false}
          >
            {Choices.map((item: string, index: number) => (
              <Button
                fontSize={fontSize}
                isActive={state === item}
                type="button"
                key={index}
                onClick={() => {
                  handleClickChoice(item);
                }}
              >
                {item}
              </Button>
            ))}
          </ChoicesWrapper>
        )}
        {others.renderOption && (
          <ChoicesWrapper
            maxHeight="300px"
            alignItem={alignItem}
            openChoices={openChoices}
          >
            {others.renderOption.map((item: any, index: number) => (
              <Button
                textAlign="start"
                fontSize={fontSize}
                isActive={state === item}
                type="button"
                key={index}
                onClick={() => {
                  handleClickChoice(item);
                }}
              >
                {item}
              </Button>
            ))}
          </ChoicesWrapper>
        )}
      </Wrapper>
      <TextError error={others.error}>{others.error || ''}</TextError>
    </Box>
  );
}

export default memo(SelectInput);
