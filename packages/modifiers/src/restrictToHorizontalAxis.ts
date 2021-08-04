import type { Modifier } from '@touchtech/custom-dnd-kit-core';

export const restrictToHorizontalAxis: Modifier = ({ transform }) => {
  return {
    ...transform,
    y: 0,
  };
};
