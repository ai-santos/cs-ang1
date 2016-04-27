(function(){
var app = angular.module('store', [ ]);

app.controller('StoreController', function(){
    this.products = gems;
  });

app.directive("productTabs", function(){
  return {
    controller: function() {
      this.tab = 1;

      this.isSet = function(checkTab) {
        return this.tab === checkTab;
      };

      this.setTab = function(selectedTab){
        this.tab = selectedTab;
      };
    }, 
    controllerAs: "tab"
  };
});

var gems = [
{
    name: 'Dodecahedron',
    price: 2,
    description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    images: [
      {
        full: 'dodecahedron-full.jpg',
        thumbnail: 'gem-01.gif'
      },
      {
        full: 'pentagonal-gem.jpg',
        thumbnail: 'pentagonal-gem.jpg'
      }
    ],
    reviews: [
      {
        stars: 5,
        body: "Makes me feel like royalty, truly beautiful.",
        author: "ai@leen.com"
      },
      {
        stars: 1,
        body: "Does not look like the picture, blech.",
        author: "lee@hates.com"
      }
    ],
    canPurchase: true
},
{
    name: "Pentagonal Gem",
    price: 5.95,
    description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    images: [
      {
        full: 'dodecahedron-full.jpg',
        thumbnail: 'gem-01.gif'
      },
      {
        full: 'dodecahedron-full-2.jpg',
        thumbnail: 'dodecahedron-thumb-2.gif'
      }
      ],
    canPurchase: true
}

];
    

})();