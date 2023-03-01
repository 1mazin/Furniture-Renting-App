
const products=[
    {
        id:"price_1MedcCSEnjL1fvYCMc8z2BrT",
        name:'Sofa' ,
        price:"20000",
       
    },
    {
        id:"price_1Mede1SEnjL1fvYCV2g11l8K",
        name:'Coffee table' ,
        price:"4000",
       
    },
    {
        id:"price_1MedeySEnjL1fvYCufGVTMif",
        name:'Dining Table' ,
        price:"12000",
       
    }
]
function getProductData(id){
    let productData=products.find(product=>product.id===id);
    if(productData===undefined){
        console.log("product data doess not exist dor ID:"+id)
        return undefined
    }
    return productData;
}
export {products,getProductData};