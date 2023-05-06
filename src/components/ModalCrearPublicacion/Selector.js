import React, { useState } from 'react'
import { Form } from 'react-bootstrap'



const opciones = [
    'Opcion 1',
    'Opcion 2',
    'Opcion 3'
]


const Selector = ({category,dataSelections,setDataSelections}) => {
    const [selection, setSelection] = useState('');

    const handleSelection = (e)=>{
        console.log(category,e.target.value);
        setDataSelections({
            ...dataSelections,
            [category]:e.target.value
        })
    }
  return (
    <Form.Group controlId="formOpciones">
    
    <Form.Select size="lg" value={selection} className='my-3' onChange={handleSelection}>
        <option>Seleccionar {category}:</option>
        {opciones.map((item,index)=> <option key={index} value={item}>{item}</option> )}
    </Form.Select>  

    </Form.Group>
  )
}

export default Selector

/**
 * 
 * <Form.Group controlId="formOpciones1">
  <Form.Label>Seleccione una opción:</Form.Label>
  <Form.Select size="lg" value={opcionSeleccionada} onChange={(e) => setOpcionSeleccionada(e.target.value)}>
    <option value="">--Seleccione una opción--</option>
    <optgroup label="Cámara">
      <option value="Camara 1">Camara 1</option>
      <option value="Camara 2">Camara 2</option>
      <option value="Camara 3">Camara 3</option>
    </optgroup>
    <optgroup label="Print">
      <option value="Print 1">Print 1</option>
      <option value="Print 2">Print 2</option>
      <option value="Print 3">Print 3</option>
    </optgroup>
    <optgroup label="Rollo">
      <option value="Rollo 1">Rollo 1</option>
      <option value="Rollo 2">Rollo 2</option>
      <option value="Rollo 3">Rollo 3</option>
    </optgroup>
  </Form.Select>
</Form.Group>
 * 
 * 
 * 
 * 
 */