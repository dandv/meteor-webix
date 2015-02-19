'use strict';

Tinytest.add('Visual check', function (test) {
  test.isTrue(webix.ui, 'webix is defined');

  var webixDropZone = document.createElement('div');
  webixDropZone.setAttribute('style', 'height :500px');
  document.body.appendChild(webixDropZone);

  webix.ui({
    container: webixDropZone,
    rows:[
      { view: 'template', type: 'header', template: 'Webix works' },
      { view: 'template', template: 'You can write <b>HTML</b> here' },
      { view: 'resizer' },
      { view: 'datatable', autoConfig:true, data: ['a', 'b'] }
    ]
  });

});
