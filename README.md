## 🐫 Kata: Convert to PascalCase

### 📝 Description

This kata is **inspired by an exercise
on [Codewars (CamelCase Method)](https://www.codewars.com/kata/587731fda577b3d1b0001196)**, but has been **enhanced with
additional complexity using ChatGPT**.

Write a method (or function, depending on the language) that converts a given string to **PascalCase**.

In this version, the function must not only remove spaces, but also handle and remove the following common word
separators:

- Spaces (` `)
- Dashes (`-`)
- Underscores (`_`)
- Colons (`:`)

Each word in the string should have its **first letter capitalized**, and **all separators must be removed**.

---

### 💡 Examples

```text
"hello_case"             --> "HelloCase"
"camel-case word"        --> "CamelCaseWord"
"my:example_string"      --> "MyExampleString"
"test-case_example:here" --> "TestCaseExampleHere"
```

---

### 📌 Constraints

- Do **not** use built-in functions that directly convert to PascalCase.
- Only alphabetic characters are expected; assume the input will not contain punctuation other than the specified
  separators.
- An empty string should return an **empty string**.

---

### ✅ TDD Test Cases

Here are 10 test cases to guide your TDD workflow:

| Input                     | Expected Output        |
|---------------------------|------------------------|
| `""`                      | `""`                   |
| `"hello"`                 | `"Hello"`              |
| `"hello world"`           | `"HelloWorld"`         |
| `"hello-world"`           | `"HelloWorld"`         |
| `"hello_world"`           | `"HelloWorld"`         |
| `"hello:world"`           | `"HelloWorld"`         |
| `"hello_world-test:case"` | `"HelloWorldTestCase"` |

---
