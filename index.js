// declare customerName
let customerName = "bob";
// modifying customerName
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

// setting bestCustomer
let bestCustomer;
function setBestCustomer() {
    bestCustomer = "not bob";
}

// overwrite
function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
}

// Unsuccessful reassignment
const changeLeastFavoriteCustomer = "initial"
function reassignChangeLeastFavoriteCustomer(){
    changeLeastFavoriteCustomer = "changed";
}
