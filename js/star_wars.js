function getPageMovies(data){
  let films = "";
  for (var i = 0; i < data['results'].length; i++){
    let title = data['results'][i]['title'];
    let episode = JSON.stringify(data['results'][i]['episode_id']);
    let date = data['results'][i]['release_date'];
    films = films + "Title: " + title + " (" + date + ") - Episode " + episode + "</br>";
  }
  return films;
}

function updateTotalString(getpage){
  $.ajax({
    url: destination,
    success: getpage
  });
}

function displayMovies(data){
  console.log(data)
  $('#myData').html($('#myData').html()+getPageMovies(data));
  if (data['next']){
    $.ajax({
      url: data['next'],
      success: displayMovies
    });
  }
}

$('#movies').on('click', function(e){
  destination = 'http://swapi.co/api/films/'
  $.ajax({
    url: destination,
    success:displayMovies,
  });
})
// end of the movies callbacks

function getPageCharacters(data){
  let people = ""
  for (var i = 0; i < data['results'].length; i++){
    let name = data['results'][i]['name'];
    people = people + name + "</br>";
  }
  return people;
}

function displayCharacters(data){
  console.log(data)
  $('#myData').html($('#myData').html()+getPageCharacters(data));
  if (data['next']){
    $.ajax({
      url: data['next'],
      success: displayCharacters
    });
  }
}

$('#characters').on('click', function(e){
  destination = 'http://swapi.co/api/people/'
  $.ajax({
    url: destination,
    success:displayCharacters,
  });
})
// end of the characters

function getPageVehicles(data){
  let transports = ""
  for (var i = 0; i < data['results'].length; i++){
    let name = data['results'][i]['name'];
    transports = transports + name + "</br>";
  }
  return transports;
}

function displayVehicles(data){
  console.log(data)
  $('#myData').html($('#myData').html()+getPageVehicles(data));
  if (data['next']){
    $.ajax({
      url: data['next'],
      success: displayVehicles
    });
  }
}

$('#vehicles').on('click', function(e){
  destination = 'http://swapi.co/api/vehicles/'
  $.ajax({
    url: destination,
    success:displayVehicles,
  });
})
// end of the vehicles


//wishlist:
//--refactor repeated code
//--add more breadth and depth to options for user

//-------------------------
// //refactoring to use the callbacks but save these just in case:
//-------------------------
// $('#movies').on('click', function(e){
//   destination = 'http://swapi.co/api/films/'
//   $.ajax({
//     url: destination,
//     success:function(data){
//       let films = "";
//       for (var i = 0; i < data['results'].length; i++){
//         let title = data['results'][i]['title'];
//         let episode = JSON.stringify(data['results'][i]['episode_id']);
//         let date = data['results'][i]['release_date'];
//         films = films + "Title: " + title + " (" + date + ") - Episode " + episode + "</br>";
//       }
//       $('#myData').html(films);
//     },
//   });
// })
//
// $('#characters').on('click', function(e){
//   $.ajax({
//     url: 'http://swapi.co/api/people/',
//     success:function(data){
//       let people = ""
//       for (var i = 0; i < data['results'].length; i++){
//         let name = data['results'][i]['name'];
//         people = people + name + "</br>";
//       }
//       $('#myData').html(people);
//     },
//   });
// })
//
// $('#vehicles').on('click', function(e){
//   $.ajax({
//     url: 'http://swapi.co/api/vehicles/',
//     success:function(data){
//       let transports = ""
//       for (var i = 0; i < data['results'].length; i++){
//         let name = data['results'][i]['name'];
//         transports = transports + name + "</br>";
//       }
//       $('#myData').html(transports);
//     },
//   });
// })
