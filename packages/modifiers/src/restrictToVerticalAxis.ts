import type {Modifier} from '@touchtech/custom-dnd-kit-core';

export const restrictToVerticalAxis: Modifier = ({transform}) => {
  return {
    ...transform,
    x: 0,
  };
};
