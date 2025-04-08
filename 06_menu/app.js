const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "menu-1.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "menu-2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "menu-3.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "menu-4.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "menu-5.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "menu-6.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "menu-7.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "menu-8.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "menu-9.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "menu-10.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// console.log("menu list");

const menuContainer = document.querySelector('.section-center')
const btnContainer = document.querySelector('.btn-container')

window.addEventListener('DOMContentLoaded', function(){
    const getMenu = menu.map(menuItem).join('')
    menuContainer.innerHTML = getMenu      
})

function menuItem(item){
  return `<article class="menu-item">
            <img src="../../img/${item.img}" alt=${item.category} class="photo" />
            <div class="item-info">
                <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
                </header>
                <p class="item-text">
                  ${item.desc}
                </p>
            </div>
            </article>`
}

const categoryList = menu.map(function(cat){
  return cat.category
})
// console.log("category List : ",categoryList);

// Method 1: Using Set and Spread Operator
/*
const filterCategory = [...new Set(categoryList)]
console.log("filter out uinque category using Method 1 : ", filterCategory);
*/

// Method 2: Using Array.filter() Method
/*
const filterCategory = categoryList.filter(function(value, index, self){
  // console.log(`value : ${value} , index : ${index} , self : ${self}`);
  return self.indexOf(value) === index
})
console.log("filter out uinque category using Method 2 : ", filterCategory);
*/

// Method 3: Using Reduce and Includes
const filterCategory = categoryList.reduce(function(accumulator, currentvalue){
  return accumulator.includes(currentvalue) ? accumulator : [...accumulator, currentvalue]
},['all'])
// console.log("filter out uinque category using Method 3 : ", filterCategory);

/*
// check the filter to list out lunch catergory
const lunchMenu = menu.filter(function(item){
  return item.category === 'lunch'
})
console.log("filter out lunch list : ",lunchMenu);
*/

const btns = filterCategory.map(function(btn){
  return `<button type="button" class="filter-btn" data-id=${btn}>${btn}</button>`
}).join('')
btnContainer.innerHTML = btns

const btnEvent = document.querySelectorAll('.filter-btn')
// console.log("get all btns : ",btnEvent);

btnEvent.forEach(function(item){
  item.addEventListener('click', function(e){
      // console.log(e.currentTarget.dataset.id);

      const categorybtn = e.currentTarget.dataset.id
      const categoryMenu = menu.filter(function(item){
        return item.category === categorybtn
      })

      // console.log("filter out category Menu :", categoryMenu);

      if(categorybtn === "all"){
        // console.log("Show all menu List");
        const getMenu = menu.map(menuItem).join('')
        menuContainer.innerHTML = getMenu
      }else{
        // console.log("the filter a=category is : ", categoryMenu);
        const filterMenuList = categoryMenu.map(menuItem).join('')
        menuContainer.innerHTML = filterMenuList
      }
      
  })
})