import {EventEmitter} from 'events';

export default class PubSub extends EventEmitter {
  constructor() {
    super();
    this.subs = [];
  }

  pub(name, data, cb) {
    this.subs.filter(s => name.includes(s))
    .map( s => {this.emit(s, name, data);});
  }

  sub(substring) {
    this.subs.push(substring);
  }

  unsub(substring) {
    let index = this.subs.indexOf(substring);
    if (index >= 0) {
      this.subs.splice(index, 1);
    }
  }
}
