import React, { useMemo, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { PropsRating } from '../../../types/rating';
import WrapperParent from './style';
import SvgStart from './SvgStartActions';
import { getMyWidth } from './utils';

const Rating = ({
  isRow,
  count,
  size,
  defaultValue,
  color,
  precision,
  readonly,
  disabled,
  ...props
}: PropsRating) => {
  const [value, setvalue] = useState<number>(defaultValue || props.value || 0);
  const [ishover, setHover] = useState<number>(0);

  const width = getMyWidth(size);

  const RateMemo = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map(index => (
        <SvgStart
          width={width}
          color={color}
          isActive={index <= value}
          value={value}
          ishover={ishover}
          setHover={setHover}
          setvalue={setvalue}
          index={index}
          precision={precision}
          readonly={readonly}
          disabled={disabled}
          icon={AiFillStar}
        />
      ));
  }, [value, count, ishover, precision]);

  return (
    <div id={props.name}>
      {value === 0 ? <p>{props.emptyLabelText} </p> : value}
      <WrapperParent {...props} FD={isRow ? 'row' : 'column'}>
        {RateMemo}
      </WrapperParent>
    </div>
  );
};

Rating.defaultProps = {
  count: 10,
  size: 'medium',
  defaultValue: 1,
  color: {
    fill: 'yellow',
    unfill: '#DCDCDC',
  },
  value: 0,
  precision: 0.5,
  disabled: false,
  readonly: false,
  emptyLabelText: 'please  enter  value  for  user  if  it  enter',
};

export default Rating;
