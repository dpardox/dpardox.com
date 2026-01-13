import { Networks } from '@core/enums/networks';
import { Network } from '@core/interfaces/network';
import { NetworkResponse } from '@infrastructure/dtos/network';

export class NetworkMapper {
  public static toDomainList(dtos: NetworkResponse[]): Network[] {
    return dtos.map((dto) => this.toDomain(dto));
  }

  public static toDomain(dto: NetworkResponse): Network {
    return {
      name: dto.name as Networks,
      user: dto.user,
      image: dto.image,
      link: dto.link,
    };
  }
}
