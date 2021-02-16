import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Estirpes, EstirpesRelations} from '../models';

export class EstirpesRepository extends DefaultCrudRepository<
  Estirpes,
  typeof Estirpes.prototype.id,
  EstirpesRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Estirpes, dataSource);
  }
}
