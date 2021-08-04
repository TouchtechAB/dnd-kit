import type {
  LayoutRect,
  UniqueIdentifier,
  UseDndContextReturnValue,
} from '@touchtech/dnd-kit-core';

export function getSortedRects(
  items: UniqueIdentifier[],
  layoutRects: UseDndContextReturnValue['droppableRects']
) {
  return items.reduce<LayoutRect[]>((accumulator, id, index) => {
    const layoutRect = layoutRects.get(id);

    if (layoutRect) {
      accumulator[index] = layoutRect;
    }

    return accumulator;
  }, Array(items.length));
}
