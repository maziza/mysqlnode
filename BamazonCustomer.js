var mysql = require("mysql");
var inquirer = require("inquirer");
var prompt = require("prompt");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", 
    password: "root", 
    database: "Bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("What would you like to purchase?");
    console.log("----")
    start();
})

var products = function() {
  connection.query("SELECT * FROM Products",
    function(err, res) {
      var stock = new table ({
      	head: ["ItemID", "Product", "Department", "Price", "Quantity"],
      });

var buy = function() {
    inquirer.prompt([{
        name: "buy",
        type: "input",
        message: "Which product would you like to buy?",
    }, 

//
    	{
        name: "quantity",
        type: "input",
        message: "How many 'product.Product' you like to buy?",
        }
    }

}]).then(function(select) {
			idchosen = select.Buy;
			quantity = select.quantity;
			connection.query("SELECT Quantity, Product, Price FROM Products WHERE ItemID = "+ idchosen,
				function(err, res) {
					var newQuantity = res[0].quantity - Stockquantity;
						if(res[0].StockQuantity < quantity){
						console.log("Not enough products to purchase");
						} else {
							
						}
				});

}