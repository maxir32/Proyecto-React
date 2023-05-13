import { useState, createContext } from "react";
export const CarContext = createContext({car:[]});
export const CarProvider = ({children}) => {


    const [car, setCar] = useState([]);
    const totalQuantity = car.reduce((total, product) => total + product.quantity, 0)
    

    const addItem = (item, quantity) => {
        if (!insideCart(item.id)){
            setCar(prev => [...prev,{item, quantity}]);
        } else{
            console.log(("productos ya agregador"));
        }
    }

    

    const removeItem = (id) => {
        const updatedCar = car.filter(prod => prod.id !== id)
        setCar(updatedCar);
    }

    

    const clearCar = () =>{
        setCar([]);
    }

    

    const insideCart = (id) => {
        return car.some(prod => prod.id === id);
    }

    

    return(
        <CarContext.Provider value={{car, addItem, clearCar, removeItem, totalQuantity}}>
            {children}
        </CarContext.Provider>
    )

}
