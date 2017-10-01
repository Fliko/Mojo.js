var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();
var {Message} = require('../engine.js');

describe('Message', function() {
  // it('should make a new message queue', function() {
  //   var msg = new Message;
  //   msg.tail.should.equal(null);
  //   msg.head.should.equal(msg.tail);
  //   expect(msg.getFirst()).to.exist;
  //   expect(msg.removeItem()).to.exist;
  //   expect(msg.addItem()).to.exist;
  // });
  it('should add an item to the queue and set as the tail', function() {
    var msg = new Message;
    should.not.exist(msg.getMessage());
    msg.addItem('data');
    msg.getMessage().should.equal('data');
    expect(msg.tail.data).to.equal('data');
  });
  it('should return the value of the first item in the queue', function() {
    var msg = new Message;
    msg.addItem('first');
    msg.addItem('second');
    msg.getMessage().should.equal('first');
    expect(msg.head.data).to.equal('second');
  });
  it('should remove the first item from the queue and move the tail', function() {
    var msg = new Message();
    msg.addItem('first');
    msg.addItem('second');
    msg.addItem('third');
    msg.removeItem();
    msg.getMessage().should.equal('second');
    msg.head.data.should.equal('third');
    msg.tail.data.should.equal('second');
  });
});
