let orders=[
    {id:1,cName:'shamsa',name:'laptop',price:120993,status:'pending',quantity:30},
    {id:2,cName:'hamna',name:'keyboard',price:120993,status:'delivered',quantity:10},
    {id:3,cName:'farheen',name:'mouse',price:120993,status:'pending',quantity:12},
]
let price=orders.forEach((item,ind,arr)=>{
    let tb=0;
    return tb+=arr[ind].price;
})

let customerSpending=(name)=>{
    let tb=0
    for(let item of orders){
        if(item.cName===name){
            tb+=item.price
        }
    }
    return tb
}
console.log(customerSpending('shamsa'))

let ordersByStatus=(status)=>{
    for(let item of orders){
        if(item.status===status){
            console.log(`${item.id}-${item.name}-${item.status}-${item.quantity}`)
        }
    }
}

let calBestSelling=()=>{
    let max=0
    let bestItem=[]
    for(let item of orders){
        if(item.quantity>max){
            max=item.quantity
            bestItem.push(item)
        }
    }
    console.log(`${bestItem.name}-${bestItem.price}-${bestItem.quantity}`)
}


