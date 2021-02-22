import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Variantes, VariantesRelations} from '../models';

export class VariantesRepository extends DefaultCrudRepository<
  Variantes,
  typeof Variantes.prototype.id,
  VariantesRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Variantes, dataSource);
  }
}
