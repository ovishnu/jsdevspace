export interface Customer {
    fullname: string;
    age: number;
    address: string;
    published: string;
}

export interface CustomerSource {
    source: Customer;
}
