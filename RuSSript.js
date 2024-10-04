// https://cdn.jsdelivr.net/gh/denisJaved/RuSSript@release/RuSSript.js
console.log("  %c PARSER %c %c INFO %c   Creating filters", "background: purple; border-radius: 5px;", "", "background: green; border-radius: 5px;", "");
if (typeof $filters == 'undefined') {var $filters = {};}




$filters.builtin = (i) => {
    return i.replace("девтулсы",    "console") // Девтулсы
            .replace("простоТекст", "log")
            .replace("покричи",     "warn")
            .replace("хуйня",       "error")

            .replace("делай", "function")     // Keywors
            .replace("побегай", "for")
            .replace("запомни", "let")
            .replace("сделайТатуировку", "const")
            .replace("@everyone", "var")
            .replace("если", "if")
            .replace("проверь", "if")
            .replace("иначе", "else")

            .replace("наоборот", "!")         // Symbols
            .replace("не", "!")
            .replace("это", "=")
            .replace("тоже самое, что", "===")
            .replace("равны", "===")
            .replace("для", "=>")
            .replace("разное", "!=")

            .replace("эу", "document")        // HTML
            .replace("вычислиПоСчётчеку", "getElementById")
            .replace("вычислиПоКлассу", "getElementsByClassName")
            .replace("вычислиПоТэгу", "getElementsByTagaAme")

            .replace("КРИКНИ!", "alert")
            .replace("УВЕРЕН?!", "confirm")
            .replace("УВЕРЕН!?", "confirm")
}



console.log("  %c PARSER %c %c INFO %c   Gathering scripts", "background: purple; border-radius: 5px;", "", "background: green; border-radius: 5px;", "");
scripts = [].slice.call(document.getElementsByTagName("russript"));
console.log("  %c PARSER %c %c INFO %c   Found " + scripts.length + " RuSSript scripts", "background: purple; border-radius: 5px;", "", "background: green; border-radius: 5px;", "");
scripts.forEach(element => {
    element.style.display = "none";
    parse(element);
});
function parse(script) {
    let line = 0;
    let t = script.innerText.split("\n");
    let filter = $filters.builtin;
    if (script.getAttribute("dict")) {
        filter = $filters[script.getAttribute("dict")];
    }
    const last = t.length - 1;
    if (t.length < 2) {
        console.error("%c PARSER %c %c FATAL %c  Программист не достаточно вежлив", "background: purple; border-radius: 5px;", "", "background: green; border-radius: 5px;", "");
        return
    }
    if (t[0] != "Молю, исполни код ниже. пж") {
        console.error("%c PARSER %c %c FATAL %c  Программист не достаточно вежлив", "background: purple; border-radius: 5px;", "", "background: green; border-radius: 5px;", "");
        return
    }
    if (t[last] != "Спасибо! пж") {
        console.error("%c PARSER %c %c FATAL %c  Программист не достаточно вежлив", "background: purple; border-radius: 5px;", "", "background: green; border-radius: 5px;", "");
        return
    }
    t.forEach((_line) => {
        if (line != 0 && line != last) {
            pp = _line;
            if (!_line.endsWith(" пж")) {
                console.error("%c PARSER %c %c FATAL %c  Программист не достаточно вежлив", "background: purple; border-radius: 5px;", "", "background: green; border-radius: 5px;", "");
                return
            }
            pp = pp.replace(" пж", ";")
            pp = filter(pp)
            eval(pp);
        }
        line++;
    });
}