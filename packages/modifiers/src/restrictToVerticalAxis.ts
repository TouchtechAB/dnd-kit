import type { Modifier } from '@touchtech/dnd-kit-core';

export const restrictToVerticalAxis: Modifier = ({ transform }) => {
  return {
    ...transform,
    x: 0,
  };
};
