<<<<<<< HEAD
import React from 'react';
=======
import React, {useEffect} from 'react';
>>>>>>> d80b1caef689541f55515179aa086b75705f788a
import CollectionPageContainer from '../collection/collection.container';
import {connect} from 'react-redux';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container.jsx';
import {Route} from 'react-router-dom';
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';



class ShopPage extends React.Component{
  
    
  componentDidMount(){
    
    const { fetchCollectionsStartAsync} = this.props;
    fetchCollectionsStartAsync();
  }
    render(){
    const {match} = this.props;
   return(
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
        </div>
  );
    
  }
   
}



const mapDispatchToProps= dispatch=>({
  fetchCollectionsStartAsync:()=>dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage);