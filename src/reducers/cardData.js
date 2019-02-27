const data = [
  {
      id:1,
      title:'Ankit Chhabra',
      para:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis massa id risus laoreet, molestie placerat tortor pulvinar. Pellentesque ultrices, tortor et varius auctor, ex odio dignissim leo, a accumsan elit ex vel neque. Aliquam non risus mauris. Suspendisse vehicula enim sed enim tempor, id viverra mi aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris iaculis eleifend egestas. Mauris a tincidunt ante. Nullam posuere, elit ut varius dictum, nulla metus ornare sapien, sed interdum tortor ex sit amet urna. Pellentesque in tincidunt est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam lobortis ipsum vel orci faucibus pharetra. Quisque malesuada nisi sagittis pharetra vehicula. Etiam accumsan eu diam a iaculis. Vestibulum venenatis, enim at accumsan pulvinar, mi arcu aliquet nibh, ac vestibulum odio lorem in massa. Vivamus tempor odio in eros venenatis elementum. Phasellus interdum sem in lorem gravida euismod.Donec sit amet est mauris. Duis venenatis, ligula et finibus commodo, tellus orci elementum turpis, sit amet tincidunt nisl tortor commodo ante. Nam a tortor dolor. Suspendisse quis tellus vitae metus luctus tincidunt in in tellus. Nam fringilla tortor eget erat sollicitudin fermentum. Suspendisse interdum, magna sit amet imperdiet efficitur, nisi quam aliquet lacus, a consequat mauris orci vitae justo. Fusce a dui nibh. Sed in eros pellentesque, ultrices sem nec, placerat tortor. Sed eget fringilla nunc, sagittis cursus ex. Ut mattis ipsum a velit facilisis, eget tristique nibh porttitor. Curabitur ornare pulvinar est eu lobortis. Nullam ut facilisis lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur eu rutrum est. In interdum sapien vel pharetra laoreet. Integer blandit faucibus hendrerit.',
      src:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      storyBy:'Ashutosh',
      isBookmarked:false,
      createdOn:1548324518,
      like:2,
      dislike:3
  },
  {
      id:2,
      title:'Ankita Konkana',
      para:'Proin mattis venenatis erat, semper luctus nulla ultrices et. Nullam a augue ultricies, tristique leo vel, placerat nibh. Duis ut accumsan nulla, vitae posuere tortor. Quisque vel dolor sem. Etiam est mi, eleifend quis lorem non, ultricies rutrum nulla. Cras ultrices venenatis risus, sit amet aliquam lectus facilisis vel. Nunc sit amet tempus dolor. Sed eu velit sed massa placerat pharetra in in elit. Phasellus accumsan, diam nec condimentum mattis, nibh mi sagittis diam, in lacinia massa metus malesuada metus.Suspendisse facilisis sit amet lectus sodales tempus. Donec consequat magna quis ex hendrerit, sit amet sagittis neque lacinia. Pellentesque quis tortor mi. Praesent pharetra purus vitae mi pretium cursus. Sed et lobortis neque. Fusce at varius neque, et fermentum lacus. Maecenas non diam sodales, laoreet leo eget, eleifend lorem.',
      src:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      storyBy:'Goyal',
      createdOn:1548151718,
      isBookmarked:true,
      like:2,
      dislike:3
  }
]

const cardData = (state = data, action) => {
  switch (action.type) {
    case 'INCREMENT_LIKE':
      return state.map(data =>
        (data.id === action.id)
          ? {...data, like: data.like+1}
          : data
      )
      case 'INCREMENT_DISLIKE':
      return state.map(data =>
        (data.id === action.id)
          ? {...data, dislike: data.dislike+1}
          : data
      )
      case 'BOOKMARK_CHANGE':
      return state.map(data =>
        (data.id === action.id)
          ? {...data, isBookmarked: !data.isBookmarked}
          : data
      )
      
    default:
      return state
  }
}

export default cardData
