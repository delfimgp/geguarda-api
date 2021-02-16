import {Entity, model, property} from '@loopback/repository';

@model()
export class Estirpes extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  data: string;

  @property({
    type: 'string',
    required: true,
  })
  estirpe: string;


  constructor(data?: Partial<Estirpes>) {
    super(data);
  }
}

export interface EstirpesRelations {
  // describe navigational properties here
}

export type EstirpesWithRelations = Estirpes & EstirpesRelations;
