import { Networks } from '@core/enums/networks';

export interface Network {
  readonly name: Networks;
  readonly user: string;
  readonly image: string;
  readonly link: string;
}
