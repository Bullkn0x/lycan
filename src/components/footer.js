import React, {Component} from 'react';

class Facts extends Component {
  render() {
    return (<footer>
      <div className="container">
        {/* <h1><img className="img-responsive"  src="http://www.noventasclothing.com/wp-content/uploads/2018/03/logo-horizontalblanco.png" alt="" /></h1> */}
        <div className="social">
          <a href=""><i className="fa fa-facebook fa-2x"/></a>
          <a href=""><i className="fa fa-twitter fa-2x"/></a>
          <a href=""><i className="fa fa-dribbble fa-2x"/></a>
        </div>
        <h6>© 2018 Lycan</h6>
      </div>
    </footer>);
  }
}

export default Facts;
