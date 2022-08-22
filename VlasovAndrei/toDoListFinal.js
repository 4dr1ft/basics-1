const list = {
    'make homework': 'In Progress',
    'have a meal': 'To Do',
    'feed the cat': 'Done',
    'learning JS': 'In Progress',
}

const statuses = {
    TODO: 'To Do',
    INPROGRESS: 'In Progress',
    DONE: 'Done',
}

function addTask(task) {
    list[task] = statuses.TODO;
}

function isValidStatus(status) {
    return statuses.TODO == status || statuses.INPROGRESS == status || statuses.DONE == status;
}

function isValidTask(task) {
    return task in list;
}

function changeStatus(task, status) {
    if (isValidTask(task) && isValidStatus(status)) {
        list[task] = status;
    } else {
        console.log('wrong task or status');
    }
}

function deleteTask(task) {
    delete list[task];
}

function showList() {
    let resultList = ``;
    for (let key in statuses) {
        resultList += `${statuses[key]}:\n`;
        for (let prop in list) {
            if (list[prop] == statuses[key]) {
                resultList += `\t${prop}\n`;
            }
        }
    }
    console.log(resultList);
}

addTask('watch TV');
changeStatus('have a meal', 'In Progres'); //без двойной 's'
changeStatus('have a meal', 'In Progress');
changeStatus('go shopping', 'Done');
deleteTask('make homework');
showList();
console.log(list);