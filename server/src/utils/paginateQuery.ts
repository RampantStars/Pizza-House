import { ApiQuery } from '@nestjs/swagger';

export interface IApiQueryOptions {
  name: string;
  type: any;
  description?: string;
  required?: boolean;
  example?: any;
}

export const IPaginateQuery = (...options: IApiQueryOptions[]) => {
  const queries = options.map((opt) => ApiQuery(opt));
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    queries.forEach((query) => {
      query(target, propertyKey, descriptor);
    });
  };
};

export const queryPaginate = [
  {
    name: 'page',
    type: Number,
    description: 'Номер страницы',
    required: false,
    example: '1',
  },
  {
    name: 'limit',
    type: Number,
    description: 'Количество элементов на странице',
    required: false,
    example: 10,
  },
  {
    name: 'sort',
    type: String,
    description: 'Строка сортировки',
    required: false,
  },
  {
    name: 'filter',
    type: String,
    description: 'Строка фильтрации',
    required: false,
    example: '$gte:3',
  },
  {
    name: 'search',
    type: String,
    description: 'Строка поиска',
    required: false,
    example: 'Пепперони',
  },
];
