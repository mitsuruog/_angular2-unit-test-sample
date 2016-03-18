import {
  describe,
  it,
  inject,
  expect,
  beforeEachProviders,
} from 'angular2/testing';

import {Logger} from './common/services/logger.service';
import {AppComponent} from './app.component';

describe('Test: AppComponent', () => {

  beforeEachProviders(() => [
    AppComponent,
    Logger
  ]);

  it('AppComponentが存在すること', inject([AppComponent, Logger], (testee: AppComponent) => {
    expect(testee).toBeDefined();
  }));

});