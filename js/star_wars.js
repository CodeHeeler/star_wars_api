// function getPageMovies(data){
//   let films = "";
//   for (var i = 0; i < data['results'].length; i++){
//     let title = data['results'][i]['title'];
//     let episode = JSON.stringify(data['results'][i]['episode_id']);
//     let date = data['results'][i]['release_date'];
//     films = films + "Title: " + title + " (" + date + ") - Episode " + episode + "</br>";
//   }
//   return films;
// }
//
// function updateTotalString(getpage){
//   $.ajax({
//     url: destination,
//     success: getpage
//   });
// }
//
// $('#movies').on('click', function(e){
//   destination = 'http://swapi.co/api/films/'
//   let total = ""
//   $.ajax({
//     url: destination,
//     success:function(data){
//       total = total + getPageMovies(data);
//       let page = 2;
//       while (data['next']){
//         destination = destination + "?page=" + page;
//         total = total + updateTotalString(getPageMovies);
//         page++;
//       }
//       $('#myData').html(total);
//     },
//   });
// })
// //end of the movies callbacks
//
// function getPageCharacters(data){
//   let people = ""
//   for (var i = 0; i < data['results'].length; i++){
//     let name = data['results'][i]['name'];
//     people = people + name + "</br>";
//   }
//   return people;
// }
//
// $('#characters').on('click', function(e){
//   destination = 'http://swapi.co/api/people/'
//   let total = ""
//   $.ajax({
//     url: destination,
//     success:function(data){
//       total = total + getPageCharacters(data);
//       let page = 2;
//       while (data['next']){
//         destination = destination + "?page=" + page;
//         total = total + updateTotalString(getPageCharacters);
//         page++;
//       }
//       $('#myData').html(total);
//     },
//   });
// })
//
// function getPageVehicles(data){
//   let transports = ""
//   for (var i = 0; i < data['results'].length; i++){
//     let name = data['results'][i]['name'];
//     transports = transports + name + "</br>";
//   }
//   return transports;
// }
//
// $('#vehicles').on('click', function(e){
//   destination = 'http://swapi.co/api/vehicles/'
//   let total = ""
//   $.ajax({
//     url: destination,
//     success:function(data){
//       total = total + getPageVehicles(data);
//       let page = 2;
//       while (data['next']){
//         destination = destination + "?page=" + page;
//         total = total + updateTotalString(getPageVehicles);
//         page++;
//       }
//       $('#myData').html(total);
//     },
//   });
// })

//wishlist:
//--refactor repeated code
//--add more breadth and depth to options for user

//-------------------------
// //refactoring to use the callbacks but save these just in case:
//-------------------------
$('#movies').on('click', function(e){
  destination = 'http://swapi.co/api/films/'
  $.ajax({
    url: destination,
    success:function(data){
      let films = "";
      for (var i = 0; i < data['results'].length; i++){
        let title = data['results'][i]['title'];
        let episode = JSON.stringify(data['results'][i]['episode_id']);
        let date = data['results'][i]['release_date'];
        films = films + "Title: " + title + " (" + date + ") - Episode " + episode + "</br>";
      }
      $('#myData').html(films);
    },
  });
})

$('#characters').on('click', function(e){
  $.ajax({
    url: 'http://swapi.co/api/people/',
    success:function(data){
      let people = ""
      for (var i = 0; i < data['results'].length; i++){
        let name = data['results'][i]['name'];
        people = people + name + "</br>";
      }
      $('#myData').html(people);
    },
  });
})

$('#vehicles').on('click', function(e){
  $.ajax({
    url: 'http://swapi.co/api/vehicles/',
    success:function(data){
      let transports = ""
      for (var i = 0; i < data['results'].length; i++){
        let name = data['results'][i]['name'];
        transports = transports + name + "</br>";
      }
      $('#myData').html(transports);
    },
  });
})
