import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Concelhos, ConcelhosRelations, Casos} from '../models';
import {CasosRepository} from './casos.repository';

export class ConcelhosRepository extends DefaultCrudRepository<
  Concelhos,
  typeof Concelhos.prototype.concelho,
  ConcelhosRelations
> {

  public readonly casos: HasManyRepositoryFactory<Casos, typeof Concelhos.prototype.concelho>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('CasosRepository') protected casosRepositoryGetter: Getter<CasosRepository>,
  ) {
    super(Concelhos, dataSource);
    this.casos = this.createHasManyRepositoryFactoryFor('casos', casosRepositoryGetter,);
    this.registerInclusionResolver('casos', this.casos.inclusionResolver);
  }
}
