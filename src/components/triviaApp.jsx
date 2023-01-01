import React, { Component } from 'react';
import Header from './header';
import Main from './main';
import '../cssFiles/triviaApp.css';

class TriviaApp extends Component {
    state={questions:[
        {id:'1', q:'What is the capital of France ?' , answers:[{text:'Paris' , isTrue: true} , {text:'Dublin' , isTrue: false} , {text:'New York' , isTrue: false} , {text:'Tel Aviv' , isTrue: false}]},
        {id:'2', q:'Who is the CEO of Tesla ?' , answers:[{text:'Elon Mask' , isTrue: true} , {text:'you congratulations' , isTrue: false} , {text:'Benyamin Netanyahu' , isTrue: false} , {text:'Jeff Bezos' , isTrue: false}]},
        {id:'3', q:'Who won the first World Cap ?' , answers:[{text:'Uruguay' , isTrue: true} , {text:'Brazil' , isTrue: false} , {text:'Real Madrid' , isTrue: false} , {text:'you congratulations' , isTrue: false}]},
        {id:'4', q:'How many sessons Game Of Thrones have ?' , answers:[{text:'8' , isTrue: true} , {text:'6' , isTrue: false} , {text:'8-1' , isTrue: false} , {text:'if you dont know, please do not continue' , isTrue: false}]},
        {id:'5', q:'how many main actors are in Frinds ?' , answers:[{text:'6' , isTrue: true} , {text:'4' , isTrue: false} , {text:'1' , isTrue: false} , {text:'10' , isTrue: false}]},
        {id:'6', q:'What is the square root of 144 ?' , answers:[{text:'12' , isTrue: true} , {text:'14' , isTrue: false} , {text:'25' , isTrue: false} , {text:'Spongbob squarepants' , isTrue: false}]},
        {id:'7', q:'what is the color of the Red Sea ?' , answers:[{text:'clear' , isTrue: true} , {text:'blue' , isTrue: false} , {text:'red' , isTrue: false} , {text:'I am color blind' , isTrue: false}]},
        {id:'8', q:'what are the colors in China flag ?' , answers:[{text:'red and yellow' , isTrue: true} , {text:'blue and white' , isTrue: false} , {text:'white and red' , isTrue: false} , {text:'I am color blind' , isTrue: false}]},
        {id:'9', q:'what does the fox say ?' , answers:[{text:'ding ding ding' , isTrue: true} , {text:'quwha quwha dela oma' , isTrue: false} , {text:'yupididu' , isTrue: false} , {text:'wallak ahsheli' , isTrue: false}]},
        {id:'10', q:'In which year did Israel declare its independens ?' , answers:[{text:'1948' , isTrue: true} , {text:'yesterday' , isTrue: false} , {text:'1994' , isTrue: false} , {text:'1936' , isTrue: false}]},
        {id:'11', q:'In which year did World War II started ?' , answers:[{text:'1939' , isTrue: true} , {text:'1919' , isTrue: false} , {text:'1945' , isTrue: false} , {text:'yesterday' , isTrue: false}]},
        {id:'12', q:'Who is the most decorated swimmer in the world ? ' , answers:[{text:'Michel Phelps' , isTrue: true} , {text:'cristiano Ronaldo' , isTrue: false} , {text:'Usain Bolt' , isTrue: false} , {text:'Anstasia Gorbenko' , isTrue: false}]},
        {id:'13', q:'What is the largest city in the world ?' , answers:[{text:'Tokyo' , isTrue: true} , {text:'Tel Aviv' , isTrue: false} , {text:'Nahariya' , isTrue: false} , {text:'bucharest is the time of your life' , isTrue: false}]},
        {id:'14', q:'Which song released first ?' , answers:[{text:'The flower in my garden' , isTrue: true} , {text:'Im pantera' , isTrue: false} , {text:'Trilili Tralala' , isTrue: false} , {text:'Pouch' , isTrue: false}]},
        {id:'15', q:'What is the initials of the three main colors ?' , answers:[{text:'rgb' , isTrue: true} , {text:'cpp' , isTrue: false} , {text:'wwe' , isTrue: false} , {text:'abc' , isTrue: false}]},
        {id:'16', q:'Which language has the more native speakers ?' , answers:[{text:'Mandarin' , isTrue: true} , {text:'English' , isTrue: false} , {text:'Hebrow' , isTrue: false} , {text:'JavaScript' , isTrue: false}]},
        {id:'17', q:'Which artist has the most streams on Spotify ?' , answers:[{text:'Drake' , isTrue: true} , {text:'Noa kirel' , isTrue: false} , {text:'Natan Goshen' , isTrue: false} , {text:'Chris Brown' , isTrue: false}]},
        {id:'18', q:'Which country has won the most World Cups ?' , answers:[{text:'Brazil' , isTrue: true} , {text:'Germany' , isTrue: false} , {text:'USA' , isTrue: false} , {text:'Israel hahaha' , isTrue: false}]},
        {id:'19', q:'Complete the following lyrics:"Noa Im going to explode in 10,9,8..3..1" ?' , answers:[{text:'Trilili Tralala' , isTrue: true} , {text:'Pouch' , isTrue: false} , {text:'Im pantera' , isTrue: false} , {text:'bucharest is the time of your life' , isTrue: false}]},
        {id:'20', q:'In which country would you find Mount Kilimanjaro ?' , answers:[{text:'Tanzania' , isTrue: true} , {text:'USA' , isTrue: false} , {text:'Italy' , isTrue: false} , {text:'India' , isTrue: false}]},
        {id:'21', q:'What Netflix show had the most streaming views in 2021 ?' , answers:[{text:'Squid Games' , isTrue: true} , {text:'Hanger Games' , isTrue: false} , {text:'Game Of Thrones' , isTrue: false} , {text:'Hashminia' , isTrue: false}]},
        {id:'22', q:'What country refers to themselves as "Kiwis" ?' , answers:[{text:'New Zealand' , isTrue: true} , {text:'Kiwiland' , isTrue: false} , {text:'Lebanon' , isTrue: false} , {text:'Iraq' , isTrue: false}]},
        {id:'23', q:'How many tectonic plates does the Earth have ?' , answers:[{text:'7' , isTrue: true} , {text:'2' , isTrue: false} , {text:'70' , isTrue: false} , {text:'801' , isTrue: false}]},
        {id:'24', q:'Which country flag contains an image of the country ?' , answers:[{text:'Cyprus' , isTrue: true} , {text:'Israel' , isTrue: false} , {text:'Japan' , isTrue: false} , {text:'kiwiland' , isTrue: false}]},
        {id:'25', q:'What was New York original name ?' , answers:[{text:'New Amsterdam' , isTrue: true} , {text:'Akka' , isTrue: false} , {text:'Old York' , isTrue: false} , {text:'Mapasimia' , isTrue: false}]},
        {id:'26', q:'Which club Cristiano Ronalod has not played for ?' , answers:[{text:'Hapoel Hor Bagerev' , isTrue: true} , {text:'Real Madrid' , isTrue: false} , {text:'Manchester United' , isTrue: false} , {text:'Juventus' , isTrue: false}]},
        {id:'27', q:'Who get more Ballon Dors ?' , answers:[{text:'Messi' , isTrue: true} , {text:'Azili' , isTrue: false} , {text:'Benzema' , isTrue: false} , {text:'Neymar' , isTrue: false}]},
        {id:'28', q:'What is the distance of a penalty kick ?' , answers:[{text:'11 meters' , isTrue: true} , {text:'29 meters' , isTrue: false} , {text:'12 cm' , isTrue: false} , {text:'Half meter' , isTrue: false}]},
        {id:'29', q:'Who is the youngest Avenger ?' , answers:[{text:'Spider Man' , isTrue: true} , {text:'Bath man' , isTrue: false} , {text:'Herkules' , isTrue: false} , {text:'Kilian Mbappe' , isTrue: false}]},
        {id:'30', q:'Which of these names is not 1 of Daenerys Targaryens dragons name ?' , answers:[{text:'Barni' , isTrue: true} , {text:'Drogon' , isTrue: false} , {text:'Rhaegal' , isTrue: false} , {text:'Viserion' , isTrue: false}]},
        {id:'31', q:'Which animal is known as the "Ship of the Desert" ?' , answers:[{text:'Camel' , isTrue: true} , {text:'Dog' , isTrue: false} , {text:'Cat' , isTrue: false} , {text:'octopus' , isTrue: false}]},
        {id:'32', q:'In which language alphabet there are more letters ?' , answers:[{text:'Arabic' , isTrue: true} , {text:'English' , isTrue: false} , {text:'Hebrow' , isTrue: false} , {text:'Monkeys' , isTrue: false}]},
        {id:'33', q:'How many seconds make one hour ?' , answers:[{text:'3600' , isTrue: true} , {text:'4500' , isTrue: false} , {text:'1000' , isTrue: false} , {text:'10000' , isTrue: false}]},
        {id:'34', q:'What is the capital (and the best team) of Spain ?' , answers:[{text:'(Hala) Madrid' , isTrue: true} , {text:'Barcelona' , isTrue: false} , {text:'Paris' , isTrue: false} , {text:'Valencia' , isTrue: false}]},
        {id:'35', q:'Which of the following in not Frindes actor ?' , answers:[{text:'Jack Parelta' , isTrue: true} , {text:'Joey Tribbiani' , isTrue: false} , {text:'Ross Geller' , isTrue: false} , {text:'Rachel Green' , isTrue: false}]},
        {id:'36', q:'What is the highest mountain in the world ?' , answers:[{text:'Everest' , isTrue: true} , {text:'Hermon' , isTrue: false} , {text:'Carmel' , isTrue: false} , {text:'Klimanjaro' , isTrue: false}]},
        {id:'37', q:'Which month of the year has the least number of day ?' , answers:[{text:'February' , isTrue: true} , {text:'Cislev' , isTrue: false} , {text:'July' , isTrue: false} , {text:'June' , isTrue: false}]},
        {id:'38', q:'Which is the largest animal in the world ?' , answers:[{text:'Blue whale' , isTrue: true} , {text:'You with pump' , isTrue: false} , {text:'giraffe' , isTrue: false} , {text:'Ant' , isTrue: false}]},
        {id:'39', q:'In which direction does the sunrise ?' , answers:[{text:'East' , isTrue: true} , {text:'West' , isTrue: false} , {text:'Tzafon' , isTrue: false} , {text:'Darom' , isTrue: false}]},
        {id:'40', q:'How many zeros are there in one hundred thousand ?' , answers:[{text:'5' , isTrue: true} , {text:'4' , isTrue: false} , {text:'6' , isTrue: false} , {text:'100000' , isTrue: false}]},
        {id:'41', q:'Who was the first man to walk on the moon ?' , answers:[{text:'Neil Armstrong' , isTrue: true} , {text:'humen never walked on the moon' , isTrue: false} , {text:'E-T' , isTrue: false} , {text:'Elon Mask' , isTrue: false}]},
        {id:'42', q:'How many lungs does the human body have ?' , answers:[{text:'two' , isTrue: true} , {text:'Im smoking' , isTrue: false} , {text:'1' , isTrue: false} , {text:'4' , isTrue: false}]},
        {id:'43', q:'Which is the fastest animal on the land ?' , answers:[{text:'Cheetah' , isTrue: true} , {text:'Usain Bolt' , isTrue: false} , {text:'turtle' , isTrue: false} , {text:'Ant, it is relative' , isTrue: false}]},
        {id:'44', q:'Which is the largest country in the world (By area) ?' , answers:[{text:'Russia' , isTrue: true} , {text:'India' , isTrue: false} , {text:'The Philipns' , isTrue: false} , {text:'Lebanon' , isTrue: false}]},
        {id:'45', q:'Who painted the Mona Lisa ?' , answers:[{text:'Leonardo da Vinci' , isTrue: true} , {text:'Leonardo da Caprio' , isTrue: false} , {text:'Arik Ainstien' , isTrue: false} , {text:'King Charls' , isTrue: false}]},
        {id:'46', q:'What is the name of the biggest desert in the world ?' , answers:[{text:'Sahara' , isTrue: true} , {text:'Yehuda' , isTrue: false} , {text:'Haholot' , isTrue: false} , {text:'Antartartica' , isTrue: false}]},
        {id:'47', q:'What makes up 80% of our brains volume' , answers:[{text:'Water' , isTrue: true} , {text:'genius' , isTrue: false} , {text:'bones' , isTrue: false} , {text:'muscles' , isTrue: false}]},
        {id:'48', q:'what' , answers:[{text:'a' , isTrue: true} , {text:'b' , isTrue: false} , {text:'c' , isTrue: false} , {text:'d' , isTrue: false}]},
        {id:'49', q:'what' , answers:[{text:'a' , isTrue: true} , {text:'b' , isTrue: false} , {text:'c' , isTrue: false} , {text:'d' , isTrue: false}]},
        {id:'50', q:'what' , answers:[{text:'a' , isTrue: true} , {text:'b' , isTrue: false} , {text:'c' , isTrue: false} , {text:'d' , isTrue: false}]},
    ],
    shownQuestions:[],
    i:0
};
    render() {
        return (
            <div className="container text-center " id="triviaApp">
                <div className="row border border-secondary">
                    <Header />
                </div>
                <div className="row border border-secondary">
                    <Main gettwenty={()=>this.gettwenty()} question={this.state.shownQuestions} shuffle={this.shuffle} i={this.state.i} />
                </div>
            </div>
        );
    }
    //get 20 questions randomali from the array of 50 and sort them rnadomali in a new array
    gettwenty=()=>{
        const questions=[...this.state.questions];
        const shuffled = questions.sort(() => 0.5 - Math.random());
        this.state.shownQuestions = shuffled.slice(0, 20);
        this.setState({shownQuestions:this.state.shownQuestions})
        this.setState({0:this.state.i})
    }
    //shuffle the answers of the current question
    shuffle=(arr)=> {
        let currentIndex = arr.length,  randomIndex;
            while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [arr[currentIndex], arr[randomIndex]] = [
            arr[randomIndex], arr[currentIndex]];
        }
        return arr;
    }
}

export default TriviaApp;
