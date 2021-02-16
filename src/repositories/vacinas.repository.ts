import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Vacinas, VacinasRelations} from '../models';

export class VacinasRepository extends DefaultCrudRepository<
  Vacinas,
  typeof Vacinas.prototype.id,
  VacinasRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Vacinas, dataSource);
  }
}
