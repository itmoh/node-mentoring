1. basic node info
    что такое нод
        v8 javascript engine
        Event drivin
        Non-blocking standart libraries
        Большинство операций происходит асинхронно(стримы, пайпы)
        Адоны на С++
        Пакетный менеджер
    зачем он нужен, почему он используется, плюсы и минусы
        Распространение Javascript
        http://www.modulecounts.com/
        raspbery, internet of things
        Переиспользование кода(немного)
        Одинаковый стиль на сервере и на клиенте
        большая комьюнити
        большой набор пакетов(функциональности)
        хороший выбор для операций по воду выводу (файлов, других сервисов)
        создание унифицированного интерфейса JSON

    use cases
        Soft realtime applications
        Single page applications
        API
        Streaming data
        Queued inputs

    как он устроен
        http://la.by/blog/nodejs-osnovnye-ponyatiya-i-tehnologii-sozdaniya-veb-prilozheniy
    как можно работать с нодой
    стандартные библиотеки
    enviromement variables

2. Модули
    как подгрузить модуль
        require
        ./текушая директория
        '' - модули в node_modules
        ../выход на верхнюю директорию
        модули-директории, index.js
    типы модулей
        js
        node
        json
    как создать модуль
        module.exports
        exports
    структура module объекта
    кeширование модуля

3. Экосистема
    npm - node package manager
    инициализация приложения
    package.json
    установка сторонних модулей
        с сохранением для разработки, для работы
        установка глобально
    публикация пакетов
    публикация в сторонние репозитории

4. Работа с асинхронным кодом в ноде
    Node-style функции обратного вызова
    Promises (q) Q.denodeify
    Async
    генераторы yield

5. Работа с Stream
    работа с данными по кусочкам
    по умолчанию 65 кб
    https://github.com/substack/stream-adventure
    имплементация pipe
    http
    fs

6. Разработка и дебаг
    nodemon
    node-inspector (--debug-brk)
