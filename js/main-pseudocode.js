// PLANETCO Game

// Here's a concept for the way the code may need to flow.
// Please modify/expand in any way necessary


// Level 1 screen //////////////////////////////
// 
// Display level 1 screen with six choices of items for user to purchase.
// Display a purchase button.
//    **Set level 1 total price variable to 0.
//    **Set user account balance variable to 500.
// 
// User selects an item. 
//    **OnClick - Add item to cart. 
//    **Add each item selected by the user to an array
//    **Display a list to the right that displays the item name and price.
//    **Add item price to total price variable.
//
// User clicks purchase button to finish selection of items in cart.
//    **OnClick send user to level 1 completed page
//////////////////////////////////////////////////////


// Level 1 completed page /////////////////////////
//    **If statement - is total price variable over value in user account?
//
// If total price is over account value, display reject message
//    with button for user to start of page to try again.
//    **OnClick send user to level 1 screen. Restart game for user.
// Else, if total price of items does not exceed user account display Congratulations message
//    with button for user to move to level 2 info page.
//    **Subtract total price of items from user balance
//    **OnClick send user to level 2 info page
////////////////////////////////////////////


// Level 2 Info Page //////////////////////////
//
// Display Level 2 info page with button for user to move to next page.
//    **OnClick send user to level 2 screen
//////////////////////////////////////////


// Level 2 screen ////////////////////////////
//
// Display level 2 screen with nine choices of items for user to purchase.
// Display a purchase button.
//    **Set level 2 total price variable to 0.
//    **Add 500 to user balance variable.
// 
// User selects an item. 
//    **OnClick - Add item to cart. 
//    **Display a list to the right that displays the item name and price.
//    **Add each item selected by the user to an array
//    **Add item price to total price variable.
//
// User clicks purchase button to finish selection of items in cart.
//    **OnClick send user to level 2 completed page
///////////////////////////////////////////////////////////


// Level 2 completed page /////////////////////////
//    **If statement - is total price variable over balance in user account?
//
// If total price is over user balance, display reject message
//    with button for user to start of page to try again.
//    **OnClick send user to level 1 info screen.
// Else if total price of items does not exceed user balance display Congratulations message
//    with button for user to move to level 3 info page.
//    **Subtract total price of items from user balance
//    **OnClick send user to level 3 info page
//////////////////////////////////////////////////


// Level 3 code - repeat level 2
////////////////////////////////////////////


// I didn't take into account the property that says each item is good or bad, or if there
//          is a requirement that certain items must be purchased, such as a water item.
// This functionality needs to be added to the code.

