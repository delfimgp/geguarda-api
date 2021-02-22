import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Ativos, AtivosRelations} from '../models';

export class AtivosRepository extends DefaultCrudRepository<
  Ativos,
  typeof Ativos.prototype.id,
  AtivosRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Ativos, dataSource);
  }
}
