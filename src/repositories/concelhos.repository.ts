import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Concelhos, ConcelhosRelations} from '../models';

export class ConcelhosRepository extends DefaultCrudRepository<
  Concelhos,
  typeof Concelhos.prototype.id,
  ConcelhosRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Concelhos, dataSource);
  }
}
