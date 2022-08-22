const statuses = {
    TODO: 'To Do',
    INPROGRESS: 'In Progress',
    DONE: 'Done',
}

const list = {
    'make homework': statuses.INPROGRESS,
    'have a meal': statuses.TODO,
    'feed the cat': statuses.DONE,
    'learning JS': statuses.INPROGRESS,
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
        let isProps = false;
        resultList += `${statuses[key]}:\n`;
        for (let prop in list) {
            if (list[prop] == statuses[key]) {
                resultList += `\t${prop}\n`;
                isProps = true;
            }
        }
        if (isProps == false) {
            resultList +='\t-';
        }
    }
    console.log(resultList);
}


addTask('watch TV');
changeStatus('have a meal', 'In Progres'); //без двойной 's'
changeStatus('have a meal', 'In Progress');
changeStatus('go shopping', 'Done');
deleteTask('make homework');
changeStatus('feed the cat', 'In Progress');
showList();
console.log(list);