player1name=localStorage.getItem("player1name");
player2name=localStorage.getItem("player2name");
player1score=0;
player2score=0;
document.getElementById("player1name").innerHTML=player1name+" :";
document.getElementById("player2name").innerHTML=player2name+" :";
document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;
document.getElementById("playerquestion").innerHTML="Question turn: "+player1name;
document.getElementById("playeranswer").innerHTML="Answer turn: "+player2name;
function send(){
    get_number1=document.getElementById("number1").value;
    get_number2=document.getElementById("number2").value;
    actual_answer=parseInt(get_number1)*parseInt(get_number2);
    question_number="<h4>"+get_number1+" X "+get_number2+"</h4>";
    input_box="<br> Answer: <input type='text' id='input_check_box'>"
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row= question_number+input_box+check_button
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value=" ";
    document.getElementById("number2").value=" ";
}
question_turn="player1";
answer_turn="player2";

function check(){
    get_answer=document.getElementById("input_check_box").value;
    if(get_answer==actual_answer){
        if(answer_turn=="player1"){
            player1score=player1score+1;
        }
        else{
            player2score=player2score+1;
        }
        if(question_turn=="player1"){
            question_turn="player2"
        }
        else{
            question_turn="player1"
        }
    }
    if(get_answer != actual_answer){
        if(question_turn=="player1"){
            player1score=player1score+1;
        }
        else{
            player2score=player2score+1;
        }
    }
}