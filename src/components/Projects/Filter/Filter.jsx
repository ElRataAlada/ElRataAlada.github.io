import { useContext } from 'react';
import { LocaleContext } from '../../../App';
import './Filter.min.css'

export function Filter ({selectors, setSelectorId, selectorId, filter}){

    const {locale} = useContext(LocaleContext)

    return(
        <div className='filter'>
            {selectors.map((selector, id) => {
                return(
                    locale === "ua" ?
                    <div className={`filter-item pointer ${id === selectorId ? "selected" : ""}`} onClick={() => {setSelectorId(id); filter(selector.en)}}><span>{selector.ua}</span></div>:
                    <div className={`filter-item pointer ${id === selectorId ? "selected" : ""}`} onClick={() => {setSelectorId(id); filter(selector.en)}}><span>{selector.en}</span></div>
                )
            })}
        </div>
    )
}