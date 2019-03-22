import { delay } from 'redux-saga';
import { takeLatest, put, call, select } from 'redux-saga/effects';

function apiGet(text, length) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
            canonicalTitle: 'anime 1',
            averageRating: '5',
            startDate: '2019-01-01',
            endDate: '2019-02-02',
            status: 'in-progress',
            posterImage: 'https://via.placeholder.com/50'
          },
          {
            canonicalTitle: 'anime 2',
            averageRating: '5',
            startDate: '2019-01-01',
            endDate: '2019-02-02',
            status: 'in-progress',
            posterImage: 'https://via.placeholder.com/50'
          },
          {
            canonicalTitle: 'anime 3',
            averageRating: '5',
            startDate: '2019-01-01',
            endDate: '2019-02-02',
            status: 'in-progress',
            posterImage: 'https://via.placeholder.com/50'
          },
          {
            canonicalTitle: 'anime 4',
            averageRating: '5',
            startDate: '2019-01-01',
            endDate: '2019-02-02',
            status: 'in-progress',
            posterImage: 'https://via.placeholder.com/50'
          },
          {
            canonicalTitle: 'anime 2',
            averageRating: '5',
            startDate: '2019-01-01',
            endDate: '2019-02-02',
            status: 'in-progress',
            posterImage: 'https://via.placeholder.com/50'
          },
          {
            canonicalTitle: 'anime 3',
            averageRating: '5',
            startDate: '2019-01-01',
            endDate: '2019-02-02',
            status: 'in-progress',
            posterImage: 'https://via.placeholder.com/50'
          },
          {
            canonicalTitle: 'anime 4',
            averageRating: '5',
            startDate: '2019-01-01',
            endDate: '2019-02-02',
            status: 'in-progress',
            posterImage: 'https://via.placeholder.com/50'
          },
          {
            canonicalTitle: 'anime 2',
            averageRating: '5',
            startDate: '2019-01-01',
            endDate: '2019-02-02',
            status: 'in-progress',
            posterImage: 'https://via.placeholder.com/50'
          },
          {
            canonicalTitle: 'anime 3',
            averageRating: '5',
            startDate: '2019-01-01',
            endDate: '2019-02-02',
            status: 'in-progress',
            posterImage: 'https://via.placeholder.com/50'
          },
          {
            canonicalTitle: 'anime 4',
            averageRating: '5',
            startDate: '2019-01-01',
            endDate: '2019-02-02',
            status: 'in-progress',
            posterImage: 'https://via.placeholder.com/50'
          },
          {
            canonicalTitle: 'anime 2',
            averageRating: '5',
            startDate: '2019-01-01',
            endDate: '2019-02-02',
            status: 'in-progress',
            posterImage: 'https://via.placeholder.com/50'
          },
          {
            canonicalTitle: 'anime 3',
            averageRating: '5',
            startDate: '2019-01-01',
            endDate: '2019-02-02',
            status: 'in-progress',
            posterImage: 'https://via.placeholder.com/50'
          },
          {
            canonicalTitle: 'anime 4',
            averageRating: '5',
            startDate: '2019-01-01',
            endDate: '2019-02-02',
            status: 'in-progress',
            posterImage: 'https://via.placeholder.com/50'
          },
          {
            canonicalTitle: 'anime 2',
            averageRating: '5',
            startDate: '2019-01-01',
            endDate: '2019-02-02',
            status: 'in-progress',
            posterImage: 'https://via.placeholder.com/50'
          },
          {
            canonicalTitle: 'anime 3',
            averageRating: '5',
            startDate: '2019-01-01',
            endDate: '2019-02-02',
            status: 'in-progress',
            posterImage: 'https://via.placeholder.com/50'
          },
          {
            canonicalTitle: 'anime 4',
            averageRating: '5',
            startDate: '2019-01-01',
            endDate: '2019-02-02',
            status: 'in-progress',
            posterImage: 'https://via.placeholder.com/50'
          },
          {
            canonicalTitle: 'anime 2',
            averageRating: '5',
            startDate: '2019-01-01',
            endDate: '2019-02-02',
            status: 'in-progress',
            posterImage: 'https://via.placeholder.com/50'
          },
          {
            canonicalTitle: 'anime 3',
            averageRating: '5',
            startDate: '2019-01-01',
            endDate: '2019-02-02',
            status: 'in-progress',
            posterImage: 'https://via.placeholder.com/50'
          },
          {
            canonicalTitle: 'anime 4',
            averageRating: '5',
            startDate: '2019-01-01',
            endDate: '2019-02-02',
            status: 'in-progress',
            posterImage: 'https://via.placeholder.com/50'
          }
      ]);
    }, 2000);
  });
}

function* getAnimes() {
  try {
    const response = yield call(apiGet);

    yield put({ type: 'SUCCESS_ANIMES', payload: { data: response } });
  } catch (err) {
    yield put({ type: 'FAILURE_ANIMES' });
  }
}

export default function* root() {
  yield [
    takeLatest('REQUEST_ANIMES', getAnimes),
  ];
}
