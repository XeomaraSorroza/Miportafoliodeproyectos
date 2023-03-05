let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #00456b;"> Desarrollo sitios web,  proyectos electrónicos y escribo artículos sobre programación. </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();