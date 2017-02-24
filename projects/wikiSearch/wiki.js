var search ='flowers';
// Using jQuery
$.ajax( {
    url: 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search='+ search + '&prop=info&inprop=url',
    dataType: 'jsonp',
    type: 'GET',
    success: function(data) {

      //console.log(data);
       // do something with data
      useData(data);
    }
} );

function useData(data){
  for (var i = 0; i < data[1].length; i++){
    console.log(data[1][i]); // title of box
    console.log(data[2][i]); // text of box
    console.log(data[3][i]); // link to wikipedia
  }

}
