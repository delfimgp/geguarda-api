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
import {Variantes} from '../models';
import {VariantesRepository} from '../repositories';

@authenticate('jwt')
export class VariantesController {
  constructor(
    @repository(VariantesRepository)
    public variantesRepository: VariantesRepository,
  ) { }
  /*
    @post('/variantes')
    @response(200, {
      description: 'Variantes model instance',
      content: {'application/json': {schema: getModelSchemaRef(Variantes)}},
    })
    async create(
      @requestBody({
        content: {
          'application/json': {
            schema: getModelSchemaRef(Variantes, {
              title: 'NewVariantes',
              exclude: ['id'],
            }),
          },
        },
      })
      variantes: Omit<Variantes, 'id'>,
    ): Promise<Variantes> {
      return this.variantesRepository.create(variantes);
    }
  */
  @get('/variantes/count')
  @response(200, {
    description: 'Variantes model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Variantes) where?: Where<Variantes>,
  ): Promise<Count> {
    return this.variantesRepository.count(where);
  }

  @get('/variantes')
  @response(200, {
    description: 'Array of Variantes model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Variantes, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Variantes) filter?: Filter<Variantes>,
  ): Promise<Variantes[]> {
    return this.variantesRepository.find(filter);
  }
  /*
    @patch('/variantes')
    @response(200, {
      description: 'Variantes PATCH success count',
      content: {'application/json': {schema: CountSchema}},
    })
    async updateAll(
      @requestBody({
        content: {
          'application/json': {
            schema: getModelSchemaRef(Variantes, {partial: true}),
          },
        },
      })
      variantes: Variantes,
      @param.where(Variantes) where?: Where<Variantes>,
    ): Promise<Count> {
      return this.variantesRepository.updateAll(variantes, where);
    }

    @get('/variantes/{id}')
    @response(200, {
      description: 'Variantes model instance',
      content: {
        'application/json': {
          schema: getModelSchemaRef(Variantes, {includeRelations: true}),
        },
      },
    })
    async findById(
      @param.path.number('id') id: number,
      @param.filter(Variantes, {exclude: 'where'}) filter?: FilterExcludingWhere<Variantes>
    ): Promise<Variantes> {
      return this.variantesRepository.findById(id, filter);
    }

    @patch('/variantes/{id}')
    @response(204, {
      description: 'Variantes PATCH success',
    })
    async updateById(
      @param.path.number('id') id: number,
      @requestBody({
        content: {
          'application/json': {
            schema: getModelSchemaRef(Variantes, {partial: true}),
          },
        },
      })
      variantes: Variantes,
    ): Promise<void> {
      await this.variantesRepository.updateById(id, variantes);
    }

    @put('/variantes/{id}')
    @response(204, {
      description: 'Variantes PUT success',
    })
    async replaceById(
      @param.path.number('id') id: number,
      @requestBody() variantes: Variantes,
    ): Promise<void> {
      await this.variantesRepository.replaceById(id, variantes);
    }

    @del('/variantes/{id}')
    @response(204, {
      description: 'Variantes DELETE success',
    })
    async deleteById(@param.path.number('id') id: number): Promise<void> {
      await this.variantesRepository.deleteById(id);
    }
  */
}
