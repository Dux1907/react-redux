## Redux Intro

Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.
<br>
Redux can be described in three fundamental principles:
<ul>
  <li>1.Single source of truth​ The global state of your application is stored in an object tree within a single store.</li>
<li>State is read-only​ The only way to change the state is to emit an action, an object describing what happened.</li>
<li>Changes are made with pure functions​.</li>
</ul>
<br>
###Working:
<ol>
  <li>The whole global state of your app is stored in an object tree inside a single store. The only way to change the state tree is to create an action, an object describing what happened, and dispatch it to the store. To specify how state gets updated in response to an action, you write pure reducer functions that calculate a new state based on the old state and the action.
    <li>Instead of mutating the state directly, you specify the mutations you want to happen with plain objects called actions. Then you write a special function called a reducer to decide how every action transforms the entire application's state.</li>
<li>In a typical Redux app, there is just a single store with a single root reducing function. As your app grows, you split the root reducer into smaller reducers independently operating on the different parts of the state tree. This is exactly like how there is just one root component in a React app, but it is composed out of many small components.</li>
</ol>



