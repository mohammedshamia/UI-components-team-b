import { TSize, TColor } from '../../../types/rating';

export const getMyWidth = (size: TSize): number => {
  switch (size) {
    case 'small':
      return 20;
    case 'large':
      return 40;
    case 'medium':
      return 30;
    default:
      return 20;
  }
};

export const getColor = (
  index: number,
  ishover: number,
  color: TColor,
  value: number,
) => {
  if (ishover >= index) {
    return color.fill;
  }
  if (!ishover && value >= index) {
    return color.fill;
  }

  return color.unfill;
};
