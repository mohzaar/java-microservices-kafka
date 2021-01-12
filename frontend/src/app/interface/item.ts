export interface Item {
    id: number;
    image: string;
    name: string;
    price: number;
    description: string[];
}


export const products: Item[] = [
 {
     id: 1,
     image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-pro-13-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604347427000",
     name: "Apple M1 Chip with 8-Core CPU and 8-Core GPU 256GB Storage",
     price: 1299.00,
     description: [
         "Apple M1 chip with 8-core CPU, 8-core GPU, and 16-core Neural Engine",
         "8GB unified memory",
         "256GB SSD storage",
     ]
 }
]