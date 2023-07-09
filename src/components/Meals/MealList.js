import React from 'react';
import styles from './MealList.module.css'
import mealList from './dummy-meals'
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const MealList = () => {
    const listMeal = mealList.map(meal => <MealItem
        key={meal.id}
        id={meal.id}
        price={meal.price}
        name={meal.name}
        description={meal.description}
    />)
    return (
        <section className={styles.meals}>
            <Card>
                <ul>
                    {listMeal}
                </ul>
            </Card>
        </section>
    );
};

export default MealList;