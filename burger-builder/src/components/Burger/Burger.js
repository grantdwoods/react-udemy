import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = props => {
    let burgerIngredients = (
        Object
            .keys(props.ingredients)
                .map((ingredientKey)=>{
                    return ([...Array(props.ingredients[ingredientKey])]
                        .map(( _ , i)=>{
                            return <BurgerIngredient key={ingredientKey + i} type={ingredientKey}/>
                        })
                    )
                }
            )
            .reduce((arr, el) => {
                return arr.concat(el);
            }, [])
    )
    console.log(burgerIngredients);
    
    if(burgerIngredients.length === 0){
        burgerIngredients = <div>No ingredients</div>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {burgerIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    );
};

export default Burger;