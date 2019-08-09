import React from "react";

class Div extends React.Component {

  render() {
    const number = Math.floor(Math.random() * 12) + 1;
    let filtered = this.props.data.categories.find(item => {
      if(item.idCategory == number){
        console.log(item);
        return item;
      }
    })
    console.log(filtered)
    var thing = filtered;
    console.log(thing ? thing.idCategory : thing);
    console.log(filtered)
    return (
    <div>
      <div>
        <p>{thing ? thing.idCategory : thing}</p>
        <p>{thing ? thing.strCategory : thing}</p>
        <img src={thing ? thing.strCategoryThumb : thing} />
      </div>
    </div>
    )}
}

export default Div;
