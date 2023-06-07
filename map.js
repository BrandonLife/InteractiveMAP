function getUserLocation() {
  const myMap = L.map("map", {
    center: [35.7796, -78.6382],
    zoom: 100,
  });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: "2",
  }).addTo(myMap);
  const marker = L.marker([35.7796, -78.6382]);
  marker.addTo(myMap).bindPopup("<p1><b>Raleigh, NC</b></p1>").openPopup();

  if (!navigator.geolocation) {
    console.log("Your browser doesn't support geolocation feature");
  } else {
    navigator.geolocation.getCurrentPosition(getUserPosition);
  }
  // let Restaurants=[
  //   name:
  // ]
  function getUserPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    myMap.setView([latitude, longitude], 13);
    let myMarker = L.marker([latitude, longitude]);
    myMarker.addTo(myMap).bindPopup("<p1><b>YOU ARE HERE</b></p1>").openPopup();
  }
  let Restaurants = [
    {
      name: "Caraba's Italian Grill",
      Latitude: 35.85759554182514,
      Longitude: -78.58291625888839,
    },
    {
      name: "Applebee's Grill + Bar",
      Latitude: 35.8723416658105,
      Longitude: -78.56884002693596,
    },
    {
      name: "San Juan Mexican Restaurant",
      Latitude: 35.88819764239419,
      Longitude: -78.50807190362919,
    },
  ];
  ///Coffee
  let Coffee = [
    {
      name: "Smooth Joe Coffee",
      Latitude: 35.868112277463645,
      Longitude: -78.54068768265873,
    },
    {
      name: "Starbucks",
      Latitude: 35.80270414842149,
      Longitude: -78.50807202325679,
    },
    {
      name: "La Horchateria",
      Latitude: 35.841120563830295,
      Longitude: -78.60076916050441,
    },
  ];
  ////Hotels
  let Hotels = [
    {
      name: "Candlewood Suites Wake Forest Raliegh Area, an IHG Hotel",
      Latitude: 35.98237527004268,
      Longitude: -78.54109139671891,
    },
    {
      name: "Hilton Garden Inn Raleigh Capital",
      Latitude: 35.878403708645195,
      Longitude: -78.57679696069577,
    },
    {
      name: "Hampton Inn and Suites Knightdale Raleigh",
      Latitude: 35.80695774019875,
      Longitude: -78.50776548306615,
    },
  ];
  ////Markets
  let Markets = [
    {
      name: "Vegetable Place",
      Latitude: 35.87258440420023,
      Longitude: -78.49712259812486,
    },
    {
      name: "Midtown Farmers Market",
      Latitude: 35.84281119703773,
      Longitude: -78.64269143587669,
    },
    {
      name: "Carolina Open Air Market",
      Latitude: 35.762339845263654,
      Longitude: -78.53729135759883,
    },
  ];
  let submitButton = document.getElementById("submit-button");
  let selectBox = document.getElementById("dropdown");
  let value = "";
  selectBox.addEventListener("change", () => {});
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    let option = selectBox.options;
    for (let el of option) {
      if (el.value === "Coffee") {
        value = selectBox.value;
      } else if (el.value === "Restaurants") {
        value = selectBox.value;
      } else if (el.value === "Hotels") {
        value = selectBox.value;
      } else if (el.value === "Markets") {
        value = selectBox.value;
      }
    }
    if (value === "Coffee") {
      for (let shops of Coffee) {
        myMarker = L.marker([shops.Latitude, shops.Longitude]);
        myMarker.addTo(myMap).bindPopup(`${shops.name}`).openPopup();
      }
    }
    if (value === "Restaurants") {
      for (let shops of Restaurants) {
        myMarker = L.marker([shops.Latitude, shops.Longitude]);
        myMarker.addTo(myMap).bindPopup(`${shops.name}`).openPopup();
      }
    }
    if (value === "Hotels") {
      for (let shops of Hotels) {
        myMarker = L.marker([shops.Latitude, shops.Longitude]);
        myMarker.addTo(myMap).bindPopup(`${shops.name}`).openPopup();
      }
    }
    if (value === "Markets") {
      for (let market of Markets) {
        myMarker = L.marker([market.Latitude, market.Longitude]);
        myMarker.addTo(myMap).bindPopup(`${market.name}`).openPopup();
      }
    }
  });
  function getBusiness() {
    const options = {
      method: "GET",
      header: {
        Authorization: "fsq3T8D9Nj6mO3VXbVcDd5JBXgbdDD6f9qiMD/AMCZXKNLY=",
        Accept: "application/json",
      },
      mode: "no-cors",
    };
    fetch(
      "https://api.foursquare.com/v3/places/search?query=restaurants",
      options
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }
  getBusiness();
}
getUserLocation();
