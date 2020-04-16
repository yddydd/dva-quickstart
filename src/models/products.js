import { delay } from 'dva/saga'
import { pathToRegexp } from 'path-to-regexp';

export default {
  namespace: 'products',
  state: {
    list:  [
      { name: 'dva', id: 1 },
      { name: 'antd', id: 2 },
    ]
  },
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      console.log('???products?setup????', history)
      history.listen(({ pathname, hash = '' }) => {
        let basename = '/';
        basename = basename === '/' ? basename : `${basename}/`;
        const detail = pathToRegexp(`${basename}detail`);
        const match = pathname.match(detail)
        console.log('???listen', detail, match)
        if (match) {
          dispatch({
            type: 'fetchProducts',
            id: match[1] ? Number(match[1]) : 0,
            basename,
            hash: decodeURIComponent(hash.substr(1)),
          });
        }
      });
    },
  },
  reducers: {
    'delete'(state, action) {
      console.log('??reducer??', action)
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload)
      };
    },
    update(state, action) {
      return {
        ...state,
        list: action.payload,
      }
    }
  },
  effects: {
    *deleteAfter1Second(action, api) {
      console.log('????', api, action)
      yield api.call(delay, 1000)
      yield api.put({type: 'delete',  payload: action.payload})
      yield api.put({type: 'example/save', payload: { name: 'ys'}})
    },
    *fetchProducts(action, { put, call }) {
      console.log('发请求 load', action)
      yield call(delay, 3000)
      yield put({type: 'update', payload: [{
        name: 'yangshi', id: 3
      }]})
    }
  }
};