import * as api from './apiSimulator.js'
function displayData(){
api.fetchProductCatalog()
    .then((catalog) => {
       
        const productId = catalog.productId;
        console.log("Catalog:", catalog)
        return api.default(productId)
            .then((reviews) => {

                console.log(reviews)
                return api.fetchSalesReport(catalog)
            })
            .catch((error) => {
                console.log(error);

            })
    })
    .then((salesReport)=>{
        console.log(salesReport)
    })
    .catch((error)=>{
        console.log(error)
    })
    .finally(()=>{
        console.log("Api called has been made")
    })
}

displayData();