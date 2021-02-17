var strings = {
    //Общее

    //Side toolbar
    "Quick Find": "Быстрый поиск",
    "Settings": "Настройки",
    "All Updates": "Все обновления",

    "Shared": "Общие",
    "Private": "Личные",

    "You are currently a guest. To see all the workspace pages, ask an admin to upgrade you to a member.": "Сейчас вы являетесь гостем. Чтобы просмотреть все страницы рабочего пространства, попросите администратора повысить вас до участника.",
    "Create a workspace": "Создать рабочее пространство",
    //Top toolbar
    "Share": "Поделиться",
    "Updates": "Обновления",
    "Favorite": "В избранное",
    "Favorited": "В избранном",
    //Menu
    "Database lock": "Заблокировать базу данных",
    "Add to Favorites": "Добавить в избранное",
    "Copy link": "Скопировать ссылку",
    "Open in Windows app": "Открыть в приложении для Windows",
    "Undo": "Отменить",
    "Page history": "История страницы",
    "Personal Pro": "Персональный Про",
    "Export": "Экспортировать",
    "PDF, HTML, Markdown": "PDF, HTML, Markdown",
    "Merge with CSV": "Слить с CSV",

    //Database
    "Properties": "Свойства",
    "Group by ": "Группировать по ",
    "Filter": "Фильтр",
    "Sort": "Отсортировать",
    "Hide": "Скрыть",
    "Delete": "Удалить",
    "Search": "Поиск",
    "New": "Новая запись",
    "Copy link to view": "Скопировать ссылку на представление",
    "Templates": "Шаблоны",
    "Group by": "Изменить группировку",
    "Hidden columns": "Скрытые колонки",
    "Views for": "Представления для",
    "Add a view": "Добавить представление",
    "Add a group": "Добавить группу",

    //Page
    "Open as page": "Открыть как страницу",
    
    //Editor
    //Blocks
    "Text": "",
    "Just start writing with plain text.": "",

    "Page": "",
    "Embed a sub-page inside this page.": "",

    "To-do list": "",
    "Track tasks with a to-do list.": "",

    "Heading 1": "",
    "Big section heading.": "",

    "Heading 2": "",
    "Medium section heading.": "",

    "Heading 3": "",
    "Small section heading.": "",

    "": "",
    "": "",

    "": "",
    "": "",

    "": "",
    "": "",

    "": "",
    "": "",
}

// Select the node that will be observed for mutations
const targetNode = document.getElementById('notion-app');

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function (mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
            var spans = document.getElementsByTagName('span');
            for (var i = 0; i < spans.length; i++) {
                console.log(spans[i].innerHTML);
                if (spans[i].innerHTML in strings) spans[i].innerHTML = strings[spans[i].innerHTML];
            }

            var divs = document.getElementsByTagName('div');
            for (var i = 0; i < divs.length; i++) {
                if (divs[i].innerHTML in strings) divs[i].innerHTML = strings[divs[i].innerHTML];

                if (divs[i].firstChild != null) {
                    //if (divs[i].firstChild.data) console.log(divs[i].firstChild.data);
                if (divs[i].firstChild.data in strings) divs[i].firstChild.data = strings[divs[i].firstChild.data];
                }

                if (divs[i].lastChild != null) {
                    //if (divs[i].lastChild.data) console.log(divs[i].lastChild.data);
                if (divs[i].lastChild.data in strings) divs[i].lastChild.data = strings[divs[i].lastChild.data];
                }
            }
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
