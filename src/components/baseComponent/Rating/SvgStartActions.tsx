import React from 'react';
import { IconContext } from 'react-icons';
import { AiFillStar } from 'react-icons/ai';
import { ISvgProps } from '../../../types/rating';
import { WrapperParentStart } from './style';

const SvgStart = ({
  width,
  readonly,
  setvalue,
  ishover,
  setHover,
  index,
  value,
  color,
  disabled,
  icon,
  ...props
}: ISvgProps) => {
  const handelMouseEnter = () => {
    if (disabled || readonly) return;
    setHover(index);
  };

  const handelMouseEnterLeave = () => {
    if (disabled || readonly) return;

    setHover(0);
  };
  const handelClick = () => {
    if (disabled || readonly) return;

    if (value === index) {
      if (readonly) return;

      setvalue(0);
      setHover(0);

      return;
    }
    setvalue(index);
  };

  const getColor = () => {
    if (ishover >= index) {
      return color.fill;
    }
    if (!ishover && value >= index) {
      return color.fill;
    }

    return color.unfill;
  };
  <svg width={width} height={width} style={{ color: getColor() }}>
    <defs>
      <linearGradient id="myGradient">
        <stop offset="50%" stopColor="yellow" />
        <stop offset="50%" stopColor="grey" stopOpacity="1" />
      </linearGradient>
    </defs>
  </svg>;

  return (
    <>
      <WrapperParentStart
        readonly={readonly}
        disabled={disabled}
        onMouseEnter={handelMouseEnter}
        onMouseLeave={handelMouseEnterLeave}
        onClick={handelClick}
      >
        {/* <IconContext.Provider value={{ attr: { fill: "url('#myGradient')" } }}> */}
        {icon}
        <AiFillStar
          style={{ stroke: 'url(#myGradient)', color: getColor() }}
          size={width}
          offset={width}
          width={width}
          stopColor="red"
        />
        {/* </IconContext.Provider> */}
      </WrapperParentStart>
    </>
  );
};

SvgStart.defaultProps = {
  colorFill: 'none',
  precision: 50,
};

export default SvgStart;
