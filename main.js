(function main(){
  function Myclass(){

  };

  var myclassobject = new Myclass();
  var myobject = {
    value: "somevalue",
    writeToConsole: function(){ alert(this.value) }
  };

})();