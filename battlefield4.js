player1_name=localStorage.getItem("name1");
player2_name= localStorage.getItem("name2");
player1_score=0;
player2_score=0;
question_turn= player1_name;
answer_turn= player2_name;

document.getElementById("player1_score_lb").innerHTML= player1_name + ":" + player1_score;
document.getElementById("player2_score_lb").innerHTML= player2_name + ":" + player2_score;
document.getElementById("question_turn_lb").innerHTML= "QUESTION TURN: " + question_turn;
document.getElementById("answer_turn_lb").innerHTML= "ANSWER TURN: " + answer_turn;

function send(){
    n1= document.getElementById("num1").value;
    n2= document.getElementById("num2").value;
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
    question_asking.style.display= "none";
    answer_input1.style.display="inline";
    answer_input2.style.display="inline";
    sign_getter();
    if(sign=="+"){
        document.getElementById("question_display").innerHTML="QUESTION:"+n1+"+"+n2;
        correct_ans= +n1 + +n2;
    }else if(sign == "-"){
        document.getElementById("question_display").innerHTML="QUESTION:"+n1+"-"+n2;
        correct_ans= +n1 - +n2;
    }else if(sign == "*"){
        document.getElementById("question_display").innerHTML="QUESTION:"+n1+"X"+n2;
        correct_ans= +n1 * +n2;
    }else{
        document.getElementById("question_display").innerHTML="QUESTION:"+n1+"÷"+n2;
        correct_ans= +n1 / +n2;
    }
}

function check(){
    answer= document.getElementById("answer_input1").value;
    document.getElementById("answer_input1").value= "";
    document.getElementById("question_display").innerHTML= "QUESTION: WAITING..";
    console.log(answer + " " + correct_ans);
    if((answer==correct_ans)&&(question_turn==player1_name)){
        player2_score= player2_score+1;
        question_turn=player2_name;
        answer_turn= player1_name;
        console.log(player2_score);

        document.getElementById("player1_score_lb").innerHTML= player1_name + ":" + player1_score;
        document.getElementById("player2_score_lb").innerHTML= player2_name + ":" + player2_score;
        document.getElementById("question_turn_lb").innerHTML= "QUESTION TURN: " + question_turn;
        document.getElementById("answer_turn_lb").innerHTML= "ANSWER TURN: " + answer_turn;
    }else if((answer != correct_ans)&&(question_turn==player1_name)){
        question_turn=player2_name;
        answer_turn= player1_name;
        console.log(player1_score);

        document.getElementById("player1_score_lb").innerHTML= player1_name + ":" + player1_score;
        document.getElementById("player2_score_lb").innerHTML= player2_name + ":" + player2_score;
        document.getElementById("question_turn_lb").innerHTML= "QUESTION TURN: " + question_turn;
        document.getElementById("answer_turn_lb").innerHTML= "ANSWER TURN: " + answer_turn;
    }else if((answer==correct_ans)&&(question_turn==player2_name)){
        player1_score= player1_score+1;
        question_turn=player1_name;
        answer_turn= player2_name; 

        document.getElementById("player1_score_lb").innerHTML= player1_name + ":" + player1_score;
        document.getElementById("player2_score_lb").innerHTML= player2_name + ":" + player2_score;
        document.getElementById("question_turn_lb").innerHTML= "QUESTION TURN: " + question_turn;
        document.getElementById("answer_turn_lb").innerHTML= "ANSWER TURN: " + answer_turn;
    }else if((answer != correct_ans)&&(question_turn==player2_name)){
        question_turn=player1_name;
        answer_turn= player2_name;

        document.getElementById("player1_score_lb").innerHTML= player1_name + ":" + player1_score;
        document.getElementById("player2_score_lb").innerHTML= player2_name + ":" + player2_score;
        document.getElementById("question_turn_lb").innerHTML= "QUESTION TURN: " + question_turn;
        document.getElementById("answer_turn_lb").innerHTML= "ANSWER TURN: " + answer_turn;
    }
    question_asking.style.display="inline";
    answer_input1.style.display="none";
    answer_input2.style.display="none";
}

function sign_getter(){
    let sign_decider= Math.floor(Math.random()*10);
    console.log(sign_decider);
    if((sign_decider==1) || (sign_decider==2)){
        sign= "+";
    }else if((sign_decider==3)||(sign_decider==4)){
        sign= "-";
    }else if((sign_decider==5)||(sign_decider==6)){
        sign= "*";
    }else if((sign_decider==7)||(sign_decider==8)){
        sign="/";
    }else{
        sign_getter();
    }
}