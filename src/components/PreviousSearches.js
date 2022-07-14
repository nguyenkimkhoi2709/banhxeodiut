
export default function PreviousSearches(){
    const searches = ['bánh xèo', 'nem lụi', 'trà tắc', 'chả giò', 'biriyani', 'salad', 'ice cream', 'lasagna', 'pudding', 'soup'] 

    return (
        <div className="previous-searches section">
            <h2>Các món chính</h2>
            <div className="previous-searches-container">
                { searches.map((search, index) => (<div key={index} style={{animationDelay: index * .1 + "s"}} className="search-item">
                    {search}
                </div>)) }
            </div>
        </div>
    )
}