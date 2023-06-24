import { createContext , useState} from "react";
import {popularProducts} from '../components/data'

export const CartContext = createContext(null)

const defaultCart = () => {
    let obj = {};
    for (let i = 1; i<popularProducts.length+1; i++){
        obj[i] = 0;

    }
    return obj;
}
export const CartProvider = ({children})=>{

    const [ item, setItem ] = useState(defaultCart());

    const getTotal = () => {
        let amount = 0;
    
        for(let i in item){
            if(item[i] > 0){
            let info = popularProducts.find((e)=> e.id === Number(i) )
            amount += item[i] * info.price
            }
            
        }
        return amount;

    }

    const addToCart = (id) => {
        setItem((prev)=>({...prev, [id] : prev[id] +1 }))
    }
    const removeToCart = (id) => {
        setItem((prev)=>({...prev, [id] : prev[id] -1 }))
    }

    const value  = {item, addToCart, removeToCart,getTotal}
    console.log(item);

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>

}


