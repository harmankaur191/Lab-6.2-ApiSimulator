
export {};

export interface product {
    productId: number;
    name: string;
    price: number;
}
export function fetchProductCatalog(): Promise<product> {
    return new Promise((resolve, reject) => {
        if (Math.random() < 0.5) {
            reject("Failed to fetch product catalog")
        } else {
            setTimeout(() => {
                let Product: product = { productId: 2, name: "shoes", price: 300 };
                resolve(Product);
            }, 1000);
        }
    });
};


interface productReviews {
    productId: number;
    rating: string;
}
export default function fetchProductReviews(productId:  number): Promise<productReviews[]> {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let reviews: productReviews[] = [{ productId: 1, rating: "4 star" }, { productId: 2, rating: "2 star" }];

            let matchedReviews = reviews.filter(review => productId === review.productId)

            if (matchedReviews.length > 0) {
                resolve(matchedReviews)
            } else {
                reject(`Failed to fetch reviews for product ID ${productId}`)
            }
        }, 1000);

    })

};
//totalSales, unitsSold, and averagePrice.

interface productSales {
    productId: number;
    totalSales: number;
    unitSold: number;
    averagePrice: number;


}
export function fetchSalesReport(Product: product): Promise<productSales[]> {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let sales: productSales[] = [{ productId: 1, totalSales: 2000, unitSold: 34, averagePrice: 20 }, { productId: 2, totalSales: 3000, unitSold: 50, averagePrice: 60 }];

            let matchedSalesReport: productSales[] = sales.filter(sale => Product.productId === sale.productId)
            if (matchedSalesReport.length > 0) {
                resolve(matchedSalesReport)
            } else {
                reject("Failed to fetch sales report")
            }
        }, 1000);

    })

};



// fetchProductCatalog()
//     .then((catalog) => {
       

//         console.log("Catalog:", catalog)
//         return fetchProductReviews(catalog)
//             .then((reviews) => {

//                 console.log(reviews)
//                 return fetchSalesReport(catalog)
//             })
//             .catch((error) => {
//                 console.log(error);

//             })

//     })
//     .then((salesReport)=>{
//         console.log(salesReport)
//     })
//     .catch((error)=>{
//         console.log(error)
//     })




