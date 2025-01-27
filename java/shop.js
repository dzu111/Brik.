const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Upsize Chroma",
    price: 249,
    colors: [
      {
        code: "pink",
        img: "../img/upsize chroma/babypink.png",
      },
      {
        code: "maroon",
        img: "../img/upsize chroma/cherry.png",
      },
      {
        code: "green",
        img: "../img/upsize chroma/cloud.png",
      },
      {
        code: "purple",
        img: "../img/upsize chroma/grey.png",
      },
      {
        code: "darkblue",
        img: "../img/upsize chroma/hazel.png",
      },
      
    ],
  },
  {
    id: 2,
    title: "Chroma",
    price: 209,
    colors: [
      {
        code: "gray",
          img: "../img/chroma/gray.png",
      },
      {
        code: "cornsilk",
        img: "../img/chroma/cloud.png",
      },      {
        code: "chocolate",
        img: "../img/chroma/latte.png",
      },      {
        code: "darkblue",
        img: "../img/chroma/navy.png",
      },      {
        code: "maroon",
        img: "../img/chroma/sangria.png",
      },
    ],
  },
  {
    id: 3,
    title: "Petite Chroma",
    price: 229,
    colors: [
      {
        code: "black",
        img: "../img/petite chroma/black.png",
      },
      {
        code: "blue",
        img: "../img/petite chroma/blue.png",
      },
      {
        code: "lightpink",
        img: "../img/petite chroma/pink.png",
      },
      {
        code: "red",
        img: "../img/petite chroma/red.png",
      },
      {
        code: "chocolate",
        img: "../img/petite chroma/wood.png",
      },
    ],
  },
  {
    id: 4,
    title: "Posh tote",
    price: 249,
    colors: [
      {
        code: "chocolate",
        img: "../img/posh tote/golden.png",
      },
      {
        code: "lightblue",
        img: "../img/posh tote/blue.png",
      },
      {
        code: "#FFF2C9 ",
        img: "../img/posh tote/gold.png",
      },
      {
        code: "black",
        img: "../img/posh tote/black.png",
      },
      {
        code: "lightpink",
        img: "../img/posh tote/pink.png",
      },
    ],
  },
  
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
  
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

   
    choosenProduct = products[index];

  
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "RM" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
