import type { Without } from '@touchtech/dnd-kit-utilities';

export type SyntheticEventName = keyof Without<
  React.DOMAttributes<any>,
  'children' | 'dangerouslySetInnerHTML'
>;
