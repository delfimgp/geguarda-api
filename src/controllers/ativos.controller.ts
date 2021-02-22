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
import {Ativos} from '../models';
import {AtivosRepository} from '../repositories';

export class AtivosController {
  constructor(
    @repository(AtivosRepository)
    public ativosRepository: AtivosRepository,
  ) { }
  /*
    @post('/ativos')
    @response(200, {
      description: 'Ativos model instance',
      content: {'application/json': {schema: getModelSchemaRef(Ativos)}},
    })
    async create(
      @requestBody({
        content: {
          'application/json': {
            schema: getModelSchemaRef(Ativos, {
              title: 'NewAtivos',
              exclude: ['id'],
            }),
          },
        },
      })
      ativos: Omit<Ativos, 'id'>,
    ): Promise<Ativos> {
      return this.ativosRepository.create(ativos);
    }
  */
  @get('/ativos/count')
  @response(200, {
    description: 'Ativos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Ativos) where?: Where<Ativos>,
  ): Promise<Count> {
    return this.ativosRepository.count(where);
  }

  @get('/ativos')
  @response(200, {
    description: 'Array of Ativos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Ativos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Ativos) filter?: Filter<Ativos>,
  ): Promise<Ativos[]> {
    return this.ativosRepository.find(filter);
  }
  /*
    @patch('/ativos')
    @response(200, {
      description: 'Ativos PATCH success count',
      content: {'application/json': {schema: CountSchema}},
    })
    async updateAll(
      @requestBody({
        content: {
          'application/json': {
            schema: getModelSchemaRef(Ativos, {partial: true}),
          },
        },
      })
      ativos: Ativos,
      @param.where(Ativos) where?: Where<Ativos>,
    ): Promise<Count> {
      return this.ativosRepository.updateAll(ativos, where);
    }
  
    @get('/ativos/{id}')
    @response(200, {
      description: 'Ativos model instance',
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ativos, {includeRelations: true}),
        },
      },
    })
    async findById(
      @param.path.number('id') id: number,
      @param.filter(Ativos, {exclude: 'where'}) filter?: FilterExcludingWhere<Ativos>
    ): Promise<Ativos> {
      return this.ativosRepository.findById(id, filter);
    }
  
    @patch('/ativos/{id}')
    @response(204, {
      description: 'Ativos PATCH success',
    })
    async updateById(
      @param.path.number('id') id: number,
      @requestBody({
        content: {
          'application/json': {
            schema: getModelSchemaRef(Ativos, {partial: true}),
          },
        },
      })
      ativos: Ativos,
    ): Promise<void> {
      await this.ativosRepository.updateById(id, ativos);
    }
  
    @put('/ativos/{id}')
    @response(204, {
      description: 'Ativos PUT success',
    })
    async replaceById(
      @param.path.number('id') id: number,
      @requestBody() ativos: Ativos,
    ): Promise<void> {
      await this.ativosRepository.replaceById(id, ativos);
    }
  
    @del('/ativos/{id}')
    @response(204, {
      description: 'Ativos DELETE success',
    })
    async deleteById(@param.path.number('id') id: number): Promise<void> {
      await this.ativosRepository.deleteById(id);
    }
  */
}
