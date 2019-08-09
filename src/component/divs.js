import React from "react";

class Div extends React.Component {

  render() {
  console.log(this.props.random)
    return (
    <div>
      <div>
        <p>{this.props.random.idCategory}</p>
        <p>{this.props.random.strCategory}</p>
        <img src={this.props.random.strCategoryThumb} alt="pic" />
      </div>
    </div>
    )}
}

export default Div;
