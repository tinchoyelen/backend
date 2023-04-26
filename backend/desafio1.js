class ProductManager {
  constructor() {
    this.products = [];
    this.newId = 1;
  }

  addProduct(title, description, price, thumbnail, code, stock) {

    const codigoRepetido = this.products.some((product) => product.code === code);
    if (codigoRepetido) {
      console.log(`Ya existe el código ${code}`);
      return;
    }

    const newProduct = {
      id: this.newId,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    this.products.push(newProduct);
    this.newId++;

    console.log(`Producto con id ${newProduct.id} agregado correctamente`);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      console.log("Not found");
    }
    return product;
  }
}

const productManager = new ProductManager();

productManager.addProduct("Vino, El Enemigo","Vino Malbec de alta calidad",1500, "./multimedia/enemigomalbec.png","450",4);
productManager.addProduct("Vino, Rutini","Vino Cabernet de alta calidad",2000,"./multimedia/rutinicabernet.png","451",20);

const todosProducts = productManager.getProducts();
console.log(todosProducts);

const productById = productManager.getProductById(1);
console.log(productById);

const idNotfound = productManager.getProductById(3);
