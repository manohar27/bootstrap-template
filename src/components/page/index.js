import React from 'react';
import Header from '../header';
import Carousel from '../carousel';
import Stamp from '../stamp';
import FavoriteStamp from '../favorite-stamp';
import Footer from '../footer';
const imageList = [{title:'Fruits', image:'fruits.jpg'},{title:'Dairy', image: 'dairy.jpg'},{title:'Cosmetics', image:'cosmetics.jpg'},
{title:'Pasta', image:'pasta.jpg'},{title:'Dairy', image: 'dairy.jpg'},{title:'Dairy', image: 'dairy.jpg'}];

const navList = ['Home','Products','About', 'Contact'];
class Page extends React.Component {
  constructor(props,context){
    super(props,context);
    this.state ={favorites:['Dairy', 'Cosmetics']};
  }
  favoriteChanged(item){

    let fav = this.state.favorites;
    if(fav.indexOf(item)==-1){
      if(fav.length<3){
        fav.push(item);
      }
      else {
        fav.splice(0,1);
        fav.push(item);
      }
      this.setState({favorites:fav});
  }
}
  render(){
  return(
    <div >
    <Header logo="Boombasket" navList={navList}/>
    <Carousel imageList={imageList} />
    <div className="grid" >
    <div className="row">
      {imageList.map((item,index) => <Stamp favoriteChanged={this.favoriteChanged.bind(this)} key={index} image={item['image']} title={item['title']} /> )}
      <div className="col-6" >
        <FavoriteStamp items={this.state.favorites} />
      </div>
    </div>
    <div className="row">
      <div className="col-4" ><Footer label="Quick Links"/></div>
      <div className="col-4" ><Footer label="More Links"/></div>
    </div>
    </div>
    <div className="page-footer" >
      <p className="copyright"> Copyright @jz21 </p>
    </div>
    </div>);
}
}


export default Page;
