import "./centeredCard.css"

function CenteredCard ({children}){
    return(
        <div className="divPai">
            <span>
                {children}
            </span>
        </div>
    )
}

export default CenteredCard;