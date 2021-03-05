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
import {Acumulados} from '../models';
import {AcumuladosRepository} from '../repositories';

@authenticate('jwt')
export class AcumuladosController {
  constructor(
    @repository(AcumuladosRepository)
    public acumuladosRepository: AcumuladosRepository,
  ) { }
  /*
    @post('/acumulados')
    @response(200, {
      description: 'Acumulados model instance',
      content: {'application/json': {schema: getModelSchemaRef(Acumulados)}},
    })
    async create(
      @requestBody({
        content: {
          'application/json': {
            schema: getModelSchemaRef(Acumulados, {
              title: 'NewAcumulados',
              exclude: ['id'],
            }),
          },
        },
      })
      acumulados: Omit<Acumulados, 'id'>,
    ): Promise<Acumulados> {
      return this.acumuladosRepository.create(acumulados);
    }
  */
  @get('/acumulados/count')
  @response(200, {
    description: 'Acumulados model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Acumulados) where?: Where<Acumulados>,
  ): Promise<Count> {
    return this.acumuladosRepository.count(where);
  }

  @get('/acumulados')
  @response(200, {
    description: 'Array of Acumulados model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Acumulados, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Acumulados) filter?: Filter<Acumulados>,
  ): Promise<Acumulados[]> {
    return this.acumuladosRepository.find(filter);
  }
  /*
    @patch('/acumulados')
    @response(200, {
      description: 'Acumulados PATCH success count',
      content: {'application/json': {schema: CountSchema}},
    })
    async updateAll(
      @requestBody({
        content: {
          'application/json': {
            schema: getModelSchemaRef(Acumulados, {partial: true}),
          },
        },
      })
      acumulados: Acumulados,
      @param.where(Acumulados) where?: Where<Acumulados>,
    ): Promise<Count> {
      return this.acumuladosRepository.updateAll(acumulados, where);
    }

    @get('/acumulados/{id}')
    @response(200, {
      description: 'Acumulados model instance',
      content: {
        'application/json': {
          schema: getModelSchemaRef(Acumulados, {includeRelations: true}),
        },
      },
    })
    async findById(
      @param.path.number('id') id: number,
      @param.filter(Acumulados, {exclude: 'where'}) filter?: FilterExcludingWhere<Acumulados>
    ): Promise<Acumulados> {
      return this.acumuladosRepository.findById(id, filter);
    }

    @patch('/acumulados/{id}')
    @response(204, {
      description: 'Acumulados PATCH success',
    })
    async updateById(
      @param.path.number('id') id: number,
      @requestBody({
        content: {
          'application/json': {
            schema: getModelSchemaRef(Acumulados, {partial: true}),
          },
        },
      })
      acumulados: Acumulados,
    ): Promise<void> {
      await this.acumuladosRepository.updateById(id, acumulados);
    }

    @put('/acumulados/{id}')
    @response(204, {
      description: 'Acumulados PUT success',
    })
    async replaceById(
      @param.path.number('id') id: number,
      @requestBody() acumulados: Acumulados,
    ): Promise<void> {
      await this.acumuladosRepository.replaceById(id, acumulados);
    }

    @del('/acumulados/{id}')
    @response(204, {
      description: 'Acumulados DELETE success',
    })
    async deleteById(@param.path.number('id') id: number): Promise<void> {
      await this.acumuladosRepository.deleteById(id);
    }
  */
}
