import API, {Services} from 'adapters/rest';
import {injectParamsIntoUrl} from 'shared/utils';
import {CancelTokenSource} from 'axios';
import {TestType} from '../definitions/types/index';
import {ListResponse} from 'shared/types';

export const apiGetTest = (query = ''): Promise<ListResponse<TestType>> => {
  const url = `/api/resturants${query || ''}`;
  return API.get<ListResponse<TestType>>(url).then(response => {
    return response.data;
  });
};
