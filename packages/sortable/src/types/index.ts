import type {LayoutRect, ViewRect} from '@touchtech/custom-dnd-kit-core';
import type {Transform} from '@touchtech/custom-dnd-kit-utilities';

export type SortingStrategy = (args: {
  activeNodeRect: ViewRect | null;
  activeIndex: number;
  index: number;
  layoutRects: LayoutRect[];
  overIndex: number;
}) => Transform | null;
