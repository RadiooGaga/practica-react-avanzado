import React, {useState, useEffect, useCallback} from 'react'
import { useArithmetics } from '../../customHooks/useArithmetics';
import './Calculator.css'



export const Calculator = () => {

    const  { handleSum, handleSubstract, handleMultiply, handleDivide, handlePercentage } = useArithmetics('');
   
    const [inputValue, setInputValue] = useState(''); // valor de entrada
    const [calc, setCalc] = useState(0);  // Almaceno el cálculo
    const [history, setHistory] = useState([]);  // Historial 
    const [operation, setOperation] = useState(null);  // operación seleccionada
    const [prevValue, setPrevValue] = useState(null); // valores previos


    const handleInputChange = useCallback((e) => {
      setInputValue(Number(e.target.value));
    }, []);

  
    useEffect(() => { // Ordenar el historial cuando calc cambia
        if (calc) {
          setHistory((prevHistory) => {
            const newHistory = [...prevHistory, calc];
            return newHistory.sort((a, b) => a - b); 
          });
        }
      }, [calc]);


    // Manejar la selección de una operación
    const handleOperation = useCallback((operationType) => {
      inputValue === '' ? setPrevValue(calc) : setPrevValue(inputValue);
      setOperation(operationType); // Guardar la operación seleccionada
      setInputValue('');
    }, [inputValue, calc]);


      
    
    // clic en '='
    const handleCalculateAndStoreResult = useCallback(() => {
      if (prevValue === null || inputValue === '') return;

      let result; 
      const currentValue = Number(inputValue);

      if (prevValue !== null) {
        if (operation === 'sum') {
          result = handleSum(prevValue, currentValue);
        } else if (operation === 'subtract') {
          result = handleSubstract(prevValue, currentValue);
        } else if (operation === 'multiply') {
          result = handleMultiply(prevValue, currentValue);
        } else if (operation === 'divide') {
          result = handleDivide(prevValue, currentValue);
        } else if (operation === 'percentage') {
          result = handlePercentage(prevValue, currentValue);
        }

        // almacenar totales, limpiar el valor previo, la operacion y el input
        setCalc(result); 
        setPrevValue(null);
        setOperation(null);
        setInputValue('');
      }
    }, [prevValue, inputValue, operation, handleSum, handleSubstract, handleMultiply, handleDivide, handlePercentage]); 
    // Esta función depende de todos estos valores y se recreará cuando cambien


    const cleanHistory = useCallback(() => { 
      console.log("Historial reseteado");
      setHistory([]);
      setCalc(0);
      setInputValue('');
    }, []);


    return (
        <div className='calculatorDiv'>
          <h2>CALCULADORA:</h2>
            <input 
            type="number" 
            name="calculatorInput" 
            id="calculatorInput"
            value={inputValue}
            onChange={handleInputChange} 
            />
          <div className='calculatorButtons'>
                <button onClick={() => handleOperation('sum')}>+</button>
                <button onClick={() => handleOperation('subtract')}>-</button>
                <button onClick={() => handleOperation('multiply')}>x</button>
                <button onClick={() => handleOperation('divide')}>/</button>
                <button onClick={() => handleOperation('percentage')}>%</button>
                <button onClick={handleCalculateAndStoreResult}>=</button>
                <button onClick={cleanHistory}>C</button>

          </div>
          <div className='resultsDivCalc'>
              <p>Último resultado: {calc}</p>
              <h3>Historial:</h3>
              <ul>
                  {history.map((calc, index) => (
                      <li key={index}>{calc}</li>
                  ))}
              </ul>
          </div>
        </div>
      );
}

