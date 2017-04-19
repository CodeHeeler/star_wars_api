function getPageMovies(data){
  let films = "";
  for (var i = 0; i < data['results'].length; i++){
    let title = data['results'][i]['title'];
    let episode = JSON.stringify(data['results'][i]['episode_id']);
    let date = data['results'][i]['release_date'];
    films = films + "<li>" + title + " (" + date + ") - Episode " + episode + "</li></br>";
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
  $('#myData').empty();
  destination = 'http://swapi.co/api/films/'
  $.ajax({
    url: destination,
    success:displayMovies,
  });
})
// end of the movies callbacks

function getPageCharacterDetails(data){
  let details = ""
  let name = data['name'];
  let height = data['height'];
  let mass = data['mass'];
  let hair_color = data['hair_color'];
  let skin_color = data['skin_color'];
  let eye_color = data['eye_color'];
  let birth_year = data['birth_year'];
  let gender = data['gender'];
  details = details + "Name: " + name + "</br>";
  details = details + "Height: " + height + " cm</br>";
  details = details + "Mass: " + mass + " kg</br>";
  details = details + "Hair Color: " + hair_color + "</br>";
  details = details + "Skin Color: " + skin_color + "</br>";
  details = details + "Eye Color: " + eye_color + "</br>";
  details = details + "Birth Year: " + birth_year + " (measured in years Before or After the Battle of Yavin)</br>";
  details = details + "Gender: " + gender + "</br>";
  return details;
}

function displayCharacterDetails(data){
  console.log(data)
  $('#myData').html(getPageCharacterDetails(data));
}

function moreCharacterDetails(data){
  $('#myData').empty();
  destination = data
  $.ajax({
    url: destination,
    success:displayCharacterDetails,
  });
}

function getPageCharacters(data){
  let people = ""
  for (var i = 0; i < data['results'].length; i++){
    let name = data['results'][i]['name'];
    let url = data['results'][i]['url'];
    people = people + "<li>" + name + "    <button type='button' class='btn btn-starwars btn-sm' onclick='moreCharacterDetails(\"" + url + "\")'>Details</button></li></br></br>";
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
  $('#myData').empty();
  destination = 'http://swapi.co/api/people/'
  $.ajax({
    url: destination,
    success:displayCharacters,
  });
})
// end of the characters

function getPageVehicleDetails(data){
  let details = ""
  let name = data['name'];
  let model = data['model'];
  let manufacturer = data['manufacturer'];
  let cost_in_credits = data['cost_in_credits'];
  let length = data['length'];
  let max_atmosphering_speed = data['max_atmosphering_speed'];
  let crew = data['crew'];
  let passengers = data['passengers'];
  let cargo_capacity = data['cargo_capacity'];
  let consumables = data['consumables'];
  let vehicle_class = data['vehicle_class'];
  details = details + "Name: " + name + "</br>";
  details = details + "Model: " + model + "</br>";
  details = details + "Manufacturer: " + manufacturer + "</br>";
  details = details + "Cost: " + cost_in_credits + " Galactic Credits</br>";
  details = details + "Length: " + length + " m</br>";
  details = details + "Max Atmosphering Speed: " + length + " m/s</br>";
  details = details + "Crew: " + crew + "</br>";
  details = details + "Passengers: " + passengers + "</br>";
  details = details + "Cargo Capacity: " + cargo_capacity + " kg</br>";
  details = details + "Consumables: " + consumables + "</br>";
  details = details + "Vehicle Class: " + vehicle_class + "</br>";
  return details;
}

function displayVehicleDetails(data){
  console.log(data)
  $('#myData').html(getPageVehicleDetails(data));
}

function moreVehicleDetails(data){
  $('#myData').empty();
  destination = data
  $.ajax({
    url: destination,
    success:displayVehicleDetails,
  });
}

function getPageVehicles(data){
  let transports = ""
  for (var i = 0; i < data['results'].length; i++){
    let name = data['results'][i]['name'];
    let url = data['results'][i]['url'];
    transports = transports + "<li>" + name + "    <button type='button' class='btn btn-starwars btn-sm' onclick='moreCharacterDetails(\"" + url + "\")'>Details</button></li></br></br>";
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
  $('#myData').empty();
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
//--either abort current ajax call when a new one is made, or show/hide toggle
