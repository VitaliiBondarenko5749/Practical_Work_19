import React from 'react';
import ReactDOM from 'react-dom/client';

class Task1 extends React.Component{
  constructor(){
    super();

    this.state = {items: ['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро']};
  }

  render(){
    const list = this.state.items.map((item, index) => {return <li key={index}>{item}</li>});

    return <div>
      <p>Task 1</p>
    <ul>
      {list}
    </ul>
    </div>
  }
}

class Task2 extends React.Component{
  constructor(){
    super();

    this.state = {items: ['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро']};
  }

  addItem(){
    this.state.items.push('пункт');
    this.setState({items: this.state.items});
  }

  render(){
    const list = this.state.items.map((item, index) => {return <li key={index}>{item}</li>});

    return <div>
      <p>Task 2</p>
    <ul>
      {list}
      <button onClick={this.addItem.bind(this)}>Add item</button>
    </ul>
    </div>
  }
}

class Task3 extends React.Component{
  constructor(){
    super();

    this.state = {items: ['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро']};
  }

  deleteItem(){
    this.state.items.splice(this.state.items.length - 1, 1);
    this.setState({items: this.state.items});
  }

  render(){
    const list = this.state.items.map((item, index) => {return <li key={index}>{item}</li>});

    return <div>
      <p>Task 3</p>
    <ul>
      {list}
      <button onClick={this.deleteItem.bind(this)}>Delete last item</button>
    </ul>
    </div>
  }
}

class Task4 extends React.Component{
  constructor(){
    super();

    this.state = {items: ['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро']};
  }

  deleteItem(index){
    this.state.items.splice(index, 1);
    this.setState({items: this.state.items});
  }

  render(){
    const list = this.state.items.map((item, index) => {return <div>
    <li key={index}>{item} <button onClick={this.deleteItem.bind(this, index)}>remove</button></li>
     </div>});

    return <div>
      <p>Task 4</p>
    <ul>
      {list}
    </ul>
    </div>
  }
}

class Task5 extends React.Component{
  constructor(){
    super();

    this.state = {content: ""};
  }

  changeContent(event){
    this.setState({content: event.target.value});
  }

  render(){
    return <div>
      <p>Task 5</p>
      <p>{this.state.content}</p>
      <input value={this.state.content} type={Text} onChange={this.changeContent.bind(this)}/>
    </div>
  }
}

class Task6 extends React.Component{
  constructor(){
    super();

    this.state = {content: ""};
  }

  changeContent(event){
    this.setState({content: event.target.value});
  }

  render(){
    return <div>
      <p>Task 6</p>
      <p>{this.state.content.toUpperCase()}</p>
      <input value={this.state.content} type={Text} onChange={this.changeContent.bind(this)}/>
    </div>
  }
}

class Task7 extends React.Component{
  constructor(){
    super();

    this.state = {birthDate: ''};
  }

  handleChange(event) {
    const inputAge = parseInt(event.target.value, 10);

    if (!isNaN(inputAge)) {
    const birthDateVar = new Date().getFullYear() - inputAge;
    this.setState({ birthDate: birthDateVar});
    } else {
      this.setState({birthDate: ''});
    }
    }

    render() {
      return (
        <div>
          <p>Task 7</p>
            <input type="text" onChange={this.handleChange.bind(this)} />
          <p>{this.state.birthDate}</p>
        </div>
      );
      }
}

class Task8 extends React.Component{
  constructor(){
    super();

    this.state = {items: ['', '', '']};
  }

  getFullName(event){
    const arr = event.target.value.split(' ');
    this.setState({items: arr});
  }

  render(){
    return <div>
      <p>Task 8</p>
      <p>{this.state.items[0]}</p>
      <p>{this.state.items[1]}</p>
      <p>{this.state.items[2]}</p>
      <input type={Text} onChange={this.getFullName.bind(this)} />
    </div>
  }
}

class Task9 extends React.Component{
  constructor(){
    super();

    this.state = {content: '', value: ''}
  }

  changeContent(event){
    this.setState({value: event.target.value});
  }

  handleChange(event){
    this.setState({content: this.state.value});
    event.preventDefault();
  }

  render(){
    return <div>
      <p>Task 9</p>
      <p>{this.state.content}</p>
      <input onChange={this.changeContent.bind(this)}/>
      <input type="submit" onClick={this.handleChange.bind(this)} />
    </div>
  }
}

class Task10 extends React.Component{
  constructor(){
    super();

    this.state = {num1: '', num2: '', content: ''};
  }

  changeNum1(event){
    this.setState({num1: event.target.value});
  }

  changeNum2(event){
    this.setState({num2: event.target.value});
  }

  getSum(){
    const numb1 = parseInt(this.state.num1);
    const numb2 = parseInt(this.state.num2);

    if(!isNaN(numb1) && !isNaN(numb2)){
      const sum = numb1 + numb2;

      this.setState({content: sum});
    } 
    else{
      this.setState({content: 'Incorrect input!'});
    }
  }

  render(){
    return <div>
      <p>Task 10</p>
      <input onChange={this.changeNum1.bind(this)} type={Number}/>
      <input onChange={this.changeNum2.bind(this)} type={Number}/>
      <input type="submit" onClick = {this.getSum.bind(this)}/>
      <p>{this.state.content}</p>
    </div>
  }
}

class Task11 extends React.Component{
  constructor() {
    super();
    this.state = { fullName: ['', '', ''], value: '' };
    this.changeFullName = this.changeFullName.bind(this);
    this.setNewFullName = this.setNewFullName.bind(this);
  }

  changeFullName(event, idx) {
    if (idx >= 0 && idx < this.state.fullName.length) {
      const arr = this.state.fullName;
      arr[idx] = event.target.value;
      this.setState({ fullName: arr });
    }
  }

  setNewFullName() {
    const name = this.state.fullName[0];
    const surname = this.state.fullName[1];
    const lastname = this.state.fullName[2];
    const newFullName = [name, surname, lastname].join(' ');
    this.setState({ value: newFullName });
  }

  render() {
    return (
      <div>
        <p>Task 11</p>
        <input onChange={(event) => this.changeFullName(event, 0)} />
        <input onChange={(event) => this.changeFullName(event, 1)} />
        <input onChange={(event) => this.changeFullName(event, 2)} />
        <input type="submit" onClick={this.setNewFullName} />
        <p>{this.state.value}</p>
      </div>
    );
  }
}

class Task12 extends React.Component{
  constructor(){
    super();
    this.state = {names: ['Віталій', 'Вова', 'Макс', 'Павло', 'Богдан'], newName: ''};
  }

  handleChange(event){
    this.setState({newName: event.target.value});
  }

  addName(){
    const name = this.state.newName;
    this.state.names.push(name);
    this.setState({names: this.state.names});
  }

  render(){
    const list = this.state.names.map((item, index) => {return <li key={index}>{item}</li>});
    return <div>
      <p>Task 12</p>
      <ul>
        {list}
      </ul>
      <input type={'text'} onChange = {this.handleChange.bind(this)}/>
      <input type={'submit'} onClick = {this.addName.bind(this)}/>
    </div>
  }
}

class Task13 extends React.Component{
  constructor(){
    super();
    this.state = {names: ['Віталій', 'Вова', 'Макс', 'Павло', 'Богдан'], newName: ''};
  }

  handleChange(event){
    this.setState({newName: event.target.value});
  }

  addName(){
    const name = this.state.newName;
    this.state.names.push(name);
    this.setState({names: this.state.names});
  }

  deleteItem(index){
    if(index >= 0 && index < this.state.names.length){
      this.state.names.splice(index, 1);
      this.setState({names: this.state.names});
    }
  }

  render(){
    const list = this.state.names.map((item, index) => { return <li key={index}>{item} 
    <button onClick = {this.deleteItem.bind(this, index)}>Remove</button></li> });

    return <div>
      <p>Task 13</p>
      <ul>
        {list}
      </ul>
      <input type={'text'} onChange = {this.handleChange.bind(this)}/>
      <input type={'submit'} onClick = {this.addName.bind(this)}/>
    </div>
  }
}

class Task14 extends React.Component{
  constructor(){
    super();

    this.state = {
      hrefs: [
        {href: '1.html', text: 'посилання 1'},
        {href: '2.html', text: 'посилання 2'},
        {href: '3.html', text: 'посилання 3'}
      ],
      newHref: '', newText: ''
    };
  }

  changeHref(event){
    this.setState({newHref: event.target.value});
  }

  changeText(event){
    this.setState({newText: event.target.value});
  }

  addItem(){
    this.state.hrefs.push({href: this.state.newHref, text: this.state.newText});
    this.setState({hrefs: this.state.hrefs});
  }

  render(){
    const list = this.state.hrefs.map((item, index) => {return <li key={index}><a href={item.href}>{item.text}</a></li>});

    return <div>
      <p>Task 14</p>
      <ul>
        {list}
      </ul>

      <input onChange={this.changeHref.bind(this)}/>
      <input onChange={this.changeText.bind(this)}/>
      <input type={'submit'} onClick = {this.addItem.bind(this)}/>
    </div>
  }
}

class Task15 extends React.Component{
  constructor(){
    super();
    this.state = {items: ['Віталій', 'Максим', 'Вова', 'Богдан', 'Павло'], number: -1, value: ''};
  }

  handleChange(event){
    const numb = parseInt(event.target.value);

    if(!isNaN(numb)){
      this.setState({number: numb});
    }
  }

  getResult(){
    let numb = this.state.number;
    --numb;

    if(!isNaN(numb) && (numb >= 0 && numb < this.state.items.length)){
      const item = this.state.items[numb];

      this.setState({value: item});
    }
    else{
      this.setState({value: 'Incorrect input!'});
    }
  }

  render(){
    const list = this.state.items.map((item, index) => {return <li key={index}>{item} - {index + 1}</li>});

    return <div>
      <p>Task 15</p>
      <ul>
        {list}
      </ul>
      
      <input type={'number'} onChange = {this.handleChange.bind(this)}/>
      <input type={'submit'} onClick = {this.getResult.bind(this)}/>
      <p>{this.state.value}</p>
    </div>

  }
}

class Task16 extends React.Component{
  constructor(){
    super();

    this.state = {
      users: [
        {name: 'Коля', age: 30},
        {name: 'Василь', age: 40},
        {name: 'Петро', age: 50},
      ], newName: '', newAge: -1
    };   
  }

  changeName(event){
    const name = event.target.value;
    this.setState({newName: name});
  }

  changeAge(event){
    const age = parseInt(event.target.value);

    if(!isNaN(age)){
      this.setState({newAge: age});
    }
  }

  addUser(){
    const nameVar = this.state.newName;
    const ageVar = this.state.newAge;

    if(!isNaN(ageVar) && ageVar > 0 && ageVar <= 100){
      this.state.users.push({name: nameVar, age: ageVar});
      this.setState({users: this.state.users});
    }
  }

  render(){
    const list = this.state.users.map((item, index) => { return <tr key={index}>
    <td style={{border: '1px solid black', padding: '8px'}}>{item.name}</td>
    <td style={{border: '1px solid black', padding: '8px'}}>{item.age}</td></tr> });
    
    return <div>
      <p>Task 16</p>
      <table style={{border: '1px solid black'}}>
        {list}
      </table>

      <p>Name: <input type={'text'} onChange = {this.changeName.bind(this)}/></p>
      <p>Age: <input type={'number'} onChange = {this.changeAge.bind(this)}/></p>
      <input type={'submit'} onClick = {this.addUser.bind(this)}/>
    </div>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Task1 />
    <Task2 />
    <Task3 />
    <Task4 />
    <Task5 />
    <Task6 />
    <Task7 />
    <Task8 />
    <Task9 />
    <Task10 />
    <Task11 />
    <Task12 />
    <Task13 />
    <Task14 />
    <Task15 />
    <Task16 />
  </React.StrictMode>
);