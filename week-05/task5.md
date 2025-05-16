## **Section 1 – Recap**

1. **What does ISP stand for in terms of web networking?**  
   **Correct Answer:** **Internet Service Provider**  
   (Your choice of “Internet Service Provider” is correct.)

2. **What is the primary difference between a pull request and an issue in GitHub?**  
   **Correct Answer:** **A pull request is used for suggesting code changes, while an issue is used for tracking tasks, bugs, or enhancement requests.**  
   (Your choice was correct.)

3. **For a banking application where data integrity and ACID compliance are critical, which database type is typically preferred?**  
   **Correct Answer:** **SQL**  
   (Your choice was correct.)

4. **What is the output of the following code?**
   ```js
   let a = 10;
   let b = "10";
   let c = 9;
   
   console.log(a !== b, a != b, c++ === a, c == b);
   ```
   - `a !== b` → `10 !== "10"` → **true** (strict inequality sees different types)  
   - `a != b` → `10 != "10"` → **false** (loose inequality sees them as equal)  
   - `c++ === a` → first use `c` (which is 9), compare `9 === 10` → **false**, then `c` becomes 10  
   - `c == b` → now `c` is 10, `b` is `"10"`, loose equality → **true**  

   **Correct Answer:** **`true false false true`**  
   (Your choice of “true false false true” is correct.)

5. **Will this code result in an exception?**
   ```js
   const a = [1, 5, 8, 9, 3];
   a[2] = 4;
   ```
   **Correct Answer:** **No, because you can mutate the array elements even if `a` is declared `const`. You just cannot reassign the entire `a`.**  
   (Your choice was correct.)

6. **What is the output of the below code?**
   ```js
   let a = [1, 2, 4, 8, 16].slice(2);
   console.log(a);
   ```
   - `.slice(2)` starts at index 2 → `[4, 8, 16]`

   **Correct Answer:** **`[4, 8, 16]`**  
   (Your choice was correct.)

7. **The splice array method can …**  
   - Add elements to the array  
   - Remove a segment from the array  
   - Replace a segment with another  
   **Correct Answer:** **All of these**  
   (Your choice of “all of these” is correct.)

8. **What is the output of this snippet, and what happens if we replace `var` with `let`?**
   ```js
   var x = 3;
   while (true) {
     if (x === 5) break;
     console.log(x);
     var x = 5;
   }
   var x = 5;
   ```
   - Because `var x` is hoisted, the first loop iteration prints `3`.  
   - Next iteration sees `x === 5`, so `break`.  
   - **Output:** `3` (just once), then it breaks out of the loop.  

   **If we replace `var` with `let`:**  
   - We get a **ReferenceError** in the loop, because `let x = 5` inside the block creates a new `x` in the “temporal dead zone” before it is declared.

   *(Make sure your written explanation or short answer reflects that it logs “3” once and then breaks.  If you wrote something else, adjust accordingly.)*

9. **(If applicable) What is the output?**  
   If your form has the snippet:
   ```js
   let a = 5;
   let b = 5;
   console.log(++b - a);
   ```
   - `++b` makes `b` → 6, then `6 - 5 = 1`.  
   **Correct Answer:** **`1`**  

   (Sometimes the question includes more lines, but if it’s just this one `console.log`, the answer is `1`.)

10. **You have 2 arrays `a` and `b`; choose the correct way to create a new array that merges them (with `a`’s elements first).**  
    **Correct Answer:** **`let c = a.concat(b);`**  
    (Your choice was correct.)

11. **You can use ____ to terminate an outer loop from a nested loop in JavaScript.**  
    **Correct Answer:** **`break` *with a label* for the outer loop**  
    (Your choice was correct.)

12. **Choose all the destructive methods between the following array methods** (`slice`, `splice`, `sort`, `concat`, `pop`):  
    - **`splice`** (destructive)  
    - **`sort`** (destructive)  
    - **`pop`** (destructive)  
    - `slice` (not destructive)  
    - `concat` (not destructive)  

    **Correct Answer:** **splice, sort, pop**  
    (Your selection of `splice, sort, pop` is correct.)

13. **Why does `numbers.sort()` fail to sort numerically, and how do we fix it?**  
    - By default, `.sort()` converts elements to strings and compares lexicographically.  
    - To sort numbers correctly, pass a compare function, e.g.  
      ```js
      numbers.sort((a, b) => a - b);
      ```  
    (Your explanation likely matches this.)

14. **What is the output of the following code?**
    ```js
    let numbers = [4, 6, 3, 5, 2];
    
    for (let i = 0; i < numbers.length; i++) {
      console.log(numbers[i]);
      if (i == 2) continue;
    }
    ```
    - The `console.log` happens **before** the `continue`, so **all** elements get logged.  
    - **Output:** `4 6 3 5 2`  
    (Your choice of “4 6 3 5 2” is correct if that’s what you picked.)

---

## **Section 2**

1. **What is the result of the following?**
   ```js
   console.log(false || true && false);
   ```
   - `true && false` → `false`  
   - `false || false` → `false`  
   **Correct Answer:** **false**  
   (Your selection of “false” is correct.)

2. **Single line using `&&` to log `"hello <name>"` if `name` exists, otherwise do nothing**  
   **Correct Answer** (example):
   ```js
   name && console.log(`hello ${name}`);
   ```
   (Your snippet looks fine.)

3. **(Short-answer snippet with `??` and `||`)**  
   If you had something like:
   ```js
   console.log(val12 ?? 'Saif' || 'Shahaby');
   ```
   - Remember: `??` returns the left operand if it’s *not* `null` or `undefined`.  
   - If `val12` is `null` or `undefined`, it becomes `'Saif'`. Then `'Saif' || 'Shahaby'` → `'Saif'`.  
   - If `val12` is e.g. `false`, then `val12 ?? 'Saif'` → `false`, and `false || 'Shahaby'` → `'Shahaby'`.  
   *(Just be sure your short answer explanation matches that logic.)*

4. **Explain the difference between `||` and `??` with `score = 0`:**
   ```js
   let score = 0;
   score || console.log("Failed");      // logs "Failed" because 0 is falsy
   score ?? console.log("Did not compete");  // does NOT log because 0 is neither null nor undefined
   ```
   - `||` uses *falsiness*  
   - `??` uses *null or undefined* checking  
   (Your explanation is correct.)

5. **Choose all the correct ways to define a new array in JavaScript:**  
   - `let a = [];`  
   - `let a = new Array(size);`  
   - `let a = [1, 2, 4, 8, 16];`  
   (These three are valid; things like `let a[size];` or `let a = {1,2,3};` are **not** valid array definitions.)

6. **What is the output of the following?**
   ```js
   let a = [1, 2, 4, 5];
   a[13] = 6;
   console.log(a.length);
   ```
   - The highest assigned index is 13, so the length becomes `14`.  
   **Correct Answer:** **14**  
   (Your selection of 14 is correct.)

7. **To add & remove an element from the end of an array**  
   **Correct Answer:** **`push`, `pop`**  
   (Yours is correct.)

8. **To add & remove an element from the start of an array**  
   **Correct Answer:** **`unshift`, `shift`**  
   (Yours is correct.)

9. **What does `indexOf` return when the given element does not exist in the array?**  
   **Correct Answer:** **-1**  
   (Yours is correct.)

---
