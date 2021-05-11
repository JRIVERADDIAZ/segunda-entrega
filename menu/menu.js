// menu

for(i=0; i<acum; i++){
    cont.innerHTML +=
    `<div>
      <nav>
          <ul class="show">
           <li class="lp"><a href="file:///C:/Users/JOVAHIN/Desktop/PRUEBA%20CURSO%204/Index.HTML" class="la">Home</a></li>
              <li class="lp"><a href="/E-Comerce.HTML" class="la">E-Comerce</a></li>
               <li class="lp"><a href="file:///C:/Users/JOVAHIN/Desktop/PRUEBA%20CURSO%204/Social%20Media%20Marketing.HTML" class="la">Chekout</a></li>
                <button class="botonk" id="iconCarrito" onclick= clsike()><span id="contadorCarrito">0</span> </button>
                <div id="myDropdown" class="">
                <div class="dropdown-content">
                <p>  </p>
                <p>  el stock disponible es:  </p> 
            <button class ="pagara" onclick="restar()"> quitar del carrito </button>
            <button class ="pagara" onclick="pagar()" > pagar </button>
                </div>
               </div>
            </div>
                </ul>
                <div class="dropdown">
                 </nav>
             </div>
            `}  
            
            clsike = () => {
                           }