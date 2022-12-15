var bubbleSort = require('../bubbleSort.js');
var expect = require('chai').expect;

describe('BubbleSort Algo', function() {
    it('should reverse two nums', function() {
        // note: use .deep for array comparison
        expect(bubbleSort([7,2])).deep.to.equal([2,7])
      });
    it('should reverse three nums', function() {
        // note: use .deep for array comparison
        expect(bubbleSort([6,5,1])).deep.to.equal([1,5,6])
      });

      it('should reverse a sequence', function() {
        // note: use .deep for array comparison
        expect(bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1])).deep.to.equal([1, 2, 3, 4, 5, 6, 7, 8, 9])
      })
      

}) 

