var assert = require('assert');
var month = require('date-month');

describe('Month', function(){

  it('should get the correct months', function(){
    assert( month(new Date(2014, 0, 1)).full() === 'January' );
    assert( month(new Date(2014, 0, 2)).short() === 'Jan' );
    assert( month(new Date(2014, 0, 3)).single() === '1' );
    assert( month(new Date(2014, 0, 4)).double() === '01' );
  });

});