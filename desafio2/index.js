import ProductManager from './managers/ProductManager.js';

const manager = new ProductManager();

const Carrito = async () =>{

    let product = {
        title: 'Samsung',
        description:'telefono',
        price: 580,
        thumbnail:'sin imagen',
        code: 105,
        stock: 3,
    };

    let product2 = {        
        title: 'Trumpeter',
        description:'Vino Malbec',
        price: 750,
        thumbnail:'sin imagen',
        code: 125,
        stock: 2,
    }
    let product3 = {
        title: 'Enemigo',
        description:'Vino Cabernet',
        price: 1550,
        thumbnail:'sin imagen',
        code: 130,
        stock: 1,
    };

    let result = await manager.crearProductos(product3);

    result = await manager.mostrarProductos();

    console.log(result);



}

Carrito();

//
