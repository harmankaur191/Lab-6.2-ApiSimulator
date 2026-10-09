
export {};
// custom Error Class-Network Error
class NetworkError extends Error{
    constructor(message:string){
        super(message);
        this.name = "NetworkError";
    }
}
//custom Error Class-DataError
class DataError extends Error{
    constructor(message: string){
        super(message);
        this.name = "DataError";
    }
}

export interface product {
    productId: number;
    name: string;
    price: number;
}
export function fetchProductCatalog(): Promise<product> {
    return new Promise((resolve, reject) => {
        if (Math.random() < 0.8) {
            reject(new NetworkError("Failed to fetch product catalog: Connecton time out"))
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
       if (Math.random() < 0.8) {
            reject(new NetworkError("Failed to fetch product catalog: Connecton time out"))
        }else{
        setTimeout(() => {
            let reviews: productReviews[] = [{ productId: 1, rating: "4 star" }, { productId: 2, rating: "2 star" }];

            let matchedReviews = reviews.filter(review => productId === review.productId)

            if (matchedReviews.length > 0 ) {
                resolve(matchedReviews)
            } else {
                reject(new DataError(`Failed to fetch reviews for product ID ${productId}`));
            }
        }, 1500);
    }

    })

};


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


// function retryPromise(retries: number,delay:number):Promise{

// }





