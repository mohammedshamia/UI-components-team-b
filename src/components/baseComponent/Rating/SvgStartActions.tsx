import { useState } from 'react';
import { IconContext } from 'react-icons';

import { ISvgProps } from '../../../types/rating';
import { WrapperParentStart } from './style';

const SvgStart = ({
  width,
  readonly,
  setvalue,
  ishover,
  setHover,
  // handleChange,
  index,
  value,
  icon,
  color,
  disabled,
}: ISvgProps) => {
  const [fullHover] = useState(true);
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

  // const handleWithWidth = (e: React.MouseEvent<HTMLDivElement> | any) => {
  //   const v = e.target.getBoundingClientRect();
  //   console.log('e.target.getBoundingClientRect()', width);
  //   console.log('e.target.getBoundingClientRect()', v.x);
  // };
  // const CustomIcon = (Icon: ReactNode, props: IconBaseProps) => (
  //   <>
  //     <Icon {...props} />
  //   </>
  // );
  // const Icon = (
  //   <CustomIcon
  //     Icon={<AiFillStar />}
  //     style={{
  //       stroke: 'url(#myGradient)',
  //       color: getColor(),
  //       opacity: `${disabled ? '0.4' : '1'}`,
  //       clipPath: ` ${ishover && !fullHover && `inset(0 50% 0 0)`}`,
  //     }}
  //     size={width}
  //     offset={width}
  //     width={width}
  //     stopColor="red"
  //   />
  // );
  return (
    <>
      <WrapperParentStart
        readonly={readonly}
        disabled={disabled}
        onMouseEnter={handelMouseEnter}
        onMouseLeave={handelMouseEnterLeave}
        onClick={handelClick}
        // onMouseMove={handleWithWidth}
      >
        <IconContext.Provider
          value={{
            style: {
              color: getColor(),
              width,
              opacity: disabled ? '0.4' : '1',
              stroke: 'url(#myGradient)',
              offset: width,
              clipPath: ` ${ishover && !fullHover && `inset(0 50% 0 0)`}`,
              stopColor: 'red',
            },
            size: `${width}`,
            // offset: width,

            // width:40,
          }}
        >
          {icon}
        </IconContext.Provider>
      </WrapperParentStart>
    </>
  );
};

SvgStart.defaultProps = {
  colorFill: 'none',
  precision: 50,
};

export default SvgStart;
