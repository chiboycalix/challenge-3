import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';

const should = chai.should();

chai.use(chaiHttp);

describe('demo', () => {
  it('this is just a demo test that returns nothing', () => {
    ('one').should.equal('one');
  });
});
