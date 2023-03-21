//egg är easteregg för att trycka på CV på hem-sidan
const egg = document.getElementById("Egg");
//här skapar vi const för varje id för att ändra färger
//ljusbak är för sidan bakgrund, mörkbak= footer/nav , act= för aktiv sida på nav
const ljusbak = document.getElementsByClassName("ljusbak");
const mörkbak = document.getElementsByClassName("mörkbak");
const aktivbak = document.getElementsByClassName("act");

const body = document.getElementsByTagName("body")[0];

egg.addEventListener("click", changeColor);
function changeColor() {
  alert(`Att klicka lite överallt är viktigt ibland!`);
  //eftersom det bara finns ett element av varje class skrivs [0] och ingen loop
  ljusbak[0].style.backgroundColor = "#fe87c4";
  aktivbak[0].style.backgroundColor = "#00a6ff";
  //mörkbak har dock flera element , så en loop behövs
  for (let i = 0; i < mörkbak.length; i++) {
    mörkbak[i].style.backgroundColor = "#006eff";
  }

  body.style.backgroundImage =
    "url(https://img.freepik.com/free-vector/elegant-alcohol-ink-background-with-gold-glitter-elements_1048-15537.jpg?w=1800&t=st=1679400305~exp=1679400905~hmac=b9c155be61901464b8d9fc5ba04f3e0bd7e74a072dc2bd94fef3cfeabe358f60)";
}

let inputString = "";
window.addEventListener("keydown", secret);
function secret(event) {
  const userInput = event.key.toLowerCase(); // Convert input to lowercase
  inputString += userInput; // Add current key press to input string
  inputString = inputString.slice(-4); // Keep only the last 4 characters

  if (inputString === "hola") {
    // Check if input matches 'hola'
    alert("Hola Compañero! Escuchamos a La Cucaracha!"); // Display an alert message
    let laCuca = document.getElementById("laCuca");
    laCuca.innerHTML = `<h1><strong>Koden var: Hola</strong><br>Belöningen är att få lyssna på La Cucaracha.</h1><iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1245734737&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-519589799-23871065" title="Schlange" target="_blank" style="color: #cccccc; text-decoration: none;">Schlange</a> · <a href="https://soundcloud.com/user-519589799-23871065/mp3fy-la-cucaracha" title="La Cucaracha" target="_blank" style="color: #cccccc; text-decoration: none;">La Cucaracha</a></div>`;
    laCuca.style.display = "block";
    inputString = ""; // Reset input string
    const hemlig = document.getElementById("hemlig");
    hemlig.style.visibility = "visible";
  }
}
