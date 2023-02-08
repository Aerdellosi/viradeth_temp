import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function getDinoName() {

  let request = new XMLHttpRequest();
  const url = `https://dinoipsum.com/api/?format=json&words=1&paragraphs=1`;

  request.addEventListener("loadend", function () {
    const response = JSON.parse(this.responseText);
    console.log(response + "H E R E H E R E");
  
    if (this.status === 200) {
      document.getElementById("hidden1").classList.remove("hidden");

      return response;
      // printElements(response);
    } else {


      // printError(this, response, city);
    }
  });

  request.open("GET", url);
  request.send();
}


window.addEventListener("load", function () {
  document.getElementById("form1").addEventListener("click", getDinoName);

});