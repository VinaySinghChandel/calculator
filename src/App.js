import './App.css';

import { Component } from 'react';

import CalOutput from './components/output';

class App extends Component {
  state = {
    result : '',
    temp : ''
  }
  render() {
    const getInput = (event) => {
      var input = event.target.value;
      var resultValue = this.state.result;
      var inputLen = resultValue.length;
      if(!isNaN(input)) {
        this.setState({
          result : resultValue + input
        }); 
      }
      else {
        if(input === 'c') {
          clear();
        }
        if(input === 'del') {
          if(inputLen > 0) {
            this.setState({
              result : resultValue.slice(0,inputLen-1)
            });
          }
          else {
            this.setState({
              result : ''
            });
          }
        }
        if(input === '.') {
          if(resultValue.toString().indexOf('.') > 0){}
          else {
            this.setState({
              result : resultValue + input
            });
          }
        }
        if(resultValue === '') {
          if(input === '/' || input === '*' || input === '+' || input === '-' || input === '%' || input === '.' || input === '00') {
            clear();
          }
        }
        else {
          if(input === '/' || input === '*' || input === '+' || input === '-' || input === '%' || input === '.') {
            let abcd = resultValue.charAt(inputLen-1);
            if(abcd === '/' || abcd === '*' || abcd === '+' || abcd === '-' || abcd === '%'  || abcd === '.') {}
            else {
              this.setState({
                result : resultValue + input
              });
            }
          }
        }
      }
    }
    const getOutput = () => {
      var resultValue = this.state.result;
      if(resultValue === ''){}
      else {
        var finalResult = eval(resultValue);
        this.setState({
          result : resultValue.toString(),
          temp : finalResult.toString()
        });
      }
    }
    const clear = () => {
      this.setState({
        result : '',
        temp : ''
      });
    }
    return (
      <div className="cal-main-container">
        <div className='cal-container'>
          <CalOutput data={this.state.result} temp={this.state.temp}/>
          <ol className='cal-input'>
            <li><button onClick={getInput} value="c">C</button></li>
            <li><button onClick={getInput} value="%">MD</button></li>
            <li><button onClick={getInput} value="del">DEL</button></li>
            <li><button onClick={getInput} value="/" className='cal-operators'>÷</button></li>

            <li><button onClick={getInput} value="7">7</button></li>
            <li><button onClick={getInput} value="8">8</button></li>
            <li><button onClick={getInput} value="9">9</button></li>
            <li><button onClick={getInput} value="*" className='cal-operators'>×</button></li>

            <li><button onClick={getInput} value="4">4</button></li>
            <li><button onClick={getInput} value="5">5</button></li>
            <li><button onClick={getInput} value="6">6</button></li>
            <li><button onClick={getInput} value="-" className='cal-operators'>−</button></li>

            <li><button onClick={getInput} value="1">1</button></li>
            <li><button onClick={getInput} value="2">2</button></li>
            <li><button onClick={getInput} value="3">3</button></li>
            <li><button onClick={getInput} value="+" className='cal-operators'>+</button></li>

            <li><button onClick={getInput} value="." className='cal-operators'>.</button></li>
            <li><button onClick={getInput} value="0">0</button></li>

            <li><button className='cal-result-btn' onClick={getOutput} style={{width:'45%', borderRadius:'50px'}} value="=">=</button></li>
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
