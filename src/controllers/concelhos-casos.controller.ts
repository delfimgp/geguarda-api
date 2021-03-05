import {authenticate} from '@loopback/authentication';
import {
  Filter,
  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef,

  param
} from '@loopback/rest';
import {
  Casos
} from '../models';
import {ConcelhosRepository} from '../repositories';

@authenticate('jwt')
export class ConcelhosCasosController {
  constructor(
    @repository(ConcelhosRepository) protected concelhosRepository: ConcelhosRepository,
  ) { }

  @get('/concelhos/{id}/casos', {
    responses: {
      '200': {
        description: 'Array of Concelhos has many Casos',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Casos)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Casos>,
  ): Promise<Casos[]> {
    return this.concelhosRepository.casos(id).find(filter);
  }
  /*
    @post('/concelhos/{id}/casos', {
      responses: {
        '200': {
          description: 'Concelhos model instance',
          content: {'application/json': {schema: getModelSchemaRef(Casos)}},
        },
      },
    })
    async create(
      @param.path.string('id') id: typeof Concelhos.prototype.concelho,
      @requestBody({
        content: {
          'application/json': {
            schema: getModelSchemaRef(Casos, {
              title: 'NewCasosInConcelhos',
              exclude: ['id'],
              optional: ['concelhosId']
            }),
          },
        },
      }) casos: Omit<Casos, 'id'>,
    ): Promise<Casos> {
      return this.concelhosRepository.casos(id).create(casos);
    }

    @patch('/concelhos/{id}/casos', {
      responses: {
        '200': {
          description: 'Concelhos.Casos PATCH success count',
          content: {'application/json': {schema: CountSchema}},
        },
      },
    })
    async patch(
      @param.path.string('id') id: string,
      @requestBody({
        content: {
          'application/json': {
            schema: getModelSchemaRef(Casos, {partial: true}),
          },
        },
      })
      casos: Partial<Casos>,
      @param.query.object('where', getWhereSchemaFor(Casos)) where?: Where<Casos>,
    ): Promise<Count> {
      return this.concelhosRepository.casos(id).patch(casos, where);
    }

    @del('/concelhos/{id}/casos', {
      responses: {
        '200': {
          description: 'Concelhos.Casos DELETE success count',
          content: {'application/json': {schema: CountSchema}},
        },
      },
    })
    async delete(
      @param.path.string('id') id: string,
      @param.query.object('where', getWhereSchemaFor(Casos)) where?: Where<Casos>,
    ): Promise<Count> {
      return this.concelhosRepository.casos(id).delete(where);
    }
  */
}
