import React from 'react';
import Header from '../header';
import Carousel from '../carousel';
import FavoritableStamp from '../favoritableStamp';
import Stamp from '../stamp';
import FavoriteStamp from '../favorite-stamp';
import Footer from '../footer';
import JSCarousel from '../carouselJS';
import Paginator from '../paginator';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.favoriteChanged = this.favoriteChanged.bind(this);
    const defaultFav = this.props.data.favList;
    this.state = {favorites: defaultFav};
    this.unfavorite = this.unfavorite.bind(this);
  }


  favoriteChanged(item) {
    const fav = this.state.favorites;
    if (fav.indexOf(item) === -1) {
      if (fav.length < 3) {
        fav.push(item);
      } else {
        fav.splice(0, 1);
        fav.push(item);
      }
      this.setState({favorites: fav});
  }
}
 unfavorite(name) {
   const fav = this.state.favorites;
   const pos = fav.indexOf(name);
   fav.splice(pos, 1);
   this.setState({favorites: fav});
 }

  render() {
    const data = this.props.data;
    const imageList = data.imageList;
    const navList = data.navList;
    let favoriteStamp;
    let carousel = <Carousel imageList={data.carouselImages} />;
    if (typeof document !== 'undefined') {
      carousel = <JSCarousel imageSrcList={data.carouselImages} labelList={data.carouselLabels} />;
      favoriteStamp = (<div className="col-6" >
        <FavoriteStamp favoriteItems={this.state.favorites} unfavorite={this.unfavorite} />
      </div>);
    }

  return (
    <div >
      <Header logo={data.logo} navList={navList} />
      <div className="grid">
        <h2 className="page-heading">{data.heading}</h2>
        {carousel}
        {/*<div className="row">
          {imageList.map((item, index) => {
            if (typeof document !== 'undefined') {
              return (<FavoritableStamp favoriteChanged={this.favoriteChanged} key={index} imageSrc={item.image} title={item.title} />);
            }
              return (<Stamp key={index} imageSrc={item.image} title={item.title} />);
          }
        )}
          {favoriteStamp}
        </div>*/}
        <div className="row">
          <Paginator item="Stamp" itemList={data.stampList} pageSize={16} />
        </div>
        <div className="row">
          {data.footer.map((item, index) => <div key={index} className="col-3"><Footer label={item.label} items={item.items} /></div>)}
        </div>
      </div>
      <div className="page-footer">
        <p className="copyright">{data.copyright}</p>
      </div>
    </div>);
}
}

Page.propTypes = {
  data: React.PropTypes.object.isRequired
};
export default Page;
