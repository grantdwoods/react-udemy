import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = props => {
    const burgerIngredients = Object
        .keys(props.ingredients)
            .map((ingredientKey)=>{
                return ([...Array(props.ingredients[ingredientKey])]
                    .map(( _ , i)=>{
                        return <BurgerIngredient key={ingredientKey + i} type={ingredientKey}/>
                    })
                )
            }
        );

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {burgerIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    );
};

export default Burger;