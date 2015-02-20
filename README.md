# Meteor.js - Webix UI integration

This is work in progress on integrating [Meteor.js](http://meteor.com),
the best full-stack JavaScript framework (see [why](http://www.meteorpedia.com/read/Why_Meteor))
and [Webix](http://webix.com), arguably the best UI widgets library (see an
[extensive comparison on StackOverflow](http://stackoverflow.com/questions/200284/what-are-alternatives-to-extjs)).

Stay tuned by clicking **Watch**/**Star** on GitHub.

## Demo

[CRUD example](http://webix.meteor.com) • [source](examples/crud) • [Meteor DevShop talk video](http://youtube.com/watch?v=s3ylMIf_0XU)


## Documentation

Use Meteor collections as usual and simply specify `webix.proxy('meteor', Collection|Cursor)` for the
`url` and `save` properties of the component:

```js
Movies = new Mongo.Collection('movies');

webix.ui({
  view: 'datatable',
  autoconfig: true,
  editable: true,
  url:  webix.proxy('meteor', Movies.find()),
  save: webix.proxy('meteor', Movies)
});
```

More detailed documentation in the [webix-meteor-data README](../../../webix-meteor-data).


## What works

* package tests (font loading, visual check)
* load and save data to/from reactive DataTable, List, and other widgets backed by
  [linear](http://docs.webix.com/desktop__dynamic_loading.html) data structures


## Needs testing

* paging
* dynamic data loading
* hierarchical widgets (Tree, TreeTable)


## TODO

* Webix wrapper for Meteor/Blaze reactive templates
* routing
* persist order of List/DataTable elements reordered via drag-and-drop (similar to
  [rubaxa:sortable](https://atmospherejs.com/rubaxa/sortable))
* reactive [Multiview](http://docs.webix.com/desktop__multiview.html), similar to
  [templates:tabs](https://atmospherejs.com/templates/tabs)


## Webix admin app demo

[![Webix admin app demo screenshot](Webix-admin_app.png)](http://webix.com/demos/admin-app/#!/app/dashboard)


# Licensing

Author: Dan Dascalescu ([@dandv](http://github.com/dandv))

Acknowledgments: the Webix team, and especially Maksim Kozhukh ([@mkozhukh](https://github.com/mkozhukh)).  
Webix is (C) 2013-2015 XB Software and is available under commercial and
[GPLv3 licenses](http://forum.webix.com/discussion/2114/webix-gpl-as-ui-on-commercial-server).

This Webix package for Meteor is published under the MIT license.

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
