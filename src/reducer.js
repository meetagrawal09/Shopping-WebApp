//this is all the data goes to
//empty basket
export const initialState={
    basket:[
],

    user:null,
};

//it gives the total of the basket

// export const getBasketTotal = ( basket ) => 
// basket?.reduce({amount,item} => item.price +amount , 0);

// we put in a switch case
// we switch on an action type
const reducer = (state,action) => {
    console.log(action);

    switch (action.type){
        case 'ADD_TO_BASKET':
            //logic for adding item to basket
            //when add to basket comes in we return what the new data layer looks like
            //we return the present state
            //to the basket we put the present things to it and the added item
            return {
                ...state,
                basket: [...state.basket,action.item]
            }
        case 'REMOVE_FROM_BASKET':
            //logic for remove from basket
            //we search in the basket
            //first we copied the basket
            let newBasket=[...state.basket];

            //we search in the basket
            const index = state.basket.findIndex((basketItem)=> basketItem.id===action.id);

            //if found then we have an index greater than equal to zero else we give a warning of does not exists
            if(index >= 0){
                //Item exists in the basket and needs to be removed
                //we splice at the index by 1
                newBasket.splice(index,1);
            }else{
                //just to warn the programmer that the item does not exist in the basket
                console.warn('Cant remove product')
            }
            //we send back the basket that is after splice 
            return {...state,
                    basket: newBasket,};
        default:
            return state;
    }
}

export default reducer;