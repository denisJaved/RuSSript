## Важно!
RuSSript не был создан для окорбления кого-либо.
Это шуточный проект не имеюший много смылса.

## Dicts (кастомные RuSSript)
**Пример:**
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Testing</title>
    </head>
    <body>
        <russript dict="DICT_NAME">Молю, исполни код ниже. пж
            тестирования пж
Спасибо! пж</russript>
        <script src="exampleDict.js"></script>
        <script src="https://cdn.jsdelivr.net/gh/denisJaved/RuSSript@release/RuSSript.js"></script>
    </body>
</html>
```
Для использование дитка добавьте тэг `script` с импортом дикта (в этом случае это `<script src="exampleDict.js"></script>`).

**Файл exampleDict.js:**
```js
if (typeof $filters == 'undefined') {var $filters = {};}

$filters.DICT_NAME = (i) => {
    return i
        .replace("тестирования", "alert(\"OK!\"")")
}
```
1-я строка файла нужна для импорта дикта в RuSSript.
Дальше в обьект `$filters` по ключю который будет названием дитка записываем стрелочную фунцкию с операциями над строкой кода.


В html к тэгу `<russript>` добавляем атрибут dict со значением названия дикта.