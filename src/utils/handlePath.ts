import { PathItem } from '../types/Path';

export const handelPath = (paths: PathItem[], filterItem: string) => {
  const isFound = paths.find(x => x.path === filterItem);
  if (!isFound) {
    return [];
  }

  return isFound.items.map(x => x);
};
