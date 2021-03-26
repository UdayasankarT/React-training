import React from 'react';
import ProductList from './components/ProductList/ProductList';
import  './App.css';


class App extends React.Component {

  state ={
    newItem:'',
    list : [
    ],
    searchText: ''
  }

  

  addItem(value){
    
    if (value !== ''){
      const newItem ={

      id: Date.now(),
      value : value
      };
    const list = [...this.state.list]
    list.push(newItem);

    this.setState({
      list,newItem:''
    })
  }
  }
  
  deleteItem(id){
    console.log(id)
    const   list = [...this.state.list]
    const updatedlist = list.filter(item=>item.id !== id);
    console.log(updatedlist)
    this.setState({list: updatedlist})
  }


  render(){
    return(
      <div className='todo-wrapper'>
        <input type="text" className="todo-input-box" placeholder="Add to do" value={this.state.newItem} onChange =  {e => {
          this.setState({
            newItem:e.target.value
          })
        }} />
        <button className="add-btn" onClick = {() => this.addItem(this.state.newItem)}>Add ToDO</button>
        <input type="text" className="search-input-box" placeholder="Search Text" value={this.state.searchText}
          onChange={(e) => {
            this.setState({
              searchText: e.target.value,
            });
        }} />
        {/* <button className="add-btn" onClick = {() => this.addItem(this.state.newItem)}>Add ToDO</button> */}
        
         <div className="todo-list">
          <ul>
            {
              this.state.list.map(item => {
                  console.log(item)
                  if (item.value.includes(this.state.searchText))
                      return(
                      <li key={item.id}>
                      <div>{item.value}</div>
                      <button className='delete-btn' onClick = { () => this.deleteItem(item.id)} >Delete</button>
                    </li>
                )
                else{
                  return (null)
                }
              }
              )}
          </ul>
        </div>
        <ProductList />
      </div>
    )
  }
}



export default App;