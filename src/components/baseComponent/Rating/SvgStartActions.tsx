import { useState } from 'react';
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
}: ISvgProps) => {
  const [fullHover, setfullHover] = useState(true);
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
  <svg
    width={width}
    height={width}
    style={{ color: getColor(), clipPath: `inset(0 50% 0 0)` }}
  >
    {/* <defs>
      <linearGradient id="myGradient">
        <stop offset="50%" stopColor="yellow" />
        <stop offset="50%" stopColor="grey" stopOpacity="1" />
      </linearGradient>
    </defs> */}
  </svg>;

  const handleWithWidth = (e: React.MouseEvent<HTMLDivElement> | any) => {
    const v = e.target.getBoundingClientRect();
    console.log('e.target.getBoundingClientRect()', width);
    console.log('e.target.getBoundingClientRect()', v.x);
  };
  return (
    <>
      <WrapperParentStart
        readonly={readonly}
        disabled={disabled}
        onMouseEnter={handelMouseEnter}
        onMouseLeave={handelMouseEnterLeave}
        onClick={handelClick}
        onMouseMove={handleWithWidth}
      >
        {/* <IconContext.Provider value={{ attr: { fill: "url('#myGradient')" } }}> */}
        <AiFillStar
          style={{
            stroke: 'url(#myGradient)',
            color: getColor(),
            clipPath: ` ${ishover && !fullHover && `inset(0 50% 0 0)`}`,
          }}
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
