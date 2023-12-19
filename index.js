let questions = [
]

let userans = [];

function qn(question,options,answer){
    this.question = question;
    this.options = options;
    this.answer = answer;
    userans.push(null);
}

questions.push(new qn("What is the capital of India?", ["Mumbai", "Pune", "Delhi", "Hyderabad"], "Delhi"));
questions.push(new qn("What is the capital of France?", ["Berlin", "Madrid", "Paris", "Rome"], "Paris"));
questions.push(new qn("Which planet is known as the Red Planet?", ["Mars", "Venus", "Jupiter", "Saturn"], "Mars"));
questions.push(new qn("What is the largest mammal in the world?", ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], "Blue Whale"));
questions.push(new qn("Which programming language is often used for web development?", ["Java", "Python", "C++", "JavaScript"], "JavaScript"));
questions.push(new qn("Who is known as the 'Father of Computer Science'?", ["Alan Turing", "Ada Lovelace", "Bill Gates", "Steve Jobs"], "Alan Turing"));
questions.push(new qn("What is the currency of Japan?", ["Yuan", "Won", "Yen", "Ringgit"], "Yen"));
questions.push(new qn("Which famous scientist developed the theory of relativity?", ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"], "Albert Einstein"));
questions.push(new qn("In what year did the first manned moon landing occur?", ["1969", "1971", "1980", "1990"], "1969"));
questions.push(new qn("What is the largest ocean on Earth?", ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"], "Pacific Ocean"));


let q = document.querySelector('.question');
let form = document.querySelector('.options');
let previous = document.querySelector('.control').children[0].children[0];
let qnno = document.querySelector('.control').children[0].children[1];
let next = document.querySelector('.control').children[0].children[2];
let sbmt = document.querySelector('.control').children[1];
let o1 = form.children[0].children[0];
let o2 = form.children[1].children[0];
let o3 = form.children[2].children[0];
let o4 = form.children[3].children[0];

let l1 = form.children[0].children[1];
let l2 = form.children[1].children[1];
let l3 = form.children[2].children[1];
let l4 = form.children[3].children[1];

let yourres = document.querySelector('.result');
yourres.style.display = 'none';
let yourscore = yourres.children[0];

console.log(o1,o2,o3,o4);

let currin = 0;

let score = 0;

function markAnswer(){
    let selected = document.querySelector('input[name="common"]:checked');
    let userAnswer = selected.value;
    userans[currin] = userAnswer;
}

function loadqn(){
    if(currin<0){
        currin = 0;
        return;
    }
    if(currin>9){
        currin = 9;
        return;
    }
    form.reset();
    let currqn = questions[currin];
    qnno.textContent = `${currin+1}/10`;
    o1.setAttribute('value', currqn.options[0]);
    o2.setAttribute('value', currqn.options[1]);
    o3.setAttribute('value', currqn.options[2]);
    o4.setAttribute('value', currqn.options[3]);
    o1.setAttribute('id', currqn.options[0]);
    o2.setAttribute('id', currqn.options[1]);
    o3.setAttribute('id', currqn.options[2]);
    o4.setAttribute('id', currqn.options[3]);

    l1.setAttribute('for', currqn.options[0]);
    l2.setAttribute('for', currqn.options[1]);
    l3.setAttribute('for', currqn.options[2]);
    l4.setAttribute('for', currqn.options[3]);

    q.textContent = currqn.question;
    l1.textContent = currqn.options[0];
    l2.textContent = currqn.options[1];
    l3.textContent = currqn.options[2];
    l4.textContent = currqn.options[3];
}




previous.onclick = ()=>{
    currin--;
    loadqn();
}

next.onclick = ()=>{
    currin++;
    loadqn();
}

form.onclick = ()=> {
    markAnswer();
}

sbmt.onclick = ()=>{

    if(currin==9){
        markAnswer();
    }
    let i=0;
    for(let ans of userans){
        if(ans == questions[i].answer){
            score++;
        }
        i++;
    }
    console.log(score);

    let container = document.querySelector('.container');
    container.style.display = 'none';
    yourres.style.display = 'block';
    yourscore.style.background = `radial-gradient(closest-side, #014f55 79%, transparent 80% 100%),
    conic-gradient(#5077d1, ${(score/10)*100 + 0.5}%, white 0)`;
    yourscore.innerHTML = `${score}/10`;
}



