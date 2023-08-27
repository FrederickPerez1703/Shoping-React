import { useContext } from "react"
import { FiltersContext } from "../context/Filter"

function useFilter () {

    const {filter,setFilter} = useContext(FiltersContext)
  
    const filterProducts = (data) => { 
      return data.filter(product => {
        return ( product.price >= filter.minPrice &&
          (
            filter.category === 'all' ||
            product.category === filter.category
          )
        )
      })
    }
  
    return {filterProducts, setFilter, filter}
  }

  export default useFilter;