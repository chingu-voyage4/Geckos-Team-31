import React from 'react';
import FilterMenu from './FilterMenu';

class Meals extends React.Component{
    constructor(){
        super();
        this.state = {
            meals: []
        };
    }

    filterMeals(e){
        e.preventDefault();
        //change meals state here
    }

    render(){
        const {meals} = this.state;
        return(
            <div id="meals-page">
                <FilterMenu filterMeals={this.filterMeals.bind(this)}/>
                {meals.map(meal=><Meal info={meal}/>)}
            </div>
        );
    }
}

export default Meals;