import './App.css';
import React,{useState} from 'react'
import logo from "./images/logo.svg"
import Sdata from "./Sdata"

const App = () => {
  const [items, setItems] = useState(Sdata);
  const filterItem = (categoryItem) => {
   
    const updatedItem = Sdata.filter((curElem2) => {
      return curElem2.category === categoryItem;
    });
    setItems(updatedItem);
  };
  
  return (
    <>
      <div className='section'>
        <div className='main-section'>
          <div className='main-item'>
            <div className='header'>
              <div className='logo'>
                <img src={logo} alt="" />
                <h1>GoodBooks</h1>
              </div>
              <p>Checkout my favourite books. Select a genre to get started!</p>
              <div className='buttons'>
                <button  onClick={() => filterItem("java")}>JavaScript</button>
                <button onClick={() => filterItem("fiction")}>fiction</button>
                <button  onClick={() => filterItem("business")}>Business</button>
                <button  onClick={() => filterItem("travel")}>Travel</button>
              </div>
              <div className='books'>
                {items.slice(0,4).map((item,index)=>{
                  const {name,img,rate}=item;
                  return(
                    <div className='box' key={index}>
                      <div className='imgBox'>
                        <img src={img} alt=""/>
                      </div>
                      <div className='boxDesc'>
                        <h2>{name}</h2>
                        <h5>{rate}</h5>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App