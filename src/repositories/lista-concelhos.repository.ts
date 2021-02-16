import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {ListaConcelhos, ListaConcelhosRelations} from '../models';

export class ListaConcelhosRepository extends DefaultCrudRepository<
  ListaConcelhos,
  typeof ListaConcelhos.prototype.id,
  ListaConcelhosRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(ListaConcelhos, dataSource);
  }
}
