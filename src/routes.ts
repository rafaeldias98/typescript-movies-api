import getAllAction from './controller/v1/MovieListController';

export default [
  {
    action: getAllAction,
    method: 'get',
    path: '/',
  },
];
