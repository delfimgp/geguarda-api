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
import {Vacinados} from '../models';
import {VacinadosRepository} from '../repositories';

@authenticate('jwt')
export class VacinadosController {
  constructor(
    @repository(VacinadosRepository)
    public vacinadosRepository: VacinadosRepository,
  ) { }
  /*
    @post('/vacinados')
    @response(200, {
      description: 'Vacinados model instance',
      content: {'application/json': {schema: getModelSchemaRef(Vacinados)}},
    })
    async create(
      @requestBody({
        content: {
          'application/json': {
            schema: getModelSchemaRef(Vacinados, {
              title: 'NewVacinados',
              exclude: ['id'],
            }),
          },
        },
      })
      vacinados: Omit<Vacinados, 'id'>,
    ): Promise<Vacinados> {
      return this.vacinadosRepository.create(vacinados);
    }
  */
  @get('/vacinados/count')
  @response(200, {
    description: 'Vacinados model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Vacinados) where?: Where<Vacinados>,
  ): Promise<Count> {
    return this.vacinadosRepository.count(where);
  }

  @get('/vacinados')
  @response(200, {
    description: 'Array of Vacinados model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Vacinados, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Vacinados) filter?: Filter<Vacinados>,
  ): Promise<Vacinados[]> {
    return this.vacinadosRepository.find(filter);
  }
  /*
    @patch('/vacinados')
    @response(200, {
      description: 'Vacinados PATCH success count',
      content: {'application/json': {schema: CountSchema}},
    })
    async updateAll(
      @requestBody({
        content: {
          'application/json': {
            schema: getModelSchemaRef(Vacinados, {partial: true}),
          },
        },
      })
      vacinados: Vacinados,
      @param.where(Vacinados) where?: Where<Vacinados>,
    ): Promise<Count> {
      return this.vacinadosRepository.updateAll(vacinados, where);
    }

    @get('/vacinados/{id}')
    @response(200, {
      description: 'Vacinados model instance',
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vacinados, {includeRelations: true}),
        },
      },
    })
    async findById(
      @param.path.number('id') id: number,
      @param.filter(Vacinados, {exclude: 'where'}) filter?: FilterExcludingWhere<Vacinados>
    ): Promise<Vacinados> {
      return this.vacinadosRepository.findById(id, filter);
    }

    @patch('/vacinados/{id}')
    @response(204, {
      description: 'Vacinados PATCH success',
    })
    async updateById(
      @param.path.number('id') id: number,
      @requestBody({
        content: {
          'application/json': {
            schema: getModelSchemaRef(Vacinados, {partial: true}),
          },
        },
      })
      vacinados: Vacinados,
    ): Promise<void> {
      await this.vacinadosRepository.updateById(id, vacinados);
    }

    @put('/vacinados/{id}')
    @response(204, {
      description: 'Vacinados PUT success',
    })
    async replaceById(
      @param.path.number('id') id: number,
      @requestBody() vacinados: Vacinados,
    ): Promise<void> {
      await this.vacinadosRepository.replaceById(id, vacinados);
    }

    @del('/vacinados/{id}')
    @response(204, {
      description: 'Vacinados DELETE success',
    })
    async deleteById(@param.path.number('id') id: number): Promise<void> {
      await this.vacinadosRepository.deleteById(id);
    }
  */
}
