import { useState , useId, useContext} from 'react'
import '../Filter/Filter.css'
import useFilter from "../../Hooks/useFilter.js"

export default function Filter() {

    const minPriceFilterId = useId();
    const categoryFilterID = useId();
    const {filter, setFilter} = useFilter()

    const handleChangePrice = (event) => {
      setFilter(prevState => ({
        ...prevState,
        minPrice: event.target.value
      }))
    }

    const handleChangeCategory = (event) => {
        setFilter(prevState => ({
          ...prevState,
          category: event.target.value
        }))
      }

    
  return (
    <section className="filters"> 

        <div >
            <label for={minPriceFilterId}>A partir de:</label>
            <input type="range" id={minPriceFilterId} min="0" max='1000' value={filter.minPrice} onChange={handleChangePrice}/>
            <span>${filter.minPrice}</span>
        </div>

        <div >
            <label for={categoryFilterID}>Categoria:</label>
            <select  id={categoryFilterID} onChange={handleChangeCategory} >
               <option value="all">Todas</option> 
               <option value="laptops">Portatil</option> 
               <option value="smartphones">Celulares</option> 
            </select>
        </div>
       
    </section>
  )
}
