import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import './snake.css';

var direction = {"down":1,"up":2,"left":3,"right":4};
var red = <div className="orange"></div>;
var black = <div className="green"></div>;

class Snake extends Component {
    constructor(props){
        super(props);
        var snake = [{"x":1,"y":1}];
        var next_red = {"x":1,"y":3};
        this.state = {"score":0,"snake":snake,"red_node_position":next_red,"direction":direction.right,size:{"col":10,"row":25},"i":"","is_runing":true};
 
         this.pause = this.pause.bind(this);
         this.init = this.init.bind(this);
         this.start = this.start.bind(this);
      }
 
      init(){
        var snake = [{"x":1,"y":1}];
        var next_red = {"x":1,"y":3};
        var init_state = {"score":0,"snake":snake,"red_node_position":next_red,"direction":direction.right,size:{"col":10,"row":25}};
        this.setState(init_state);
      }
 
      render(props){
         var trs = this.refresh();
 
         return (
           <div className="game"> 
             <div className="game_div">
             <h4>Puntuación: {this.state.score} </h4>
             <Button onClick={this.init}>Iniciar</Button>
             <p>Controles</p>
             <p>W = 🔼 A = ◀ S = 🔽 D = ▶</p>

               <div className="game_background">
                 <table >
 
                  {trs}
 
                 </table>
               </div>
             </div>
           </div>
         );
      }
 
 
      componentDidMount(){
         document.onkeydown = function(e){
           this.pause();
           var keyNum = window.event ? e.keyCode : e.which;
           if(keyNum === 87){
             this.move(direction.up);
             this.setState({"direction":direction.up});
           }
           else if (keyNum === 83) {
             this.move(direction.down);
             this.setState({"direction":direction.down});
           }
           else if (keyNum === 65) {
             this.move(direction.left);
             this.setState({"direction":direction.left});
           }
           else if (keyNum === 68) {
             this.move(direction.right);
             this.setState({"direction":direction.right});
           }
           this.start();
         }.bind(this);
 
         this.start();
      }
 
      start(){
        var i = setInterval(function(){
          this.move(this.state.direction);
        }.bind(this),600);
 
        this.setState({"i":i,"is_runing":true});
      }
 
      pause(){
        var  i = this.state.i;
        window.clearInterval(i);
        this.setState({"is_runing":false});
      }
 
      move(d){
        var snake = this.state.snake;
        var s;
        var first = {"x":snake[0].x,"y":snake[0].y};
        var get_red = false;
        var last_node={};
 
        if(d === direction.right){
          first.y +=1;
        }
        else if(d === direction.left){
          first.y -=1;
        }
        else if(d === direction.down){
          first.x +=1;
        }
        else if (d === direction.up) {
          first.x -=1;
        }
 
        if(snake.length >1 && first.x === snake[1].x && first.y === snake[1].y){
           return ;
        }
 
        if(first.x === this.state.red_node_position.x && first.y === this.state.red_node_position.y){
           get_red = true;
           this.setState({"score":this.state.score+1})
           var last_node_index = snake.length-1;
           last_node.x = snake[last_node_index].x;
           last_node.y = snake[last_node_index].y;
        }
 
        for(s in snake){
           var next_first = {"x":snake[s].x,"y":snake[s].y};
 
           snake[s].x = first.x;
           snake[s].y = first.y;
 
           first = next_first;
        }
 
        if(get_red){
          get_red = false;
          var i = snake.length;
          snake[i] = {"x":last_node.x,"y":last_node.y};
           this.next_red();
        }
        this.setState(snake);
        this.game_over_check();
      }
 
      game_over_check(){
        if(this.state.snake[0].x >= this.state.size.col || this.state.snake[0].x < 0 || this.state.snake[0].y < 0 || this.state.snake[0].y >= this.state.size.row){
           this.init();
        }
        for(var s=1;s < this.state.snake.length && this.state.snake.length>1;s++){
            if(this.state.snake[s].x === this.state.snake[0].x && this.state.snake[s].y === this.state.snake[0].y){
                this.init();
            }
        }
      }
 
      next_red(){
         var nodes = [];
         for(let c = 0;c < this.state.size.col;c ++){
            for(let r =0;r < this.state.size.row;r ++){
               if(this.get_status(c,r)===0){
                 var n = {"x":c,"y":r};
                 nodes.push(n);
               }
            }
         }
 
         var next_index = Math.round(Math.random()*nodes.length-1);
         this.setState({"red_node_position":nodes[next_index]})
      }
 
      refresh(){
           var background = [];
           for(let c = 0;c<this.state.size.col;c++){
              background[c] = [];
              for(let r = 0;r < this.state.size.row;r++){
                 background[c][r] = this.get_status(c,r);
              }
           }
 
           return background.map(function(value,index,array){
               var tds = value.map(function(v,i,a){
                  if(v === 0){
                    return <td></td>
                  }
                  else if(v === 1){
                    return <td>{black}</td>
                  }
                  else if (v === 2) {
                    return <td>{red}</td>
                  }
               });
               return <tr>{tds}</tr>;
           });
      }
 
      get_status(c,r){
        var s;
        for(s in this.state.snake){
            if(this.state.snake[s].x === c && this.state.snake[s].y === r){
               return 1;
            }
        }
        if(this.state.red_node_position.x === c && this.state.red_node_position.y === r){
          return 2;
        }
        return 0;
      }
   }

export default Snake;