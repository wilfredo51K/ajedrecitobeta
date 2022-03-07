//confetti
var confetti={maxCount:150,speed:2,frameInterval:15,alpha:1,gradient:!1,start:null,stop:null,toggle:null,pause:null,resume:null,togglePause:null,remove:null,isPaused:null,isRunning:null};!function(){confetti.start=s,confetti.stop=w,confetti.toggle=function(){e?w():s()},confetti.pause=u,confetti.resume=m,confetti.togglePause=function(){i?m():u()},confetti.isPaused=function(){return i},confetti.remove=function(){stop(),i=!1,a=[]},confetti.isRunning=function(){return e};var t=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame,n=["rgba(30,144,255,","rgba(107,142,35,","rgba(255,215,0,","rgba(255,192,203,","rgba(106,90,205,","rgba(173,216,230,","rgba(238,130,238,","rgba(152,251,152,","rgba(70,130,180,","rgba(244,164,96,","rgba(210,105,30,","rgba(220,20,60,"],e=!1,i=!1,o=Date.now(),a=[],r=0,l=null;function d(t,e,i){return t.color=n[Math.random()*n.length|0]+(confetti.alpha+")"),t.color2=n[Math.random()*n.length|0]+(confetti.alpha+")"),t.x=Math.random()*e,t.y=Math.random()*i-i,t.diameter=10*Math.random()+5,t.tilt=10*Math.random()-10,t.tiltAngleIncrement=.07*Math.random()+.05,t.tiltAngle=Math.random()*Math.PI,t}function u(){i=!0}function m(){i=!1,c()}function c(){if(!i)if(0===a.length)l.clearRect(0,0,window.innerWidth,window.innerHeight),null;else{var n=Date.now(),u=n-o;(!t||u>confetti.frameInterval)&&(l.clearRect(0,0,window.innerWidth,window.innerHeight),function(){var t,n=window.innerWidth,i=window.innerHeight;r+=.01;for(var o=0;o<a.length;o++)t=a[o],!e&&t.y<-15?t.y=i+100:(t.tiltAngle+=t.tiltAngleIncrement,t.x+=Math.sin(r)-.5,t.y+=.5*(Math.cos(r)+t.diameter+confetti.speed),t.tilt=15*Math.sin(t.tiltAngle)),(t.x>n+20||t.x<-20||t.y>i)&&(e&&a.length<=confetti.maxCount?d(t,n,i):(a.splice(o,1),o--))}(),function(t){for(var n,e,i,o,r=0;r<a.length;r++){if(n=a[r],t.beginPath(),t.lineWidth=n.diameter,i=n.x+n.tilt,e=i+n.diameter/2,o=n.y+n.tilt+n.diameter/2,confetti.gradient){var l=t.createLinearGradient(e,n.y,i,o);l.addColorStop("0",n.color),l.addColorStop("1.0",n.color2),t.strokeStyle=l}else t.strokeStyle=n.color;t.moveTo(e,n.y),t.lineTo(i,o),t.stroke()}}(l),o=n-u%confetti.frameInterval),requestAnimationFrame(c)}}function s(t,n,o){var r=window.innerWidth,u=window.innerHeight;window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,confetti.frameInterval)};var m=document.getElementById("confetti-canvas");null===m?((m=document.createElement("canvas")).setAttribute("id","confetti-canvas"),m.setAttribute("style","display:block;z-index:999999;pointer-events:none;position:fixed;top:0"),document.body.prepend(m),m.width=r,m.height=u,window.addEventListener("resize",function(){m.width=window.innerWidth,m.height=window.innerHeight},!0),l=m.getContext("2d")):null===l&&(l=m.getContext("2d"));var s=confetti.maxCount;if(n)if(o)if(n==o)s=a.length+o;else{if(n>o){var f=n;n=o,o=f}s=a.length+(Math.random()*(o-n)+n|0)}else s=a.length+n;else o&&(s=a.length+o);for(;a.length<s;)a.push(d({},r,u));e=!0,i=!1,c(),t&&window.setTimeout(w,t)}function w(){e=!1}}();
//configurar confetti 
var termino=false;
const iniciarconfe = () => {
    setTimeout(function() {
        confetti.start()
    }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
};

const detenerconfe = () => {3
    setTimeout(function() {
        confetti.stop()
    }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
};

//tiempo
function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
}






//la barra de progreso
var lemonCount = 0;
var detener=false;
var exploto=false;

function updateProgress(h){

  if(h<=100 && exploto==false){
  $(".progress-bar").animate({
    height: h+"%"
}, 1000);
 
  if (h >= 100 && exploto==false) { 
    setTimeout(function(){ explodeandreload(); }, 2000);
    exploto=true;
  }
}
}


function explodeandreload(){ //pa que explote
  $("#img_lem").explode({"minWidth":3,"maxWidth":12,"radius":235,"minRadius":15,"release":true,"fadeTime":300,"recycle":false,"recycleDelay":500,"explodeTime":231,"round":false,"minAngle":0,"maxAngle":360,"gravity":10,"groundDistance":700, "complete":setTimeout(function(){ initlemon()}, 1500)});
}

function initlemon(){
  lemonCount = 0;
  updateProgress(lemonCount);
 $('.explode-wrapper').remove();
 $('#container').prepend('<img  id="img_lem" class="pulse1" src="https://static.vecteezy.com/system/resources/previews/001/189/792/non_2x/crown-png.png">'); 
 
}



//demo
initlemon();


var demo = lemonCount;

setInterval(function(){ updateProgress(demo), demo = (demo >= 100 ? 85.2 : demo + 16.7) }, 700);




//fin de la barraaaaaaaaaaa







//aca comienzaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//crear el canvas
const WIDTH = 600; 
const HEIGHT = 600;
const $canvas = document.createElement('canvas');
const ctx=$canvas.getContext('2d');

$canvas.width=WIDTH; 
$canvas.height=HEIGHT; 

$canvas.style.backgroundColor= '#000000'; 

//temas 
const theme ={
    light: '#FFCE9E',
    dark: '#D18B47',
}

var dark1='#D18B47';
var light1='#FFCE9E';

var dark2='#F7838D';
var light2='#F3D9DC';

var dark3='#5E69B1';
var light3='#D2C7FF';

var dark4='#68BBE3';
var light4='#F8FBFD';

var dark5='#000000';
var light5='#FFFFFF';

var fondo1="url('images/fondi3.png')";

 

//dejar todo al centro
$canvas.style.padding=0;
$canvas.style.margin="auto";
$canvas.style.top="0";
$canvas.style.top="0";
$canvas.style.bottom="0";
$canvas.style.left="0";
$canvas.style.right="0";
$canvas.style.position="absolute";
$canvas.style.display="block";
$canvas.style.zIndex=-3;

//obtener la posicion del canvas 

//let valoralto= document.body.clientHeight;
//let valorancho= document.body.clientWidth;
let valoralto= window.innerHeight;
let valorancho= window.innerWidth;

let margentop;
margentop=(valoralto/2)-300;
let margenleft=(valorancho/2)-300;

//poner el titulo 
var titulo=document.getElementById("titulo");
titulo.style.left=margenleft+"px";
titulo.style.backgroundColor="#C5BD64";
titulo.style.top=margentop-50+"px";

//poner el audio
const sonido = document.createElement("audio");
sonido.src = "images/ganaste.mp3";
sonido.setAttribute("preload", "auto");
sonido.setAttribute("controls", "none");
sonido.style.display = "none"; // <-- oculto
document.body.appendChild(sonido);

const boop = document.createElement("audio");
boop.src = "images/boop.mp3";
boop.setAttribute("preload", "auto");
boop.setAttribute("controls", "none");
boop.style.display = "none"; // <-- oculto
document.body.appendChild(boop);

const mensaje = document.createElement("audio");
mensaje.src = "images/PEON.mp3";
mensaje.setAttribute("preload", "auto");
mensaje.setAttribute("controls", "none");
mensaje.style.display = "none"; // <-- oculto
document.body.appendChild(mensaje);

//configuracion para los cuadros
const FILES=8;
const RANKS=8;
const Cell_width= WIDTH/FILES;
const Cell_height= HEIGHT/RANKS; 

//obtener coordenadas de la pizarra
var pizarra=document.getElementById("pizarra");
var corpizarra=pizarra.getBoundingClientRect();
var pizaleft=corpizarra.left; 
var pizatop=corpizarra.top;

//poner el icono 
var pincel=document.getElementById("pincel");
pincel.style.position="absolute";
pincel.style.width="50px";
pincel.style.right=margenleft+"px";
pincel.style.top=margentop-50+"px";
pincel.style.cursor="pointer";

var coso=document.getElementById("coso");
coso.style.position="absolute";
coso.style.width="50px";
coso.style.right=(margenleft+62)+"px";
coso.style.top=margentop-50+"px";
coso.style.cursor="pointer";

//poner el boton de play
var play=document.getElementById("play");
play.style.position="absolute";
play.style.width="50px";
play.style.left=pizaleft+231+"px";
play.style.top=pizatop-420+"px";
play.style.cursor="pointer";



//piezas variables

var torre= document.getElementById("torre");
torre.style.position="absolute";
torre.style.width="75px";
torre.style.height="75px";
torre.style.zIndex="5";
torre.style.cursor="pointer";

var star= document.getElementById("star");
star.style.position="absolute";
star.style.width="75px";
star.style.height="75px";
star.style.zIndex="3";

var bandera= document.getElementById("bandera");
bandera.style.position="absolute";
bandera.style.width="75px";
bandera.style.height="75px";
bandera.style.zIndex="3";




//variables globales para la pieza
var yasemovio=false;
var filap;
var columnap;
var filastar;
var columnastar;
var filabandera;
var columnabandera;
var llego=false;
var yadioclick=false;
var hayalgosombreado=false;
var contpincel=0;
var contcoso=0;
let camino1=[];
let camino2=[];


//agregar los botones 
let botones=[];
function losbotones(a1, a2, b1, b2, name){
    const button = document.createElement('button'); 
    button.type = 'button'; 
    button.innerText = ''; 
    button.id='a'+ name; 

    document.body.appendChild(button);

    const btn=document.getElementById('a'+ name); 
    btn.style.position="absolute";
    btn.style.left=a1+margenleft+"px";
    btn.style.top=a2+margentop+"px"; 
    btn.style.width=b1+"px";
    btn.style.height=b2+"px";  
    btn.style.zIndex="4";

    //para hacerlo invisible 
    btn.style.background="transparent";
    btn.style.border="none";
    btn.style.outline="none";
    btn.style.display="block";
    btn.style.cursor="default";

    //agregar el evento 
    //btn.addEventListener('onmouseover',obtenernombre(btn.id),true);

    botones.push(btn);
}



//funcion para renderizar el tablero
let posi =[] //arreglo para guardar las posiciones 
var cont=0; //contador para el nombre de los botones
const renderBoard= () =>{
for(let x=0; x<FILES; x++){
    posi[x]=[];
    for(let y=0; y<RANKS; y++){
        cont++;
        let rectColor=theme.light;
        if((x+y)%2){ //condicional para el color de los cuadritos
            rectColor=theme.dark;  
        }
        ctx.globalAlpha=1;
        ctx.fillStyle=rectColor;
        ctx.fillRect(x*Cell_width, y*Cell_height, Cell_width, Cell_height);
        var name= x+'b'+y;
        if(contpincel==0){ //solo poner los botones si es la primera vez
            losbotones(x*Cell_width, y*Cell_height, Cell_width, Cell_height, name);
        }
        


        let aa ={
        x1: x*Cell_width,
        y1: y*Cell_height,
        x2: Cell_width,
        y2: Cell_height,}

        posi[x].push(aa);
    }
     
}
}

//inicializar el tablero
const boardMatrix =[]; 
for(let x=0; x<FILES; x++){
    boardMatrix[x]=[];
    for(let y=0; y<RANKS; y++){
        boardMatrix[x][y]=null; 
    }
}


renderBoard();

function desombrearfila(fila,columna){
    hayalgosombreado=false;
    var tama=camino1.length;
    for(let i=0; i<tama; i++){
        var x=camino1[i];
        var y=camino2[i];
            var a1=posi[x][y].x1; 
            var a2=posi[x][y].y1; 
            let rectcolor;
           
                rectcolor=theme.light;
                if((x+y)%2){ //condicional para el color de los cuadritos
                    rectcolor=theme.dark;  
                }   
                ctx.globalAlpha=1;
             ctx.fillStyle=rectcolor;
             ctx.fillRect(a1, a2, Cell_width, Cell_height);
             
             //losbotones
             var elide=x+'b'+y;
            const but=document.getElementById('a'+ elide);

            but.style.cursor="default";
            but.removeEventListener('click', selecciono, true);

    }
}

var tipodesombra=0;
//evento de los botonessss -----------------------------------------------------
let seleccionable=[];
function selecciono(e){
    var nombre=e.target.id; 
    const bot=document.getElementById(nombre); 
    c1=bot.style.left; 
    c2=bot.style.top; 

    
    //mover la pieza
    torre.style.left=c1; 
    torre.style.top=c2; 

    //quitar la sombra de la pieza
    torre.style.boxShadow=" inset 0 0 10px rgba(0, 0, 0, 0)"

    //desombrear
    desombrearfila(filap, columnap);

    //resetear los caminos
    camino1=[];
    camino2=[];


    //actualizar filap y columnap
    var s1=parseInt(c1); 
    var s2=parseInt(c2);
    filap= Math.round((s1-margenleft)/Cell_height);
    columnap= Math.round((s2-margentop)/Cell_width);

    //si llego a la banderita 
    if(columnabandera==columnap){
        tipodesombra=1;
        setTimeout(function () {
            bandera.style.width="0px";
        }, 700);
    }
    

    //hacer la comprobacion 
    if(filap==filastar && columnap==columnastar){
        llego=true;

        //reproducir el audio
        sonido.play();
        
        //desaparecer la estrellita
        setTimeout(function () {
            star.style.width="0px";
        }, 700);

        //soltar comfetip
        iniciarconfe();
        detenerconfe();
        
        //explotar la corona 
        setInterval(function(){ updateProgress(demo), demo = (demo >= 100 ? 100 : demo + 16.7) });


        //abrir el enlace
       setTimeout(function() {location.href = "final.html"}, 8000);
        
    }

    if(llego==false){
        //reproducir boop
        boop.play();
        //volver a habilitar el click
        yadioclick=false;
    }
    
    
}



//dibujar filas 
function dibujarfilas(sombra, fila, columna){
    hayalgosombreado=true;
    if(tipodesombra==0){
        //sombrear la casilla de la bandera
        var ax=filabandera;
        var y=columnabandera;
        var a1=posi[ax][y].x1; 
        var a2=posi[ax][y].y1;
        var elide=ax+'b'+y;
        camino1.push(ax); 
        camino2.push(y);

        let rectcolor;
            const but=document.getElementById('a'+ elide);
                ctx.globalAlpha=0.5;
                rectcolor='#2ADE1D'; 

                //agregar los botones
                
                but.style.cursor="pointer";
                but.addEventListener('click', selecciono, true);
             ctx.fillStyle=rectcolor;
             ctx.fillRect(a1, a2, Cell_width, Cell_height);

        //sombrear la anterior a la bandera
        ax=filabandera;
        y=columnabandera+1; 
        if(y!=columnap){
           var a1=posi[ax][y].x1; 
        var a2=posi[ax][y].y1;
        elide=ax+'b'+y;
        camino1.push(ax); 
        camino2.push(y);

       const but=document.getElementById('a'+ elide);
                ctx.globalAlpha=0.5;
                rectcolor='#2ADE1D'; 

                //agregar los botones
                
                but.style.cursor="pointer";
                but.addEventListener('click', selecciono, true);
             ctx.fillStyle=rectcolor;
             ctx.fillRect(a1, a2, Cell_width, Cell_height);
        }

    }else{
        //solo sombrear la casilla de la estrella
        var ax=filastar;
        var y=columnastar;
        var a1=posi[ax][y].x1; 
        var a2=posi[ax][y].y1;
        var elide=ax+'b'+y;
        camino1.push(ax); 
        camino2.push(y);

        let rectcolor;
            const but=document.getElementById('a'+ elide);
                ctx.globalAlpha=0.5;
                rectcolor='#2ADE1D'; 

                //agregar los botones
                
                but.style.cursor="pointer";
                but.addEventListener('click', selecciono, true);
             ctx.fillStyle=rectcolor;
             ctx.fillRect(a1, a2, Cell_width, Cell_height);
    }
            
    
}


//numero aleatorio 
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

//posicionar las piezas

filap= getRandomInt(0,8);
//columnap= getRandomInt(0,8); 
columnap=6;

let objeto1= posi[filap][columnap]; 

var b1= objeto1.x1;
var b2= objeto1.y1;

b1+=margenleft;
b2+=margentop;

torre.style.left=b1+"px";
torre.style.top=b2+"px";

//posicionar la banderita
filabandera=filap; 
columnabandera=columnap-2;
objeto1=posi[filap][columnap-2];

b1= objeto1.x1;
b2= objeto1.y1;

b1+=margenleft;
b2+=margentop;

bandera.style.left=b1+"px";
bandera.style.top=b2+"px";


//posicionar la estrellita 
var decidir=getRandomInt(0,2); //0 es izquierda, 1 es derecha
if(filap==7){
    decidir=0;
}
if(filap==0){
    decidir=1;
    
}

columnastar=columnap-3;
if(decidir==0){
    
    filastar=filap-1;
}
if(decidir==1){
    filastar=filap+1;
}


objeto1= posi[filastar][columnastar]; 
b1= objeto1.x1;
b2= objeto1.y1;

b1+=margenleft;
b2+=margentop;
//b2+=76.8;

star.style.left=b1+"px";
star.style.top=b2+"px";

//sombear el camino 
function sombrear(condi,fila, columna){

    //sombrar de arriba +1
    dibujarfilas(condi, fila, columna);

}


//evento click del pincel
function clickpincel(){
    contpincel++;
    if(contpincel%5==0){
        theme.light=light1; 
        theme.dark=dark1;
    }
    if(contpincel%5==1){
        theme.light=light2; 
        theme.dark=dark2;
    }
    if(contpincel%5==2){
        theme.light=light3; 
        theme.dark=dark3;
    }
    if(contpincel%5==3){
        theme.light=light4; 
        theme.dark=dark4;
    }
    if(contpincel%5==4){
        theme.light=light5; 
        theme.dark=dark5;
    }
    
    renderBoard();
    if(hayalgosombreado==true){
        sombrear(true,filap, columnap);
    }
}

//evento click del coso
function clickcoso(){
    contcoso++;
    if(contcoso%5==0){
        document.body.style.backgroundImage = "url('images/fondi1.png')";
        titulo.style.backgroundColor="#C5BD64";
    }
    if(contcoso%5==1){
        document.body.style.backgroundImage = "url('images/fondi2.png')";
        titulo.style.backgroundColor="#E0B3D1";
    }
    if(contcoso%5==2){
        document.body.style.backgroundImage = "url('images/fondi3.png')";
        titulo.style.backgroundColor="#241246";
    }
    if(contcoso%5==3){
        document.body.style.backgroundImage = "url('images/fondi4.png')";
        titulo.style.backgroundColor="#84E1E1";
    }
    if(contcoso%5==4){
        document.body.style.backgroundImage = "url('images/fondi5.png')";
        titulo.style.backgroundColor="#815D7A";
    }
}


//Evento click de la pieza
function dioclick(){
    yasemovio=false;
    if(yadioclick==true){
        /*torre.style.boxShadow=" inset 0 0 10px rgba(0, 0, 0, 0)"
        sombrear(false, filap, columnap);*/
    }
    else{
    torre.style.boxShadow=" inset 0 0 10px rgba(0, 0, 0, 0.7)"
    sombrear(true,filap, columnap);
    yadioclick=true;
    }
    
}
//enviar mensaje 
function enviarmensaje(){
    mensaje.play();
}

document.body.appendChild($canvas);

torre.addEventListener('click', dioclick, true);
pincel.addEventListener('click', clickpincel, true);
coso.addEventListener('click', clickcoso, true);
play.addEventListener('click', enviarmensaje, true);