import { useContext } from 'react';
import { LocaleContext } from '../../../App';
import './Filter.scss'

export function Filter ({selectors, setSelectorId, selectorId, filter}){

    const {locale} = useContext(LocaleContext)

    return(
        <div className='filter'>
            {selectors.map((selector, id) => {
                return(
                    locale === "ua" ?
                    <div key={id+10*10} className={`filter-item pointer ${id === selectorId ? "selected" : ""}`} onClick={() => {setSelectorId(id); filter(selector.en)}}><span>{selector.ua}</span></div>:
                    <div key={id+10*10} className={`filter-item pointer ${id === selectorId ? "selected" : ""}`} onClick={() => {setSelectorId(id); filter(selector.en)}}><span>{selector.en}</span></div>
                )
            })}
        </div>
    )
}