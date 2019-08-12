import React, {Component} from 'react';
import './App.css';
import ImageContainer from './ImageContainer'


class App extends Component {

  
  ObliczBMI() {
  
    var message = "";
    var height = Number(document.getElementById("height").value);
    var weight = Number(document.getElementById("weight").value);
    var bmi = weight / Math.pow(height/100)
    document.getElementById("bmi").innerHTML = "Twoje BMI wynosi : " + bmi;

    if(bmi < 16){
        message = "Twój wskaźnik BMI wskazuje na wygłodzenie";
    }
    else if(bmi >= 16 && bmi <= 16,99){
      message = "Twój wskaźnik BMI wskazuje na wychudzenie";
    }
    else if(bmi >= 17 && bmi <= 18,49){
        message ="Masz niedowagę";
    }
    else if(bmi >= 18,5 && bmi <= 24,99){
      message = "Gratulacje! Twoje BMI jest prawidłowe :)";
    }
    else if(bmi >= 25 && bmi <= 29,99){
      message = "Masz nadwagę";
    }
    else if(bmi >= 30 && bmi <= 34,99){
      message = "Twój wskaźnik BMI wskazuje na I stopień otyłości";
    }
    else if(bmi >= 35 && bmi <=39,99){
      message = "Twój wskaźnik BMI wskazuje na II stopień otyłości";
    }
    else {
      message = "Twój wskaźnik BMI wskazuje na III stopień otyłości";
    }

    this.setState({message: message});     
    this.setState({bmi: Math.round(bmi * 100) / 100});   
  
  }
  
render() {
    return (
      <body>
        <div>
        <header className="App-header">
          <h1 className="App-title">Oblicz swoje BMI</h1>
          <ImageContainer image='first.png'/>
          Waga [kg] <input type='text' id="weight"/> 
          Wzrost [cm] <input type='text' id="height"/>
          <button className="button"> Oblicz</button>
          Twoje BMI wynosi:<input type='text'/>
          <ul></ul>
          <ul1>
            <li> poniżej 16,0 - wygłodzenie</li>
          </ul1>
          <ul2>
            <li> 16,0-16,99 - wychudzenie</li>
          </ul2>
          <ul3>
            <li> 17,0-18,49 - niedowaga</li>
          </ul3>
          <ul4>
            <li> 18,5-24,99 - wartość prawidłowa</li>
          </ul4>
          <ul5>
            <li> 25,0-29,99 - nadwaga</li>
          </ul5>
          <ul6>
            <li> 30,0-34,99 - I stopień otyłości</li>
          </ul6>
          <ul7>
            <li> 35,0-39,99 - II stopień otyłości (otyłość kliniczna)</li>
          </ul7>
          <ul8>
            <li> powyżej 40 - III stopień otyłości (otyłość skrajna)</li>
          </ul8>
        </header>
        </div>
      </body>
    );
  }
}


export default App;
