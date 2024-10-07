import { useState } from "react";


export const useArithmetics = () => {
    
    const [newNumber, setNewNumber] = useState(0);  // Estado para almacenar la operación 

    // +
    const handleSum = (inputValue, currentValue) => {
        const newValue = inputValue + currentValue ; // Calcular el nuevo valor basado en el estado actual
        setNewNumber(newValue); // Actualizar el estado con el nuevo valor
        return newValue; // Retornar el nuevo valor calculado
    };

    // -
    const handleSubstract = (inputValue, currentValue) => {
        const newValue = inputValue - currentValue;
        setNewNumber(newValue);
        return newValue;
    };

    // x
    const handleMultiply = (inputValue, currentValue) => {
        const newValue = currentValue * inputValue;
        setNewNumber(newValue);
        return newValue;
    };

    // :
    const handleDivide = (inputValue, currentValue) => {
        if (inputValue === 0) {
            alert('No se puede dividir por 0');
            return newNumber;
        }
        const newValue = inputValue / currentValue;
        setNewNumber(newValue);
        return newValue;
    };

    // %
    const handlePercentage = (inputValue, currentValue) => {
        const newValue = inputValue * ( currentValue / 100);
        setNewNumber(newValue);
        return newValue;
    };

    return { handleSum, handleSubstract, handleMultiply, handleDivide, handlePercentage };
};
