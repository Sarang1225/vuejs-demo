var iStr=''
var app = new Vue({
    el: '#inputBox',
    data: {
      message: '',
      ucString: ''
    },
    methods: {
        UCMessage: function () {
          if(!this.message){
            alert("This filled required");
            this.ucString='';
          }
          this.ucString = this.message.toUpperCase();
        }
      }
  })

  