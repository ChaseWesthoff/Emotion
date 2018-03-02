var app = new Vue({
  el: '#app',
  data: {
    part: [],
  },
  methods: {

    addLeftHead: function() {
      this.part.push({text: '(',completed:false});
    },
    addRightHead: function() {
      this.part.push({text: ')',completed:false});
    },

    addEyeOne: function() {
      this.part.push({text: '-',completed:false});
    },
    addEyeTwo: function() {
      this.part.push({text: '0',completed:false});
    },
    addEyeThree: function() {
      this.part.push({text: '\u0CA0',completed:false});
    },
    addEyeFour: function() {
      this.part.push({text:  '\u0CA5' ,completed:false});
    },
    addEyeFive: function() {
      this.part.push({text: '\u0298',completed:false});
    },
    addEyeSix: function() {
      this.part.push({text:  '^' ,completed:false});
    },

    addMouthOne: function() {
      this.part.push({text: '\u203F',completed:false});
    },
    addMouthTwo: function() {
      this.part.push({text: '\uFE4F',completed:false});
    },
    addMouthThree: function() {
      this.part.push({text: '\u0414',completed:false});
    },
    addMouthFour: function() {
      this.part.push({text:  '3' ,completed:false});
    },
        addMouthFive: function() {
      this.part.push({text: '\u03C9',completed:false});
    },
    addMouthSix: function() {
      this.part.push({text:  '\u1D25' ,completed:false});
    },

    addArmOne: function() {
      this.part.push({text: '\u256F',completed:false});
    },
    addArmTwo: function() {
      this.part.push({text: '\u261E',completed:false});
    },
    addArmThree: function() {
      this.part.push({text: '\u10DA',completed:false});
    },
    addArmFour: function() {
      this.part.push({text:  '\u3065' ,completed:false});
    },
    addArmFive: function() {
      this.part.push({text: '\u06F6',completed:false});
    },
    addArmSix: function() {
      this.part.push({text:  '\u3006' ,completed:false});
    },



    deleteItem: function(item) {
      var index = this.part.indexOf(item);
      if (index > -1)
  this.part.splice(index,1);
    },
  }
});