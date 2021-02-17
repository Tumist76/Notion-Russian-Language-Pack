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
    "Text": "Текст",
    "Just start writing with plain text.": "Начните печатать обычным текстом",

    "Page": "Страница",
    "Embed a sub-page inside this page.": "Вставьте подстраницу в эту страницу",

    "To-do list": "Список дел",
    "Track tasks with a to-do list.": "Отслеживайте задачи с помощью списка дел",

    "Heading 1": "Заголовок 1",
    "Big section heading.": "Большой заголовок раздела",

    "Heading 2": "Заголовок 2",
    "Medium section heading.": "Средний заголовок раздела",

    "Heading 3": "Заголовок 3",
    "Small section heading.": "Маленький заголовок раздела",
}

function translateNode(node) {
    if (node.innerHTML in strings) {
        var translated = strings[node.innerHTML];
        console.log(`[innerHTML] translating node, old value: "${node.innerHTML}", new value: "${translated}"`)
        node.innerHTML = translated;
    }



    if (node.data in strings) {
        if (node.data != null) console.log(`node data: ${node.data}`);
        var translated = strings[node.data];
        console.log(`[data] translating node, old value: "${node.data}", new value: "${translated}"`)
        node.data = strings[node.data]
    };



    if (node.childNodes != null) {
        var nodes = node.childNodes;
        for (var i = 0; i < nodes.length; i++) {
            translateNode(nodes[i]);
        }
    }
}

// Select the node that will be observed for mutations
const targetNode = document.getElementById('notion-app');

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function (mutationsList, observer) {

    for (let mutation of mutationsList) {
        for (let node of mutation.addedNodes) {
            translateNode(node);
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback, {
    childList: true, // наблюдать за непосредственными детьми
    subtree: true,// и более глубокими потомками
}
);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

