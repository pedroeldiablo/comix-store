import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
class ShopPage extends Component {
    unSubscribeFromSnapShot = null;

    componentDidMount() {
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            console.log(snapshot);
            convertCollectionsSnapshotToMap(snapshot);
        })

    }

    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
            </div>
        )

    }   
}

  
  export default ShopPage;
