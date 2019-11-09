# Feed-Reader-Testing


 This project build with `html` , `css` and `JavaScript`.

## Table of contents

* [Author](#author)
* [Description](#description)
* [Installation](#installation)
* [Run The Application](#Run-the-application)
* [References](#References)

## Author

>Wafaa Alshaikhi 2019

## Description

This project builds To practice using `Jasmin` framework unit testing .

## Installation

The `jasmine` test is in `jasmine/spec/feedreader.js` file .

There are two ways to run jasmine:

* Through **CDNs**:

You should make sure that the `index.html` include the **jasmine library** that needed .

``` HTML

<script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/jasmine.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/jasmine-html.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/boot.min.js"></script>
```

* Through **local stand alone version:**

Download the jasmine library and save it in a folder named `lib/jasmine{version-number}` and reference them in `HTMindex.html`

```Html

<link rel="shortcut icon" type="image/png" href="jasmine/lib/jasmine-{#.#.#}/jasmine_favicon.png">
<link rel="stylesheet" type="text/css" href="jasmine/lib/jasmine-{#.#.#}/jasmine.css">

<script type="text/javascript" src="jasmine/lib/jasmine-{#.#.#}/jasmine.js"></script>
<script type="text/javascript" src="jasmine/lib/jasmine-{#.#.#}/jasmine-html.js"></script>
<script type="text/javascript" src="jasmine/lib/jasmine-{#.#.#}/boot.js"></script>
```

Follow [this link](https://github.com/jasmine/jasmine) for more explanation.

## Run the application

You can run the application in two ways :

* Download as .zip file
* Clone or fork this project:

```html
https://github.com/wafaades1417/FeedReaderTesting.git
```

After that, open the `index.html` and check the test results.

## References

[Jasmine documentation](https://jasmine.github.io/pages/getting_started.html)

[IIFE Function](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

[Feed Reader Testing](https://www.youtube.com/watch?v=_XwH-xfvydw&t=154s)
