import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Acumulados, AcumuladosRelations} from '../models';

export class AcumuladosRepository extends DefaultCrudRepository<
  Acumulados,
  typeof Acumulados.prototype.id,
  AcumuladosRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Acumulados, dataSource);
  }
}
