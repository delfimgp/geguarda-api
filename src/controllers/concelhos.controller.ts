import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef, param,










  response
} from '@loopback/rest';
import {Concelhos} from '../models';
import {ConcelhosRepository} from '../repositories';

export class ConcelhosController {
  constructor(
    @repository(ConcelhosRepository)
    public concelhosRepository: ConcelhosRepository,
  ) { }
  /*
    @post('/concelhos')
    @response(200, {
      description: 'Concelhos model instance',
      content: {'application/json': {schema: getModelSchemaRef(Concelhos)}},
    })
    async create(
      @requestBody({
        content: {
          'application/json': {
            schema: getModelSchemaRef(Concelhos, {
              title: 'NewConcelhos',
              exclude: ['id'],
            }),
          },
        },
      })
      concelhos: Omit<Concelhos, 'id'>,
    ): Promise<Concelhos> {
      return this.concelhosRepository.create(concelhos);
    }
  */
  @get('/concelhos/count')
  @response(200, {
    description: 'Concelhos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Concelhos) where?: Where<Concelhos>,
  ): Promise<Count> {
    return this.concelhosRepository.count(where);
  }

  @get('/concelhos')
  @response(200, {
    description: 'Array of Concelhos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Concelhos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Concelhos) filter?: Filter<Concelhos>,
  ): Promise<Concelhos[]> {
    return this.concelhosRepository.find(filter);
  }
  /*
    @patch('/concelhos')
    @response(200, {
      description: 'Concelhos PATCH success count',
      content: {'application/json': {schema: CountSchema}},
    })
    async updateAll(
      @requestBody({
        content: {
          'application/json': {
            schema: getModelSchemaRef(Concelhos, {partial: true}),
          },
        },
      })
      concelhos: Concelhos,
      @param.where(Concelhos) where?: Where<Concelhos>,
    ): Promise<Count> {
      return this.concelhosRepository.updateAll(concelhos, where);
    }
  */
  @get('/concelhos/{id}')
  @response(200, {
    description: 'Concelhos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Concelhos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Concelhos, {exclude: 'where'}) filter?: FilterExcludingWhere<Concelhos>
  ): Promise<Concelhos> {
    return this.concelhosRepository.findById(id, filter);
  }
  /*
    @patch('/concelhos/{id}')
    @response(204, {
      description: 'Concelhos PATCH success',
    })
    async updateById(
      @param.path.number('id') id: number,
      @requestBody({
        content: {
          'application/json': {
            schema: getModelSchemaRef(Concelhos, {partial: true}),
          },
        },
      })
      concelhos: Concelhos,
    ): Promise<void> {
      await this.concelhosRepository.updateById(id, concelhos);
    }
  */
  /*
    @put('/concelhos/{id}')
    @response(204, {
      description: 'Concelhos PUT success',
    })
    async replaceById(
      @param.path.number('id') id: number,
      @requestBody() concelhos: Concelhos,
    ): Promise<void> {
      await this.concelhosRepository.replaceById(id, concelhos);
    }
  
    @del('/concelhos/{id}')
    @response(204, {
      description: 'Concelhos DELETE success',
    })
    async deleteById(@param.path.number('id') id: number): Promise<void> {
      await this.concelhosRepository.deleteById(id);
    }
    */
}
