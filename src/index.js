import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import ReactDOMC from 'react-dom/client'
  // const date1 = new Date();

  // // const d = date1.getUTCDate()+"/"+date1.getUTCMonth()+"/"+date1.getUTCFullYear();
  
  //   const d = date1.toLocaleDateString();
  // // const t = date1.getHours()+":"+date1.getMinutes()+":"+date1.getSeconds();
  // const t = date1.toLocaleTimeString();
  const img1 = (v)=>{
  return  "https://picsum.photos/200/30"+v;
  } 
  const img2 = "https://picsum.photos/250/300";
  const img3 = "https://picsum.photos/200/400";
   



ReactDOM.render(
  <>
 <h1 className="heading" contentEditable="false">Photo Gallary</h1>
 <div className='img_div'>
 <a href='https://www.google.com'>

 <img src={img1(3)} alt='adi'/>
 </a>
 <img src={img2} alt='tya'/>
 <img src={img1(1)} alt='sha' />
 <img src={img1(6)} alt='sha' />
 <img src={img1(8)} alt='sha' />
 <img src={img1(0)} alt='sha' />
 </div>
 <div className='img_div'>
 <a href='https://www.google.com'>

 <img src={img1(9)} alt='adi'/>
 </a>
 <img src={img3} alt='tya'/>
 <img src={img1(2)} alt='sha' />
 <img src={img1(7)} alt='sha' />
 <img src={img1(4)} alt='sha' />
 <img src={img1(5)} alt='sha' />
 </div>
</>
  ,document.getElementById('root')
);