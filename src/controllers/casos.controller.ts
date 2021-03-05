import {authenticate} from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,

  repository,
  Where
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef, param,






  response
} from '@loopback/rest';
import {Casos} from '../models';
import {CasosRepository} from '../repositories';

@authenticate('jwt')
export class CasosController {
  constructor(
    @repository(CasosRepository)
    public casosRepository: CasosRepository,
  ) { }
  /*
    @post('/casos')
    @response(200, {
      description: 'Casos model instance',
      content: {'application/json': {schema: getModelSchemaRef(Casos)}},
    })
    async create(
      @requestBody({
        content: {
          'application/json': {
            schema: getModelSchemaRef(Casos, {
              title: 'NewCasos',
              exclude: ['id'],
            }),
          },
        },
      })
      casos: Omit<Casos, 'id'>,
    ): Promise<Casos> {
      return this.casosRepository.create(casos);
    }
  */
  @get('/casos/count')
  @response(200, {
    description: 'Casos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Casos) where?: Where<Casos>,
  ): Promise<Count> {
    return this.casosRepository.count(where);
  }

  @get('/casos')
  @response(200, {
    description: 'Array of Casos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Casos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Casos) filter?: Filter<Casos>,
  ): Promise<Casos[]> {
    return this.casosRepository.find(filter);
  }
  /*
    @patch('/casos')
    @response(200, {
      description: 'Casos PATCH success count',
      content: {'application/json': {schema: CountSchema}},
    })
    async updateAll(
      @requestBody({
        content: {
          'application/json': {
            schema: getModelSchemaRef(Casos, {partial: true}),
          },
        },
      })
      casos: Casos,
      @param.where(Casos) where?: Where<Casos>,
    ): Promise<Count> {
      return this.casosRepository.updateAll(casos, where);
    }

    @get('/casos/{id}')
    @response(200, {
      description: 'Casos model instance',
      content: {
        'application/json': {
          schema: getModelSchemaRef(Casos, {includeRelations: true}),
        },
      },
    })
    async findById(
      @param.path.number('id') id: number,
      @param.filter(Casos, {exclude: 'where'}) filter?: FilterExcludingWhere<Casos>
    ): Promise<Casos> {
      return this.casosRepository.findById(id, filter);
    }

    @patch('/casos/{id}')
    @response(204, {
      description: 'Casos PATCH success',
    })
    async updateById(
      @param.path.number('id') id: number,
      @requestBody({
        content: {
          'application/json': {
            schema: getModelSchemaRef(Casos, {partial: true}),
          },
        },
      })
      casos: Casos,
    ): Promise<void> {
      await this.casosRepository.updateById(id, casos);
    }

    @put('/casos/{id}')
    @response(204, {
      description: 'Casos PUT success',
    })
    async replaceById(
      @param.path.number('id') id: number,
      @requestBody() casos: Casos,
    ): Promise<void> {
      await this.casosRepository.replaceById(id, casos);
    }

    @del('/casos/{id}')
    @response(204, {
      description: 'Casos DELETE success',
    })
    async deleteById(@param.path.number('id') id: number): Promise<void> {
      await this.casosRepository.deleteById(id);
    }
  */
}
