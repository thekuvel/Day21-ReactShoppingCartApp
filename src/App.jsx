/* eslint-disable react/prop-types */
import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

// Data for products
let data = [
  {
    "image": "https://m.media-amazon.com/images/I/71jd5ic+C0L._AC_UF1000,1000_QL80_.jpg",
    "name": "Feather Pen",
    "rating": 3,
    "mrp": 5,
    "price": 19,
    "sale": true,
    "id": "1"
  },
  {
    "image": "https://m.media-amazon.com/images/I/91D-Wk4QckL._AC_UF894,1000_QL80_.jpg",
    "name": "Desk Mat",
    "rating": 4,
    "mrp": 77,
    "price": 1,
    "sale": true,
    "id": "2"
  },
  {
    "image": "https://images.jdmagicbox.com/quickquotes/images_main/blackberry-8220-pearl-flip-phone-with-primary-camera-2mp-silver-184491616-klce2.jpg",
    "name": "Blackberry 8220 pearl",
    "rating": 5,
    "mrp": 73,
    "price": 45,
    "sale": false,
    "id": "3"
  },
  {
    "image": "https://www-img1.marinabooks.com/static/img/thumbnail/karudan/7_3610.jpg",
    "name": "Story Book-Mystry",
    "rating": 5,
    "mrp": 32,
    "price": 88,
    "sale": false,
    "id": "4"
  },
  {
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSanYlK5OIuYpjpI00V1JHncMKLve2z6nSoQE9oLOFTEZDt_gj0BzZ-QsvsHaFbZFYwkcw&usqp=CAU",
    "name": "Canvas Shoe",
    "rating": 3,
    "mrp": 66,
    "price": 25,
    "sale": false,
    "id": "5"
  },
  {
    "image": "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw7646cf71/images/Titan/Catalog/90140QM03_1.jpg?sw=800&sh=800",
    "name": "Titan",
    "rating": 3,
    "mrp": 75,
    "price": 50,
    "sale": false,
    "id": "6"
  },
  {
    "image": "https://media.wired.com/photos/64daad6b4a854832b16fd3bc/191:100/w_1280,c_limit/How-to-Choose-a-Laptop-August-2023-Gear.jpg",
    "name": "Linux Laptop",
    "rating": 5,
    "mrp": 62,
    "price": 63,
    "sale": true,
    "id": "7"
  },
  {
    "image": "https://pae-web.presonusmusic.com/uploads/news/media/images/presonus-px1-environmental.png",
    "name": "Mic - Condensor Microphone",
    "rating": 5,
    "mrp": 85,
    "price": 70,
    "sale": false,
    "id": "8"
  }
]

function App() {

  let [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Container cartCount={cartCount} setCartCount={setCartCount}/>
    </>
  )
}

//Main Container to hold product Cards
function Container({cartCount, setCartCount}){
  // console.log("Container", buyButton);
  return (
    <>
    <h1>Shopping Cart</h1>
    <div className='cart-count-container'>
      <div className='cart-count'>
      Cart Count: {cartCount}
      </div>
    </div>
    <div className='container'>
      {data.map((val, index)=>(
        <Card details={val} key={index} cartCount={cartCount} setCartCount={setCartCount}/>
      ))}
    </div>
    </>
  )
}

//Creating cards
function Card({details, setCartCount, cartCount}){
  // console.log("Card", buyButton);
  let [buyButton, setBuyButton] = useState(true);

  function handleBuy() {
    setBuyButton(!buyButton);
    setCartCount(cartCount + 1);
  }

  function handleRemove() {
    setBuyButton(!buyButton);
    setCartCount(cartCount-1);
  }

  function handleRating(rating){// To display stars dynamically
    let stars = ""
    for(let i=0;i<rating;i++){
      stars = stars + "⭐";
    }
    return stars
  }

  return (
    <div className="card">
      
      {/* Conditionally rendering Sale Tag */}
      <div className={details.sale ? ('sale-tag') : ("no-sale")}> 
        <p>Sale</p>
      </div>

      <img src={details.image} alt="Product Image" />

      <p className="title">{details.name}</p>
      <p className="rating">{handleRating(details.rating)}</p>
      <p className="price">${details.price}</p>

      {/* Condetionally rendering button */}
      <div className='btn-container'>
        {buyButton ? (<button className='btn' onClick={handleBuy}>Buy</button>) : (<button className='btn' onClick={handleRemove}>Remove</button>) }
      </div>

    </div>
  )
}

export default App
