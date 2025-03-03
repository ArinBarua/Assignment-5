
function getColor() {
    let a = Math.floor(Math.random() * 360);
    let b = Math.floor(Math.random() * 50) + 50;
    let c = Math.floor(Math.random() * 30) + 70;
    return `hsl(${a}, ${b}%, ${c}%)`;
}

document.getElementById("theme-btn").addEventListener("cliick", changeTheme);
function changeTheme() {
    let bgColor = getColor();
    document.body.style.backgroundColor = bgColor;
    // console.log("thik ache");
}

document.getElementById("blog").addEventListener("click", function() {
    window.location.href = "./blog.html";
});

let taskCount = 6;
let score = 23;

        function taskBtn(e) {
            
            if (taskCount > 0, e==="task 1") {
                if(taskBtn === true, taskCount--,
                    score++)
                
                // console.log(e);
                alert("You have submitted the task succesfully!");

                let taskTitle = "Fix Mobile Button Issue"; // Task title
                let currentTime = new Date("23:14:00");
                let message = `You have completed the task "${taskTitle}" at ${currentTime}`;

                document.getElementById("taskCount").addEventListener("click", function() {
                    document.getElementById("score").innerText = taskCount;
                    document.getElementById("score").innerText = score;
                    document.getElementById("messageBox").innerText = message;
                    document.getElementById("messageBox").style.display = "block";

                // Disable the button after completing the task
                // document.getElementById("completeBtn").disabled = true;
                // Disable the clicked button
                button.disabled = true;

                // If last task is completed, show final alert
                if (taskCount === 0) {
                    alert("Congratulations! All tasks are completed.");
                }
                })
                
                // document.getElementById("score").innerText = taskCount;
                // document.getElementById("score").innerText = score;
                // document.getElementById("messageBox").innerText = message;
                // document.getElementById("messageBox").style.display = "block";

                // // Disable the button after completing the task
                // document.getElementById("completeBtn").disabled = true;
            } 
            else {
                
            }
        }

        function clearMessage() {
            document.getElementById("messageBox").style.display = "none";
        }
