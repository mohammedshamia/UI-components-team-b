/* eslint-disable no-empty */
import React, { memo, useRef, useState } from 'react';
import { ChoicesWrapper, StyledAutoComplete, Wrapper, Icon } from './styled';
import { ReactComponent as CloseIcon } from '../../../assets/Icons/x.svg';

interface IState {
  id: number;
  title: string;
  year: number;
}
interface IProps {
  option: any[];
  value: string;
  onChange: (e: any) => void;
  name: string;
  placeholder?: string;
  width?: string;
  alignItem?: string;
}
function SelectInput({
  option,
  value,
  placeholder,
  name,
  onChange,
  width = '100%',
  alignItem = 'left',
}: IProps) {
  const [state, setstate] = useState<string>(value);
  const [openChoices, setOpenChoices] = useState<boolean>(false);
  const [Choices, setChoices] = useState<any>([...option]);

  const ref = useRef<HTMLDivElement>(null);

  const handleClickChoice = (item: string) => {
    setstate(item);
    setOpenChoices(false);
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
      ref.current !== null &&
      e.target !== null &&
      ref.current.contains(e.target as any)
    ) {
    } else {
      setOpenChoices(false);
    }
  };

  document.addEventListener('mousedown', checkIfClickedOutside);
  const handleClearInput = () => {
    setstate('');
  };
  return (
    <Wrapper width={width} ref={ref}>
      <div>
        <StyledAutoComplete
          onChange={handleChangeInput}
          value={state}
          placeholder={placeholder}
          onFocus={handleFocusInput}
          name={name}
        />
        {state && (
          <Icon onClick={handleClearInput}>
            <CloseIcon />
          </Icon>
        )}
      </div>
      {Choices.length > 0 && (
        <ChoicesWrapper alignItem={alignItem} openChoices={openChoices}>
          {Choices.map((item: IState) => (
            <button
              type="button"
              key={item.id}
              onClick={() => {
                handleClickChoice(item.title);
              }}
            >
              {item.title}
            </button>
          ))}
        </ChoicesWrapper>
      )}
    </Wrapper>
  );
}

export default memo(SelectInput);
