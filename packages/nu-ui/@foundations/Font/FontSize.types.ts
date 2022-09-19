import { SerializedStyles } from '@emotion/react';

export type FontSizeKey =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'p1'
  | 'p2'
  | 'p3'
  | 'p4'
  | 'angels-h4'
  | 'angels-p1'
  | 'angels-p2'
  | 'angels-p3'
  | 'angels-p4';

export type FontSizeTypes = Record<FontSizeKey, SerializedStyles>;
