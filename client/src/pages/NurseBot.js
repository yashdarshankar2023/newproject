import React from 'react'

import "../css/NurseBotStyle.css"

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);
const NurseBot = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        var inp1 = document.getElementById("inp_message").value;
        var box = document.getElementById("box");

        box.innerHTML += '<div class="msg-right">' + inp1 + '</div>';
        box.scrollTop = box.scrollHeight;
        await delay(2000);

        const question1 = ["hi", "hello", "hey"]
        const answer1 = "hello sir how might i help you";

        const question2 = ["book", "bed", "hospital"]
        const answer2 = "click on home page and then book your bed";

        const questions = [question1, question2]
        const answers = [answer1, answer2]
        let found = 0
        const inp = inp1.split(" ");
        questions.forEach((Q, i) => {
            Q.forEach(q1 => {
                inp.forEach(ip => {
                    console.log(ip)

                    if (q1 == ip.toLowerCase()) {
                        box.innerHTML += '<div class="msg-left">' + answers[i] + '</div>';
                        box.scrollTop = box.scrollHeight;
                        found = 1
                        return;
                        




                    }

                })

            })
        })
        if (found == 0) {
            box.innerHTML += '<div class="msg-left">' + "Can you please rephrase sir" + '</div>';
            box.scrollTop = box.scrollHeight;
        }
    }
    return (
        <div>
            <center>
                <h1 className='msg-heading'>NurseBot</h1>
            </center>
            <div id="box"><div class="msg-left">sample text</div></div>

            <form id="send-container">

                <input type="text" id="inp_message" />
                <br /><br />
                <button id="addbtn" className="button" onClick={handleSubmit}> Send </button>
                <br /><br /><br /><br /><br /><br /><br /><br />

            </form>


        </div>
    )
}

export default NurseBot