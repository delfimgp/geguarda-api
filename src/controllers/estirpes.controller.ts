import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Estirpes} from '../models';
import {EstirpesRepository} from '../repositories';

export class EstirpesController {
  constructor(
    @repository(EstirpesRepository)
    public estirpesRepository : EstirpesRepository,
  ) {}

  @post('/estirpes')
  @response(200, {
    description: 'Estirpes model instance',
    content: {'application/json': {schema: getModelSchemaRef(Estirpes)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estirpes, {
            title: 'NewEstirpes',
            exclude: ['id'],
          }),
        },
      },
    })
    estirpes: Omit<Estirpes, 'id'>,
  ): Promise<Estirpes> {
    return this.estirpesRepository.create(estirpes);
  }

  @get('/estirpes/count')
  @response(200, {
    description: 'Estirpes model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Estirpes) where?: Where<Estirpes>,
  ): Promise<Count> {
    return this.estirpesRepository.count(where);
  }

  @get('/estirpes')
  @response(200, {
    description: 'Array of Estirpes model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Estirpes, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Estirpes) filter?: Filter<Estirpes>,
  ): Promise<Estirpes[]> {
    return this.estirpesRepository.find(filter);
  }

  @patch('/estirpes')
  @response(200, {
    description: 'Estirpes PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estirpes, {partial: true}),
        },
      },
    })
    estirpes: Estirpes,
    @param.where(Estirpes) where?: Where<Estirpes>,
  ): Promise<Count> {
    return this.estirpesRepository.updateAll(estirpes, where);
  }

  @get('/estirpes/{id}')
  @response(200, {
    description: 'Estirpes model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Estirpes, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Estirpes, {exclude: 'where'}) filter?: FilterExcludingWhere<Estirpes>
  ): Promise<Estirpes> {
    return this.estirpesRepository.findById(id, filter);
  }

  @patch('/estirpes/{id}')
  @response(204, {
    description: 'Estirpes PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estirpes, {partial: true}),
        },
      },
    })
    estirpes: Estirpes,
  ): Promise<void> {
    await this.estirpesRepository.updateById(id, estirpes);
  }

  @put('/estirpes/{id}')
  @response(204, {
    description: 'Estirpes PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() estirpes: Estirpes,
  ): Promise<void> {
    await this.estirpesRepository.replaceById(id, estirpes);
  }

  @del('/estirpes/{id}')
  @response(204, {
    description: 'Estirpes DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.estirpesRepository.deleteById(id);
  }
}
