const list = {
    "Write a script": "In Progress",
	"Do room cleaning": "Done",
	"Film a video": "To Do",
};

function changeStatus(task, status) {
    if ((task in list) && typeof status == "string") {
        list[task] = status;
        console.log("changeStatus is DONE");
    } else console.log("changeStatus is NOT DONE");
};

function addTask(task, status) {
    if (typeof task == "string" && typeof status == "string") {
        list[task] = status;
        console.log("addTask is DONE");
    } else console.log("addTask is NOT DONE");
};

function deleteTask(task) {
    if (task in list) {
        delete list[task];
        console.log("deleteTask is DONE");
    } else console.log("deleteTask is NOT DONE");
};

function showList() {
    console.log("\nTASK LIST:");

    console.log("Todo:")
    for (let task in list) {
        if (list[task] === "To Do") {
            console.log(task);
        }
    }

    console.log("In Progress:")
    for (let task in list) {
        if (list[task] === "In Progress") {
            console.log(task);
        }
    }

    console.log("Done:")
    for (let task in list) {
        if (list[task] === "Done") {
            console.log(task);
        }
    }

    console.log("\n");
};

showList();

addTask("Workout", "To Do");

changeStatus("Workout", "In Progress");

deleteTask("Film a video");

showList();