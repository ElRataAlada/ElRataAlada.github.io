import './Popup.scss'

export function Popup ({children, isVisible, setIsVisible}){
    return(
        isVisible ?
            <div className='popup_wrapper' onClick={() => setIsVisible(false)}>
                <div className='popup' onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        : <></>
    )
}