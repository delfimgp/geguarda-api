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
import {ListaConcelhos} from '../models';
import {ListaConcelhosRepository} from '../repositories';

export class ListaConcelhosController {
  constructor(
    @repository(ListaConcelhosRepository)
    public listaConcelhosRepository: ListaConcelhosRepository,
  ) { }
  /*
    @post('/lista-concelhos')
    @response(200, {
      description: 'ListaConcelhos model instance',
      content: {'application/json': {schema: getModelSchemaRef(ListaConcelhos)}},
    })
    async create(
      @requestBody({
        content: {
          'application/json': {
            schema: getModelSchemaRef(ListaConcelhos, {
              title: 'NewListaConcelhos',
              exclude: ['id'],
            }),
          },
        },
      })
      listaConcelhos: Omit<ListaConcelhos, 'id'>,
    ): Promise<ListaConcelhos> {
      return this.listaConcelhosRepository.create(listaConcelhos);
    }
  */
  @get('/lista-concelhos/count')
  @response(200, {
    description: 'ListaConcelhos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ListaConcelhos) where?: Where<ListaConcelhos>,
  ): Promise<Count> {
    return this.listaConcelhosRepository.count(where);
  }

  @get('/lista-concelhos')
  @response(200, {
    description: 'Array of ListaConcelhos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ListaConcelhos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ListaConcelhos) filter?: Filter<ListaConcelhos>,
  ): Promise<ListaConcelhos[]> {
    return this.listaConcelhosRepository.find(filter);
  }
  /*
    @patch('/lista-concelhos')
    @response(200, {
      description: 'ListaConcelhos PATCH success count',
      content: {'application/json': {schema: CountSchema}},
    })
    async updateAll(
      @requestBody({
        content: {
          'application/json': {
            schema: getModelSchemaRef(ListaConcelhos, {partial: true}),
          },
        },
      })
      listaConcelhos: ListaConcelhos,
      @param.where(ListaConcelhos) where?: Where<ListaConcelhos>,
    ): Promise<Count> {
      return this.listaConcelhosRepository.updateAll(listaConcelhos, where);
    }
  */
  @get('/lista-concelhos/{id}')
  @response(200, {
    description: 'ListaConcelhos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ListaConcelhos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ListaConcelhos, {exclude: 'where'}) filter?: FilterExcludingWhere<ListaConcelhos>
  ): Promise<ListaConcelhos> {
    return this.listaConcelhosRepository.findById(id, filter);
  }
  /*
    @patch('/lista-concelhos/{id}')
    @response(204, {
      description: 'ListaConcelhos PATCH success',
    })
    async updateById(
      @param.path.number('id') id: number,
      @requestBody({
        content: {
          'application/json': {
            schema: getModelSchemaRef(ListaConcelhos, {partial: true}),
          },
        },
      })
      listaConcelhos: ListaConcelhos,
    ): Promise<void> {
      await this.listaConcelhosRepository.updateById(id, listaConcelhos);
    }
  */
  /*
    @put('/lista-concelhos/{id}')
    @response(204, {
      description: 'ListaConcelhos PUT success',
    })
    async replaceById(
      @param.path.number('id') id: number,
      @requestBody() listaConcelhos: ListaConcelhos,
    ): Promise<void> {
      await this.listaConcelhosRepository.replaceById(id, listaConcelhos);
    }
  
    @del('/lista-concelhos/{id}')
    @response(204, {
      description: 'ListaConcelhos DELETE success',
    })
    async deleteById(@param.path.number('id') id: number): Promise<void> {
      await this.listaConcelhosRepository.deleteById(id);
    }
  */
}
