import React from 'react';
import Header from '../header';
import Carousel from '../carousel';
import Stamp from '../stamp';
import FavoriteStamp from '../favorite-stamp';
import Footer from '../footer';

class Page extends React.Component {
  constructor(props){
    super(props);
    const defaultFav = this.props.data.favList;
    this.state ={favorites:defaultFav};
  }
  favoriteChanged(item){
    let fav = this.state.favorites;
    if(fav.indexOf(item)==-1){
      if(fav.length<3){
        fav.push(item);
      } else {
        fav.splice(0,1);
        fav.push(item);
      }
      this.setState({favorites:fav});
  }
}
  render(){
    let data = this.props.data;
    const imageList = data.imageList;
    const navList = data.navList;
  return(
    <div >
    <Header logo={data.logo} navList={navList}/>
    <Carousel imageList={data.carouselImages} />
    <div className="grid">
    <div className="row">
      {imageList.map((item,index) => <Stamp favoriteChanged={this.favoriteChanged.bind(this)} key={index} image={item['image']} title={item['title']} /> )}
      <div className="col-6" >
        <FavoriteStamp items={this.state.favorites} />
      </div>
    </div>
    <div className="row">
      {data.footer.map((item,index) => <div key={index} className="col-4"><Footer label={item.label} items={item.items}/></div>)}
    </div>
    </div>
    <div className="page-footer">
      <p className="copyright">data.copyright</p>
    </div>
    </div>);
}
}


export default Page;
