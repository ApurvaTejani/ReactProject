import React from  "react";
import ReactDOM from "react-dom/client";
import './index.css';
import pizzaData from "./data";



function App(){
  const pizzalen = pizzaData.length;
 return(<div className="container">

 <Header/>
 <Menu plen={pizzalen}/>
 <Footer plen={pizzalen}/>
 </div>);

}
function Header(){
return (<header className='header'><h1>FAST REACT PIZZA CO</h1></header>);
} 
function Menu({plen}) {

    return(
    plen>0?(
    <ul className="menu">
    <h2>OUR MENU</h2>
    <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
    <ul className="pizzas">
  {pizzaData.map((pizza)=>(
    <Pizza pizzaObj={pizza} key={pizza.name}/>
  ))}
</ul>
</ul>
    ):(<h2>Menu is not loaded. Please visit after some time</h2>)
    );
}
function Pizza({pizzaObj}){
return (
<li className={`pizza ${pizzaObj.soldOut?"sold-out":""}`}>
<img src={pizzaObj.photoName} alt={pizzaObj.name} className="pizza img"/>
<li>
 <h3 >{pizzaObj.name}</h3>
<p >{pizzaObj.ingredients}</p>
<span>{(pizzaObj.soldOut)?"SOLD OUT":pizzaObj.price}</span>
</li>
</li>
);

 }

 function Footer({plen}){
  const hours = new Date().getHours();
  const isOpen= ((hours>=12)&&(hours<=22)) ?"We're open from 12:00 to 22:00. Come visit us or order online":"Sorry we are closed!!Please visit us from 12:00 to 22:00";
    if(plen<=0)
       return(
      <Header/>
      // <p>Sorry!!! We are in maintanance</p>
       )
    return (<footer className="footer" >
    <div className="Order">
    {isOpen}
   <button className="btn">Order</button>
   </div>
   
    </footer>
    )
 }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
);


