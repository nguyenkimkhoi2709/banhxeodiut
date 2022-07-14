import ChiefCard from "./ChiefCard"

export default function ChiefsSection(){
    const chiefs = [
        {
            name: "Lê Cường",
            img: "/img/top-chiefs/img_1.jpg",
            recipesCount: "03 năm",
            cuisine: "Bình Định",
        },
        {
            name: "Lê Cường",
            img: "/img/top-chiefs/img_2.jpg",
            recipesCount: "03 năm",
            cuisine: "Bình Định",
        },
    ]
    return (
        <div className="section chiefs">
            <h1 className="title">Our Top Chiefs</h1>
            <div className="top-chiefs-container">
                { chiefs.map((chief, index) => <ChiefCard key={index} chief={chief} />) }
            </div>
        </div>
    )
}