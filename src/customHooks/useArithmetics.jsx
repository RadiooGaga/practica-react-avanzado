import { useState, useCallback } from "react";


export const useArithmetics = () => {
    
    const [newNumber, setNewNumber] = useState(0);  // Estado para almacenar la operación 

    // +
    const handleSum = useCallback((inputValue, currentValue) => {
        const newValue = inputValue + currentValue ; // Calcular el nuevo valor basado en el estado actual
        setNewNumber(newValue); // Actualizar el estado con el nuevo valor
        return newValue; // Retornar el nuevo valor calculado
    },[])

    // -
    const handleSubstract = useCallback((inputValue, currentValue) => {
        const newValue = inputValue - currentValue;
        setNewNumber(newValue);
        return newValue;
    }, []);

    // x
    const handleMultiply = useCallback((inputValue, currentValue) => {
        const newValue = currentValue * inputValue;
        setNewNumber(newValue);
        return newValue;
    }, []);

    // :
    const handleDivide = useCallback((inputValue, currentValue) => {
        if (inputValue === 0) {
            alert('No se puede dividir por 0');
            return newNumber;
        }
        const newValue = inputValue / currentValue;
        setNewNumber(newValue);
        return newValue;
    });

    // %
    const handlePercentage = useCallback((inputValue, currentValue) => {
        const newValue = inputValue * ( currentValue / 100);
        setNewNumber(newValue);
        return newValue;
    });

    return { handleSum, handleSubstract, handleMultiply, handleDivide, handlePercentage };
};
