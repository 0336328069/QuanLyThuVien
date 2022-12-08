import { defineStore } from 'pinia'

interface dateBorrow{
    startDate: String,
    endDate: String
}

interface borrow{
    id:String,
    title: String,
    image: String,
    quantity: number,
    date: dateBorrow[]
}

export const useBorrowBook = defineStore('borrowBook',{
    state:() => ({
        listBook: <borrow[]>[]
    }),

    actions:{
        addBorrowBook(data : borrow) {
            let hasBorrow = false;
            this.listBook.forEach((c) => {
                if(c.id == data.id){
                    hasBorrow = true;
                    c.quantity = c.quantity + 1;
                }
            })

            if(!hasBorrow){
                this.listBook.push(data);
            }
        }
    }
})