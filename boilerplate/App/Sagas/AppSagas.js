import {cancelled, takeLatest, put, all} from 'redux-saga/effects';

export default () => {
  function* watcher(api) {
    try {
      yield all([
      ]);

    } finally {
      if (yield cancelled()) {
      }
    }
  }

  return {
    watcher,
  };
}