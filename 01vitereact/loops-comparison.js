// | Loop Type         | Best Used For                        | Works On                                             | Returns per iteration | Can `break` / `continue`?          |
// | ----------------- | ------------------------------------ | ---------------------------------------------------- | --------------------- | ---------------------------------- |
// | `for`             | Counting, fixed number of iterations | Any                                                  | index-based value     | ✅ Yes                              |
// | `while`           | Run until a condition becomes false  | Any                                                  | custom                | ✅ Yes                              |
// | `do…while`        | Must run at least once               | Any                                                  | custom                | ✅ Yes                              |
// | `for…of`          | Iterating values of iterable objects | Arrays, strings, maps, sets, NodeLists, typed arrays | value                 | ✅ Yes                              |
// | `for…in`          | Iterating object keys                | Objects                                              | key                   | ✅ Yes (but should avoid on arrays) |
// | `Array.forEach()` | Clean iteration over arrays          | Arrays                                               | value, index, array   | ❌ No (cannot break)                |
