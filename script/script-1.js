
//Real time day,date,month and year
const realDate = document.getElementById("real-date");
const realDay = document.getElementById("real-day");

const currentDate = new Date();

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const day = days[currentDate.getDay()];
const month = months[currentDate.getMonth()];
const year = currentDate.getFullYear();

realDay.innerText = day;
realDate.innerText = `${currentDate.getDate()} ${month} ${year}`;




// Necessary requirements task
const completeBtn = document.getElementsByClassName("complete-btn");
const decrementValueElem = document.getElementById("decrement-value");
const incrementValueElem = document.getElementById("increment-value");
const taskContainer = document.getElementById("task-adding-container");

for (let i = 0; i < completeBtn.length; i++) {
    completeBtn[i].addEventListener("click", function (event) {
        if (i >= 0 && i <= 4) {
            alert("Board Updated Successfully");
        } else {
            alert("All tasks are completed");
        }

        // Decrement logic
        let decrementValue = parseInt(decrementValueElem.innerText);
        if (decrementValue <= 6 && decrementValue >= 1) {
            decrementValue--;
            decrementValueElem.innerText = decrementValue;
        }

        // Increment logic
        let incrementValue = parseInt(incrementValueElem.innerText);
        if (incrementValue >= 23 && incrementValue <= 29) {
            incrementValue++;
            incrementValueElem.innerText = incrementValue;
        }

        //task title and time
        const parentContainer = event.target.parentElement.parentElement;
        const title = parentContainer.querySelector("h2").innerText;
        const currentTime = new Date().toLocaleTimeString();

        // task completion message
        const completedTaskDiv = `
            <div class="p-3 bg-blue-50 rounded-lg text-sm text-gray-700">
                You have Completed The Task "${title}" at ${currentTime}
            </div>
        `;

        taskContainer.innerHTML += completedTaskDiv;

        event.target.classList.add("blurry");
        event.target.setAttribute("disabled", "true");
    });
}


//Redirecting to blog.html
const goBlogs = document.getElementsByClassName("go-blog");

for(let i = 0; i < goBlogs.length; i++){
    const goEvent = goBlogs[i];
    goEvent.addEventListener("click", function(event){
        event.preventDefault();  
        window.location.href = "blog.html"; 
    });
}




//Clear button interaction
document.getElementById("clear-btn").addEventListener("click", function(){
   taskContainer.innerHTML = " ";
})


