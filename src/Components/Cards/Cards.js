import React, { Component } from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';
import {Avatar,Icon,Tooltip} from 'antd';
import { connect } from 'react-redux'
import moment from 'moment';
import { incrementLike,incrementDislike,bookmarkChange } from '../../actions'

class Cards extends Component {
  
  render() {
    const {showCards,dispatch}=this.props;
    if(!showCards) return null;
    return(
      <div className='container'>
      {showCards.map((dat,index)=>
      <div key={index}>
      <div className='card-box' key={index}>
        <div className='card-box-left'>
          <Avatar shape='square' icon="user" src={dat.src} size={180}/>
        </div>
        <div className='card-box-right'>
        <div className='flex'>
          <Link to={`/${dat.id}`}><div className='title' onClick={()=>this.setState({ showCard : dat.id })}>{dat.title}</div></Link>
          <Tooltip placement="topLeft" 
            title={dat.isBookmarked ? 'Remove candidate from bookmark':'Bookmark this candidate'}>
          <div style={{marginLeft:'10px',cursor:'pointer'}} 
            onClick={()=>dispatch(bookmarkChange({id:dat.id}))}>
            <Icon type="book" style={{ fontSize: '18px', color: dat.isBookmarked ?'#024d99':'#999999' }}/>
          </div>
          </Tooltip>
          
          </div>
          <div className='flex'>
          <div style={{marginRight:'10px'}}>Created By</div>
          <div style={{color:'black',margin:'0 5px 5px 0'}}>{dat.storyBy}</div>
          <div>- {moment.unix(dat.createdOn).fromNow()}</div>
          </div>
          <div>{dat.para.length>360 ? dat.para.substr(0, 360).concat('.......') : dat.para}</div>
          <div className='flex like-dislike'>
          <Icon type="like" onClick={()=>dispatch(incrementLike({id:dat.id}))} style={{ fontSize: '24px', color: 'green' }}/>
          <div className='like-dislike-count'>{dat.like}</div>
          <Icon type="dislike" onClick={()=>dispatch(incrementDislike({id:dat.id}))} style={{ fontSize: '24px', color: 'red' }}/>
          <div className='like-dislike-count'>{dat.dislike}</div>
          </div>
        </div>
      </div>
      </div>)}
    </div>
    )
  }
}
const mapStateToProps = state => ({
  showCards: state.cardData
})


export default  connect(mapStateToProps)(Cards);