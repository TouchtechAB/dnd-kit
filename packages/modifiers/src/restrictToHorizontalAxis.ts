import type { Modifier } from '@touchtech/dnd-kit-core';

export const restrictToHorizontalAxis: Modifier = ({ transform }) => {
  return {
    ...transform,
    y: 0,
  };
};
