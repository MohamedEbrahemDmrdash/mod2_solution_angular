(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('tobuyctr', Tobuyctr)
.controller('AlreadyBoughtctr', AlreadyBoughtctr)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

Tobuyctr.$inject = ['ShoppingListCheckOffService'];
function Tobuyctr(ShoppingListCheckOffService) {
  var ToBuyController = this;

  ToBuyController.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }

  ToBuyController.items = ShoppingListCheckOffService.getTobuyItems();

}


AlreadyBoughtctr.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtctr(ShoppingListCheckOffService) {
  var AlreadyBoughtController = this;

  AlreadyBoughtController.items = ShoppingListCheckOffService.getboughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var tobuy = [
      {
        name: "Cookies",
        quantity: "400"
      },
      {
        name: "Donuts",
        quantity: "200"
      },
      {
        name: "Milk",
        quantity: "300"
      },
      {
        name: "Meat",
        quantity: "500"
      },
      {
        name: "Bread",
        quantity: "100"
      }
    ];
  var bought = [];


  service.buyItem = function (itemIndex) {
    bought.push(tobuy[itemIndex]);
    tobuy.splice(itemIndex, 1);
  };

  service.getTobuyItems = function () {
    return tobuy;
  };
  service.getboughtItems = function () {
    return bought;
  };
}

})();
