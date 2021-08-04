import type { Transform } from '@touchtech/dnd-kit-utilities';
import type { Active, Over } from '../store';
import type { ClientRect, ViewRect } from '../types';

export type Modifier = (args: {
  activatorEvent: Event | null;
  active: Active | null;
  activeNodeRect: ViewRect | null;
  draggingNodeRect: ViewRect | null;
  containerNodeRect: ViewRect | null;
  over: Over | null;
  overlayNodeRect: ViewRect | null;
  scrollableAncestors: Element[];
  scrollableAncestorRects: ViewRect[];
  transform: Transform;
  windowRect: ClientRect | null;
}) => Transform;

export type Modifiers = Modifier[];
