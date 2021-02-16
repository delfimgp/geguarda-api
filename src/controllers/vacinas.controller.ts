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
import {Vacinas} from '../models';
import {VacinasRepository} from '../repositories';

export class VacinasController {
  constructor(
    @repository(VacinasRepository)
    public vacinasRepository : VacinasRepository,
  ) {}

  @post('/vacinas')
  @response(200, {
    description: 'Vacinas model instance',
    content: {'application/json': {schema: getModelSchemaRef(Vacinas)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vacinas, {
            title: 'NewVacinas',
            exclude: ['id'],
          }),
        },
      },
    })
    vacinas: Omit<Vacinas, 'id'>,
  ): Promise<Vacinas> {
    return this.vacinasRepository.create(vacinas);
  }

  @get('/vacinas/count')
  @response(200, {
    description: 'Vacinas model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Vacinas) where?: Where<Vacinas>,
  ): Promise<Count> {
    return this.vacinasRepository.count(where);
  }

  @get('/vacinas')
  @response(200, {
    description: 'Array of Vacinas model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Vacinas, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Vacinas) filter?: Filter<Vacinas>,
  ): Promise<Vacinas[]> {
    return this.vacinasRepository.find(filter);
  }

  @patch('/vacinas')
  @response(200, {
    description: 'Vacinas PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vacinas, {partial: true}),
        },
      },
    })
    vacinas: Vacinas,
    @param.where(Vacinas) where?: Where<Vacinas>,
  ): Promise<Count> {
    return this.vacinasRepository.updateAll(vacinas, where);
  }

  @get('/vacinas/{id}')
  @response(200, {
    description: 'Vacinas model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Vacinas, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Vacinas, {exclude: 'where'}) filter?: FilterExcludingWhere<Vacinas>
  ): Promise<Vacinas> {
    return this.vacinasRepository.findById(id, filter);
  }

  @patch('/vacinas/{id}')
  @response(204, {
    description: 'Vacinas PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vacinas, {partial: true}),
        },
      },
    })
    vacinas: Vacinas,
  ): Promise<void> {
    await this.vacinasRepository.updateById(id, vacinas);
  }

  @put('/vacinas/{id}')
  @response(204, {
    description: 'Vacinas PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() vacinas: Vacinas,
  ): Promise<void> {
    await this.vacinasRepository.replaceById(id, vacinas);
  }

  @del('/vacinas/{id}')
  @response(204, {
    description: 'Vacinas DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.vacinasRepository.deleteById(id);
  }
}
