import { JokesModule } from './jokes.module';

describe('JokesModule', () => {
  let jokesModule: JokesModule;

  beforeEach(() => {
    jokesModule = new JokesModule();
  });

  it('should create an instance', () => {
    expect(jokesModule).toBeTruthy();
  });
});
