import { delay } from 'redux-saga';
import { takeLatest, put, call, select } from 'redux-saga/effects';
import api from '../services/api';

function* getAnimes(page = 1) {
  const response = yield api.get(`/anime`);
  return response.data;
};

function* getAnime(anime_id) {
  const response = yield api.get(`/anime/${anime_id}`);
  return response.data;
}

function* getAnimesFromUrl(url) {
  const params = url.split('?')[1];
  const response = yield api.get(`/anime?${params}`);
  return response.data;
}

function* loadAnimes() {
  try {
    const response = yield call(getAnimes);

    yield put({ type: 'SUCCESS_ANIMES', payload: { data: response } });
  } catch (err) {
    yield put({ type: 'FAILURE_ANIMES' });
  }
}

function* loadAnimesFromUrl(action) {
  try {
    const response = yield getAnimesFromUrl(action.url);

    yield put({ type: 'SUCCESS_ANIMES', payload: { data: response } });
  } catch (err) {
    yield put({ type: 'FAILURE_ANIMES' });
  }
}

function* loadAnime(action) {
  try {
    const response = yield getAnime(action.anime_id);

    yield put({ type: 'SUCCESS_ANIME', payload: { data: response.data } });
  } catch (err) {
    yield put({ type: 'FAILURE_ANIME' });
  }
}

export default function* root() {
  yield [
    takeLatest('REQUEST_ANIMES', loadAnimes),
    takeLatest('REQUEST_ANIMES_FROM_URL', loadAnimesFromUrl),
    takeLatest('REQUEST_ANIME', loadAnime)
  ];
}
