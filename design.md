# API

When building scalable applications, you should try to build abstractions that will help you iterate faster. An abstraction hides the complexities and implementation details. You are already familiar with abstractions, think of functions! Let's take a look at an example. Let's say we need to calculate the distance between 2 points. That code could look like this:

```js
const distance = Math.sqrt(Math.pow(x1 - x2, 2) * Math.pow(y1 - y2, 2));
```

If you needed to calculate the distance in different places in your codebase, you'd have to copy and paste that line everywhere. When other people read your code, they also have to concern themselves with what that formula is doing. When trying to fix a bug, you don't want to get slowed down by too many details. We can abstract the details away by making it into a function.

```js
const getDistance(x1, x2, y1, y2) => Math.sqrt(Math.pow(x1 - x2, 2) * Math.pow(y1 - y2, 2));

// Elsewhere in your codebase
const distance = getDistance(1, 5, 3, 7);
```

Now, lets imagine the law of the universe changes and the formula to calculate the distance between 2 points changes. If we hadn't abstracted the details into a function, updating the formula across our codebase would be tedious, and error-prone. Because we have abstracted the details into a function though, we only need to update 1 place in our codebase.

---

In this sample project, we abstract the details of getting the data from the APIs. This allows us to change the APIs we use easily. Let's say the current API we're using is no longer available or a new feature request can't be fulfilled. We can switch to a new API by changing a single place in our codebase.

# Error Handling

In this project, we have a slice that handles showing error messages to the user. This makes it easier to reason about our codebase and make error-related changes because there is a single place that handles anything related to errors. This also acts a form of abstraction.

Each slice can create errors in different ways. Instead of implementing the logic to display the error messages in each slice, we have a single slice that handles that. The other slices dispatch an action that the error slice listens and acts upon.
