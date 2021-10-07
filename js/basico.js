let carritoCompra = {
    items:[],
    itemCount:0,
    total:0.0
}


const productos =[
    {
        id:1,
        nombre:'pc',
        precio:2.0,
        descripcion:'este es un pc gamer',
        photo:'/img/p1.png'
    },{
        id:3,
        nombre:'teclado',
        precio:1.0,
        descripcion:'este es un teclado mecánico',
        photo:'/img/p2.png'
    },{
        id:3,
        nombre:'Escritorio',
        precio:4.0,
        descripcion:'Escritorio ajustable en altura',
        photo:'/img/p3.png'
}]

const contarItems = (itemList) =>{
   const cantidad = itemList.reduce((contador, item) => contador + item.cantidad, 0)
   return cantidad;
}

const sumaTotal = (cartItems) => cartItems.reduce((total, item)=> total + item.precio * item.cantidad,0)


function agregarCarroCompra(item){
    let encontrado = carritoCompra.items.find((p)=>item.id === p.id);
    
    if(!encontrado){
        carritoCompra.items.push(
            {
                ...item,
                cantidad: 1
            }
        );
        
        
        
    }else{
        carritoCompra = {
            ...carritoCompra,
            items: carritoCompra.items.map(element => {
                if(element.id === item.id){
                    return {
                            ...element,
                            cantidad: element.cantidad + 1
                           };
                }else{
                    return element;
                }
            }),
            
        }
    }
    carritoCompra = {
        ...carritoCompra,
        itemCount: contarItems(carritoCompra.items),
        total: sumaTotal(carritoCompra.items)
    }
}

function eliminarItem(item){
    carritoCompra = {
        ...carritoCompra,
        items: carritoCompra.items.filter(elemento => elemento.id !== item.id)
    }
}

function mostrarCarrito(){
    console.log('cantidad: '+carritoCompra.itemCount);
    console.log('total: '+carritoCompra.total);
    carritoCompra.items.map((item)=>{
        console.log(item);
    });


}