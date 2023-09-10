
import { useId } from 'react';
import { useFilters } from '../hooks/useFilters.js';
import './Filters.css';

export function Filters({ categorysAll }) {
    const { filters, setFilters } = useFilters();
    
    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const handlechangeMinPrince = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }));
    }
    const handlechangeCategory = (event) => {
        // ESTO HUELE MAL
        // estamos pasando la funcion de actualizar estado
        // nativa de React a un componente hijo
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }));
    }

    return (
        <section className='filters'>
            <div>
                <label htmlFor="price">Preico</label>
                <input
                    type="range"
                    id={minPriceFilterId}
                    min="0"
                    max='1000'
                    onChange={handlechangeMinPrince}
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor="category">Categoria</label>
                <select id={categoryFilterId} onChange={handlechangeCategory}>
                    <option value="all">all</option>
                    {
                        categorysAll.map(category => {
                            return (
                                <option key={category} value={category}>{category}</option>
                            )
                        })
                    }
                </select>
            </div>
        </section>
    )
}


