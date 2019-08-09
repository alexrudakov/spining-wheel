import React from "react";

class Div extends React.Component {

  render() {
  console.log(this.props.random)
    return (
    <div>
      <div className='food'>
        <p className='food__p1'>Option #{this.props.random.idCategory}</p>
        <p className='food__p2'>{this.props.random.strCategory}</p>
        <img className='food__pic' src={this.props.random.strCategoryThumb} alt="pic" />
      </div>
    </div>
    )}
}

export default Div;
