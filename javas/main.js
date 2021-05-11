  const productos = [
    {
      precio: 500,
      id: 1,
      title: "Café",
      stock: 16,
      thumbnailUrl: "https://picsum.photos/id/0/600",
    },
    {
      precio: 300,
      id: 2,
      title: "Pizza",
      stock: 18,
      thumbnailUrl: "https://picsum.photos/id/10/600",
    },
    {
      precio: 100,
      id: 3,
      title: "Agua",
      stock: 14,
      thumbnailUrl: "https://picsum.photos/id/20/600",
    },
    {
      precio: 50,
      id: 4,
      title: "Sandía",
      stock: 14,
      thumbnailUrl: "https://picsum.photos/id/30/600",
    },
    {
      precio: 10,
      id: 5,
      title: "Mango",
      stock: 12,
      thumbnailUrl: "https://picsum.photos/id/40/600",
    },
    {
      precio: 150,
      id: 6,
      title: "Chela",
      stock: 9,
      thumbnailUrl: "https://picsum.photos/id/50/600",
    },
  ]; // base de datos <----
  let contador = document.getElementById("container-card");
  let incluir = document.getElementsByClassName("carrito")[0];
  let cont = document.getElementById("navigat");
  const total = document.getElementById("precioTotal")
  const cant = document.getElementById("cantidad")
  let acum = 1;
  const carrito = [];
  class Producto {
    constructor(id, title, precio, stock) {
      this.id = id;
      this.title = title;
      this.precio = precio;
      this.stock = stock;
    }
  }

//  / pintar cards :
pintar = (productos) => {
  productos.forEach( (Producto) => {
    contador.innerHTML += ` 
      
      <div class="card" >  
        <figure>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ9DMN
              FHxwZcfPXJrJeBMITxPMP3FMZk_ixXzTfzt4G_C-G058" >
        </figure>
  
  <div class="contenido-card">
    <h2 id="art"> ${Producto.title}</h2>
    <p class="description"> <!-- descripcion -->gente en la compu</p>
      <h4 id="prec">${Producto.precio}</h4>
      <h3 id="stck">${Producto.stock}</h3>
      <button class="button" onclick="agregar(${Producto.id})"> agregar al carrito </button>
      </div>
      </div>`;
  });
}
if (productos.length > 1)
{pintar(productos)}

  // agregar al carrito =)

  function agregar(id) {
    let productoElegido = productos.find((el) => el.id == id);
    if (productoElegido.stock >= 1 ) {
      carrito.push(productoElegido);
      activarCarrito()
      
      
      
    } else {
      carrito.splice(productos.find((el) => el.id == id));
        
    }
  
  }

    activarCarrito = () => {
    incluir.innerHTML = ``;
      carrito.forEach( (compra) =>  {
        incluir.innerHTML += `
    
          <p> ${compra.title} </p>
          <p>  el stock disponible es: ${compra.stock} $ ${compra.precio} </p> 
      <button class ="pagara" onclick="restar(${compra.id})"> quitar del carrito </button>
      <button class ="pagara" onclick="pagar()" > pagar </button>
      `;
      let  pagar = total.innerText = carrito.reduce( (acc, el) => acc += el.precio, 0 )
      total.innerHTML = `Precio total: $ ${pagar}`
      })
  
    }

      // quitar producto del carrito =(
      function restar (id){
          
        let productoeliminado = carrito.find((el) => el.id == id);
        let indice = carrito.indexOf(productoeliminado)
        carrito.splice(indice, 1)
        activarCarrito()
        total.innerHTML = ``
        
      }

  
      //  restar de las cards el producto elegido -->
     const pagar = (id) =>{
        contador.innerHTML = ``
      let aRestar = productos.find((el) => el.id == id);
      
      productos.forEach( (Producto) => {
        aRestar.stock -= 1
        contador.innerHTML += ` 
      
          
          <div class="card" >  
            <figure>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ9DMN
                  FHxwZcfPXJrJeBMITxPMP3FMZk_ixXzTfzt4G_C-G058" >
            </figure>
      
      <div class="contenido-card">
        <h2 id="art"> ${Producto.title}</h2>
        <p class="description"> <!-- descripcion -->gente en la compu</p>
          <h4 id="prec">${Producto.precio}</h4>
          <h3 id="stck">${Producto.stock  }</h3>
          <button class="button" onclick="agregar(${Producto.id})"> agregar al carrito </button>
          </div>
          </div>`;
      });
      }
     
    