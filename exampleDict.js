if (typeof $filters == 'undefined') {var $filters = {};}

$filters.test = (i) => {
    return i
        .replace("hello", "console.log(\"Hello, World!\")")
}