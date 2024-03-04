const $ = (par) => document.querySelector(par);

const getRandomUser = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    try {
      xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        }
      });
    } catch (error) {
      reject(error);
    }
    xhr.open("GET", url);
    xhr.send();
  });
};

const get = () => {
  getRandomUser("https://randomuser.me/api/")
    .then((data) => {
      console.log(data);
      sendDataDom(data);
    })
    .catch((error) => console.log(error));
};

get();

const sendDataDom = (data) => {
  $("#img").src = data.results[0].picture.large;

  $("#title").textContent = data.results[0].name.title;
  $("#first").textContent = data.results[0].name.first;
  $("#last").textContent = data.results[0].name.last;

  $("#country").textContent = data.results[0].location.country;

  $("#email").textContent =  data.results[0].email;

  $("#age").textContent = data.results[0].dob.age;
  $("#phone").textContent = data.results[0].phone;

  //details
  $("#title-detail").textContent = data.results[0].name.title;
  $("#first-detail").textContent = data.results[0].name.first;
  $("#last-detail").textContent = data.results[0].name.last;
  $("#gender-detail").textContent = data.results[0].gender;

  $("#gender-detail").textContent = data.results[0].gender;
  $("#age-detail").textContent = data.results[0].dob.age;
  $(
    "#street-detail"
  ).textContent = `${data.results[0].location.street.number}, ${data.results[0].location.street.name}`;
  $("#city-detail").textContent = data.results[0].location.city;
  $("#state-detail").textContent = data.results[0].location.state;
  $("#country-detail").textContent = data.results[0].location.country;
  $("#postcode-detail").textContent = data.results[0].location.postcode;
  $(
    "#coordinates-detail"
  ).textContent = `${data.results[0].location.coordinates.latitude} | ${data.results[0].location.coordinates.longitude}`;
  $("#timezone-detail").textContent = `${
    data.results[0].location.timezone.description
  } - Gmt${data.results[0].location.timezone.offset.slice(
    0,
    data.results[0].location.timezone.offset.indexOf(":")
  )}`;
  $("#email-detail").textContent = data.results[0].email;
  $("#phone-detail").textContent = data.results[0].phone;
  $("#cell-detail").textContent = data.results[0].cell;
  $("#registered-detail").textContent = data.results[0].registered.date.slice(
    0,
    data.results[0].registered.date.indexOf("T")
  );
  $("#username-detail").textContent = data.results[0].login.username;
  $("#password-detail").textContent = data.results[0].login.password;
};

$("#new-user-btn").addEventListener("click", get)


