1. basic node info
    что такое нод
        v8 javascript engine
        Event drivin
        Non-blocking standart libraries
        Большинство операцый происходит асинхронно(стримы, пайпы)
        Адоны на С++
        Пакетный менеджер
    зачем он нужен, почему он используется, плюсы и минусы
        Распространение Javascript
        raspbery, internet of things
        Переиспользование кода(немного)
        Одинаковый стиль на сервере и на клиенте
        большая комьюнити
        большой набор пакетов(функциональности) узнать число?
        хорошый выбор для операцый по воду выводу (файлов, других сервисов)
        создание унифицированного интерфейса JSON

    use cases
        Soft realtime applications
            chat
        Single page applications
        API
        Streaming data
        Queued inputs

    как он устроен
        http://la.by/blog/nodejs-osnovnye-ponyatiya-i-tehnologii-sozdaniya-veb-prilozheniy
    адоны на с/с++
    как можно работать с нодом
    стандартные библиотеки



2. Модули
    как подгрузить модуль
        require
        ./текушая директория
        ../ родительская директория
        '' - модули в node_modules
    типы модулей
        js
        node?
        json
    2 вида загружаемых модулей
    модули-директории, index.js
    как создать модуль
        module.exports
        exports
    структура module объекта
    куширование модуля

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
    по умолчанию 65 кб?
    https://github.com/substack/stream-adventure
    имплементация pipe, илья с 50 минуты


6. Разработка и дебаг
    nodemon
    node-inspector (--debug-brk)
    Утечки памяти

7. Примеры
    асинхронность
    запустить с последними рлюшкам esmascript (--harmony)