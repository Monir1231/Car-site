import { createSlice} from '@reduxjs/toolkit'
import car1 from '/public/car1.png'
import car2 from '/public/car2.png'
import car3 from '/public/car3.png'
import car4 from '/public/car4.png'
import car5 from '/public/car5.png'
import car6 from '/public/car6.png'
import car7 from '/public/car7.png'
import car8 from '/public/car8.png'
import car9 from '/public/car9.png'
import car from '/public/car.png'


const initialState =[
    {
        id:1,
        title:"Koenigsegg",
        img:car1,
        type:"Sport",
        oil:"90L",
        drive:"Manual",
        people:"2 People",
        price:99.00,
        category: "popular",
    }, {
        id:2,
        title:"Nissan GT - R",
        img:car2,
        type:"Sport",
        oil:"90L",
        drive:"Manual",
        people:"2 People",
        category: "popular",
        price:99.00
       
    },
    {
        id:3,
        title:"Rolls - Royce",
        img:car3,
        type:"Sport",
        oil:"90L",
        drive:"Manual",
        people:"2 People",
        price:99.00
    },
    {
        id:4,
        title:"Nissan GT - R",
        img:car4,
        type:"Sport",
        oil:"90L",
        drive:"Manual",
        people:"2 People",
        price:99.00
    },
    {
        id:5,
        title:"Koenigsegg",
        img:car5,
        type:"Sport",
        oil:"90L",
        drive:"Manual",
        people:"2 People",
        price:99.00
    },
    {
        id:6,
        title:"Koenigsegg",
        img:car6,
        type:"Sport",
        oil:"90L",
        drive:"Manual",
        people:"2 People",
        price:99.00
    },
    {
        id:7,
        title:"Koenigsegg",
        img:car7,
        type:"Sport",
        oil:"90L",
        drive:"Manual",
        people:"2 People",
        price:99.00
    },
    {
        id:8,
        title:"Koenigsegg",
        img:car8,
        type:"Sport",
        oil:"90L",
        drive:"Manual",
        people:"2 People",
        price:99.00
    },
    {
        id:9,
        title:"Koenigsegg",
        img:car9,
        type:"Sport",
        oil:"90L",
        drive:"Manual",
        people:"2 People",
        price:99.00
    },
    {
        id:10,
        title:"Koenigsegg",
        img:car1,
        type:"Sport",
        oil:"90L",
        drive:"Manual",
        people:"2 People",
        price:99.00,
        category: "popular",
    },
    {
        id:11,
        title:"Koenigsegg",
        img:car,
        type:"Sport",
        oil:"90L",
        drive:"Manual",
        people:"2 People",
        price:99.00,
          category: "popular"
    }, {
        id:12,
        title:"Koenigsegg",
        img:car2,
        type:"Sport",
        oil:"90L",
        drive:"Manual",
        people:"2 People",
        price:99.00,
         category: "popular"
    },
]
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers:{
    addProduct:(state,action) =>{
        state.push({
            id:state.length > 0 ? state[state.length -1].id : 1,
            ...action.payload
        })
    }
    }
})

export const {addProduct} = productSlice.actions 
export default productSlice.reducer