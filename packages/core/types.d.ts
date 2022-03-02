
import type { RawLocation } from 'vue-router/types';
import type { VNode } from 'vue/types';

export type RouteProps = {
  url?: string;
  replace?: boolean;
  to?: RawLocation;
};

export type ScopedSlot<Props = any> = (
  props?: Props
) => VNode[] | VNode | undefined;

export type DefaultSlots = {
  default?: ScopedSlot;
};
