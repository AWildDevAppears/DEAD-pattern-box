# Pattern Box
A platform for storing patterns and best practices for coding

## What it uses
* Angular
* Bootstrap
* Google code prettify
* Scss for css compilation
* Gulp to run a server that auto compiles sass


## How do I compile the sass in this project?

There are two ways to compile sass in this project

1. Compass

  Running

  ```
    compass compile .
  ```

  will compile all of the sass in the project

2. Gulp

  Running

  ```
    gulp sass
  ```

  will also compile all the sass in the project

  ```
    gulp serve
  ```

  will run a development server which automatically compiles your sass


##  I want to add a new sass file, where does it go?

  There are several different folders that can exist in the scss/ directory

  the structure should be something like this

  ```
  {
    "scss": {
      "base" : {
        _varaiables.scss
      },
      "components": {
      }
    }
  }
  ```

  All of your sass files that you will not pull directly into the page should take an underscore before their name, i.e:

  ```
    _header.scss  // will be included in main.scss
    main.scss     // will be directly compiled into main.css and included in index.html
  ```

## How do I structure my sass?

  Your basic structure is:

  ```
    .class-name {
      firstattr: attr;
      secondattr: attr;
    }
  ```

  Note the space after the class name and the new line at the end. the semicolons are required in sass/less, but even if we were writing pure css it would be good practice to put them in.

## Variables?

  Constant variables (i.e: main colors, break points etc) go in _variables.scss, but you can add variables to the top of your scss file if they are only used in that location, IF, they quote the variables in _variables.scss

