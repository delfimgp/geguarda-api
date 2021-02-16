import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Casos, CasosRelations} from '../models';

export class CasosRepository extends DefaultCrudRepository<
  Casos,
  typeof Casos.prototype.id,
  CasosRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Casos, dataSource);
  }
}
