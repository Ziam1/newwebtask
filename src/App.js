import './App.css';
import React from 'react';
import './components/colors.js'

class App  extends React.Component{

state = {
  products: [
    {
      "_id": "1",
      "title": "Nike Shoes",
      "src": [
          "https://media.istockphoto.com/photos/digital-cloud-computing-of-cyber-security-digital-data-network-picture-id1327189151",
          "https://images.unsplash.com/photo-1642010654640-e7fe3c436423?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
          "https://images.unsplash.com/photo-1642010654640-e7fe3c436423?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
          "https://images.unsplash.com/photo-1642010654640-e7fe3c436423?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        ],
      "description": "Comfortable shoes for you",
      "content": "These shoes are specially manufactured for your comfort.",
      "price": 23,
      "colorsType":["red","black","crimson","teal"],
      "count": 1
    }
  ],
  index: 0
};

myRef = React.createRef();

handleTab = index =>{
  this.setState({index: index})
  const iamges = this.myRef.current.children;
  for(let i=0; i<iamges.length; i++){
    iamges[i].className = iamges[i].className.replace("active", "");
  }
  iamges[index].className = "active";
};

componentDidMount(){
  const {index} = this.state;
  this.myRef.current.children[index].className = "active";
}

  render(){
    const {products, index} = this.state;
    console.log(products)
    return(
      <div className="app">
        {
          products.map(item=>(
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt=""/>
              </div>
              <div className= "box">
                <div className= "row">
                  <h2>{item.title}</h2>
                  <span>${item.price}</span>
                </div>

                <colors colorsType={item.colors} />
                
                  <p>{item.description}</p>
                  <p>{item.content}</p>

                  <div className="thumb" ref={this.myRef}>
                    {
                      item.src.map((img, index)=>(
                        <img src={img} alt="" key={index} 
                        onClick={() => this.handleTab(index)}
                        />
                      ))
                    }
                  </div>
                  <button className ="cart"> Add to cart</button>

              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default App;
