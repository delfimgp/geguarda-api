import {Entity, model, property, hasMany} from '@loopback/repository';
import {Casos} from './casos.model';

@model()
export class Concelhos extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  concelho: string;

  @hasMany(() => Casos)
  casos: Casos[];

  constructor(data?: Partial<Concelhos>) {
    super(data);
  }
}

export interface ConcelhosRelations {
  // describe navigational properties here
}

export type ConcelhosWithRelations = Concelhos & ConcelhosRelations;
