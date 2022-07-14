import CustomImage from "./CustomImage"

import pro1 from '../assets/pro1.jpg'

export default function MenuCard({recipe}){
    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} pt="65%"/>
            <div className="recipe-card-info">
                <img className="auther-img" src={pro1} alt=""/>
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                {/* <a className="view-btn" href="#!">VIEW RECIPE</a> */}
            </div>
        </div>
    )
}