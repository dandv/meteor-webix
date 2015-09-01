# Meteor+Webix CRUD + REST API example

This demo uses [webix:webix](https://atmospherejs.com/webix/webix) and [nimble:restivus](https://github.com/kahmali/meteor-restivus) to create a simple CRUD application with a REST API.


## Installation

First you need to download the submodules. In the main directory (i.e. the parent of `examples`), run:

    git submodule update --init

Then `cd examples/crud` and run `meteor`. On Windows, run `run.bat`.

The REST API endpoint will be at `/api/movies`.

A live demo is at http://webix.meteor.com.


## Changing skins

Run

    meteor remove webix:skin-touch

and add another [available skin](https://atmospherejs.com/?q=webix%20skin) instead, such as:

    meteor add webix:skin-flat


# Licensing

Author: Dan Dascalescu ([@dandv](http://github.com/dandv))

Acknowledgments: the Webix team, and especially Maksim Kozhukh ([@mkozhukh](https://github.com/mkozhukh))

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
