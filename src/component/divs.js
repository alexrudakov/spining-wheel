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
      <div className='food'>
        <p className='food__p1'>Option no.{thing ? thing.idCategory : thing}</p>
        <p className='food__p2'>{thing ? thing.strCategory : thing}</p>
        <img src={thing ? thing.strCategoryThumb : thing} className='food__pic'/>
      </div>
    </div>
    )}
}

export default Div;
