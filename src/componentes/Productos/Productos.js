const productos = [
    {
        id:'1',
        nombre:'samsung',
        precio: 10000,
        categoria:'monitor',
        img:'https://www.venex.com.ar/products_images/1585891343_monitor_24_led_samsung_curvo_cf390_full_hd.png',
        stock:10,
    
    },
    {
        id:'2',
        nombre:'LG',
        precio: 2000,
        categoria:'monitor',
        img:'https://www.lg.com/ar/images/monitores/md07509943/gallery/N01_D_01.jpg',
        stock:122,
    },

    {
        id:'3',
        nombre:'HP',
        precio: 8000,
        categoria:'monitor',
        img:'https://www.cordobadigital.net/wp-content/uploads/2020/04/71A2X-Mr7oL._AC_SL1500_.jpg',
        stock:12,
    },
    {
        id:'4',
        nombre:'Razer',
        precio: 12000,
        categoria:'mouse',
        img:'https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-5846531.jpg',
        stock:2,
    },
    {
        id:'5',
        nombre:'logitech',
        precio: 5000,
        categoria:'mouse',
        img:'https://www.newmaster.com.ar/wp-content/uploads/2019/03/1-80.jpg',
        stock:22,
    },
    {
        id:'6',
        nombre:'red-dragon',
        precio: 1000,
        categoria:'mouse',
        img:'https://www.migos.com.ar/wp-content/uploads/2021/08/7351-2.webp',
        stock:202,
    },
    {
        id:'7',
        nombre:'logitech',
        precio: 11000,
        categoria:'teclado',
        img:'https://http2.mlstatic.com/D_NQ_NP_979029-MLA47180055720_082021-O.webp',
        stock:32,
    },
    {
        id:'8',
        nombre:'razer',
        precio: 9900,
        categoria:'teclado',
        img:'https://pcprojectstore.com.ar/wp-content/uploads/2022/04/razer-cynosa-chroma-01-570x570.png',
        stock:10,
    },
    {
        id:'9',
        nombre:'hp',
        precio: 5000,
        categoria:'teclado',
        img:'https://microglobalpromos.com.ar/2020/img/012021/631341-B21_2.jpg',
        stock:132,
    }


    
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(productos)
        }, 500)
    })
}

export const getProductById = (idProducto) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === idProducto))
        })
    })
}

function getProductByCategory(idCategoria) {
    return new Promise((resolve, reject) => {
      // Filtrar productos por la categoría proporcionada
      const productosFiltrados = productos.filter(producto => producto.categoria === idCategoria);
  
      // Simular un tiempo de espera para obtener los datos de manera asíncrona (esto puede ser una solicitud a un servidor real)
      setTimeout(() => {
        // Si se encontraron productos, resolvemos la promesa con los productos filtrados
        if (productosFiltrados.length > 0) {
          resolve(productosFiltrados);
        } else {
          // Si no se encontraron productos, rechazamos la promesa con un mensaje de error
          reject('No se encontraron productos en la categoría especificada.');
        }
      }, 1000); // Simulamos 1 segundo de tiempo de espera
    });
  }

  export default getProductByCategory