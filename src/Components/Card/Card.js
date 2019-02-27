import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import { connect } from 'react-redux';
import {Avatar,Icon,Tooltip} from 'antd';
import { incrementLike,incrementDislike,bookmarkChange } from '../../actions'
import moment from 'moment';
class Card extends Component {
  render() {
    const { card,dispatch }=this.props;
    if(!card)return null;
    const {id, src, storyBy, isBookmarked, title, createdOn, like, dislike, para} = card;
    return (
      <div className='container'>
        <Link to={'/'}>
          <div style={{color:'black'}}><Icon type="arrow-left" />Go Back</div>
        </Link>
        <div className='card'>
        <div className='flex'>
          <div className='card-box-left'>
            <Avatar shape='square' icon="user" src={src} size={180}/>
          </div>
          <div className='card-box-right'>
          <div className='flex'>
            <div className='title'>{title}</div>
            <Tooltip placement="topLeft" 
            title={isBookmarked ? 'Remove candidate from bookmark':'Bookmark this candidate'}>
            <div style={{marginLeft:'10px',cursor:'pointer'}} 
              onClick={()=>dispatch(bookmarkChange({id}))}>
            <Icon type="book" style={{ fontSize: '18px', color: isBookmarked ?'#024d99':'#999999' }}/>
          </div>
          </Tooltip>
          </div>
            <div className='flex'>
            <div style={{marginRight:'10px'}}>Created By</div>
            <div style={{color:'black',margin:'0 5px 5px 0'}}>{storyBy}</div>
            <div>- {moment.unix(createdOn).fromNow()}</div>
            </div>
            <div className='flex like-dislike'>
            <Icon type="like" 
              onClick={()=>dispatch(incrementLike({id}))} 
              style={{ fontSize: '24px', color: 'green' }}/>
            <div className='like-dislike-count'>{like}</div>
            <Icon type="dislike" 
              onClick={()=>dispatch(incrementDislike({id}))} 
              style={{ fontSize: '24px', color: 'red' }}/>
            <div className='like-dislike-count'>{dislike}</div>
            </div>    
          </div>  
          </div>
          <div style={{marginTop:'20px'}}>{para}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state,newProps) => ({
  card: state.cardData.find(data=>data.id == newProps.cardId)
})

export default connect(mapStateToProps)(Card);