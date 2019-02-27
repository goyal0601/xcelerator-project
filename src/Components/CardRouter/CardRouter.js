import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Card from '../Card/Card';
import Cards from '../Cards/Cards';

class CardRouter extends Component {
  
  render() {
    return(
      <BrowserRouter>
    <Switch> 
     <Route path={`/:cardId`}
      render={(routeProps)=>
      <Card  cardId={routeProps.match.params.cardId}/>
      }/>
    <Route exact={true} path="/" render={() => <Cards />}
     />
    </Switch>
    </BrowserRouter>
    )
  }
}



export default  CardRouter;