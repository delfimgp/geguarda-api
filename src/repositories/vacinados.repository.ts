import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Vacinados, VacinadosRelations} from '../models';

export class VacinadosRepository extends DefaultCrudRepository<
  Vacinados,
  typeof Vacinados.prototype.id,
  VacinadosRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Vacinados, dataSource);
  }
}
