Lesson 206: What is Object-Oriented Programming?

- A prograamming paradigm that is based on the concept of objcts
- A paradigm is the style of the code
- We use objects to model (describe) real-world or abstract features

- Objects may contain data (properties) and code (methods)
- By using objects, we pack data and the corresponding behavior into one block

- In OOP, objects are self-contained pieces/blocks of code

- Objects are building blocks of applications, and interact with one another


- Interactions happen through a public interface (API)
- Methods that the code outside of the object can access and use to 
-   communicate with the object

- OOP was developed with the goal of organizing code, 
-   to make it more flexible and easier to maintain ('avoid spaghetti code')

- A Class is like a blueprint from which we can create new objects

- JavaScript does NOT support real classes
- The Class syntax in JavaScript works a bit differently than in other languages

- The idea of creating objects form a blueprint is still a useful mental model
- The Class is the plan, and the plan does not contain the real world data
- It does contain the behavior that is associated with the data

- An object created through a Class is called an instance of that class
- An instance of the object has data
- An instance of the object can be used in our code
- The class itself is not an object

- The Class can be used to create as many instances as we need in our application

- How do we actually design a class?
- How do we model real-world data into classes?
- How do we actually plan and design a house?

- Four fundamental principles of OOP:
- Abstraction
- Encapsulation
- Inheritance
- Polymorphism

- Abstraction: Ignoring or hiding details that odn't matter, allowing us to get an overview perspective of the thing we're implementing, instead of messing with the details that don't really matter to our implementation
- Like a phone operating as a black box without us seeing what is happening inside
- Low-level details are hidden from the user

- Encapsulation: Keeping properties and methods private inside the Class, so they are not accessible from outside the Class.  Some methods can be exposed as a public interface (API).
- The private keyword is not used in JavaScript at this time
- Outside code cannot access private properties
- Private properties are still accessible from inside the Class
- External code is prevented form manipulating internal properties and states
- State = Object data
- Allows to change internal implementation without the risk of breaking external code
- Only leave essential methods public

- Inheritance: When we have two Classes that are closely related (user and admin) we can have one Class inherit from the other so we don't duplicate code
- Parent class and child class...the child class extends the parent class
- User is the parent class and admin is the child class
- Admin inherits all properties and methods from user class, and adds more functionality
- An admin is a type of user, but also an extended user
- Inheritance: Making all properties and methods of a certain class available to a child class, forming a hierarchical relationship between classes.  This allows us to reuse common logic and to model real world relationships.  
- The child class can have its own methods and properties

- Polymorphism: A child class can overwrite a method it inherited from a parent class (in simple terms)
- A method in a child class can be rewritten and will overwrite the method inherited form the original class














