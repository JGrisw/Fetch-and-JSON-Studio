function init() {
  fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  ).then(function (response) {
    response.json().then(function (json) {
      let totals = document.getElementById('totals')
      totals.innerHTML += ` <h3> Total Number of Astronauts: ${json.length}`
      let div = document.getElementById("container");
      let organizedAstronauts = json.sort((a,b)=> b.hoursInspace -a.hoursInSpace)
      //console.log(organizedAstronauts)
      for (let i = 0; i < json.length; i++) {
        div.innerHTML += `
          <div class ="astronaut">
            <div class ="bio">
              <h3> ${json[i].firstName} ${json[i].lastName}</h3>
                <ul>
                  <li> Hours in Space: ${json[i].hoursInSpace}</li>
                  <li id = "activeStatus"> Active: ${json[i].active} </li>
                  <li> Skills: ${json[i].skills}</li>
                </ul>
            </div>
            <img class = "avatar" src ="${json[i].picture}">
          </div>
          `;
      }
    });
  });
}

window.addEventListener("load", init);
