// It’s your birthday! You wrote a wishlist and now you’re trying to guess which gift is which before you open it.

// You will be given a wishlist (array), containing all possible items. Each item is in the format:

// {name: "toy car",
// size: "medium",
// clatters: "a bit",
// weight: "medium"}
// You also get a list of presents (array) which have the following format each:

// {size: "small",
// clatters: "no",
// weight: "light"}
// Your task is to return the names of all wishlisted presents that you might have gotten.

// Rules

// Possible values for size: “small”, “medium”, “large”

// Possible values for clatters: “no”, “a bit”, “yes”

// Possible values for weight: “light”, “medium”, “heavy”

// Don’t add any item more than once to the result

// The order of names in the output doesn’t matter

// It’s possible, that multiple items from your wish list have the same attribute values. If they match the attributes of one of the presents, add all of them.

// Example:

var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}, 
    {size: "small", clatters: "no", weight: "light"},
];

function guessGifts(wishlist, presents) {
    let newArr = [];
    presents.forEach(presEl =>{
        wishlist.forEach(wishEl => {
            if(wishEl.size === presents[i].size && wishEl.clatters === presents[i].clatters && wishEl.weight === presents[i].weight){
                newArr.push(wishEl.name); 
            }
        });
    })
    // for(let i = 0; i<presents.length; i++){
    //     // for(let x = 0; x<wishlist.length; x++){
  
    //     // }
    // }
    console.log(`these are your gifts prob ${newArr}`); 
}

//    wishlist.forEach(wishEl => {
//     let x= 0; 
//     let i = wishEl[]; 


guessGifts(wishlist, presents); // must return ["Toy Car", "Mini Puzzle"]



