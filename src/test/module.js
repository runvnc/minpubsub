import test from 'tape';
import PubSub from '../module'

test('pubsub', t => {
  t.plan(2);
  let pubsub = new PubSub();
  pubsub.sub('//chat1');
  let recvd = '', recvdPath = '';
  pubsub.on('//chat1', (path, msg) => { 
    recvd = msg; 
  })
  pubsub.pub('//chat1/main', 'hello');  
  t.equal(recvd, 'hello');
  recvd = false;
  pubsub.sub('main');
  pubsub.on('main', (path, msg)=>{recvdPath=path});
  pubsub.pub('//chat1/main', 'test');
  t.equal(recvdPath, '//chat1/main');
});
