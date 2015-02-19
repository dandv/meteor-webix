'use strict';

var dataTable = {
  view: 'datatable',
  id: 'datatable',
  autoConfig: true,  // infer columns from data
  select: true,
  sortable: true,
  editable: true, editaction: 'dblclick',
  url:  webix.proxy('meteor', Movies),  // <-- this is it!
  save: webix.proxy('meteor', Movies)
};

var toolbar = {
  view: 'toolbar',
  elements: [
    { view: 'label', label: 'Double-click a row to edit. Click on columns to sort.' },
    { view: 'button', value: 'Add', width: 100,
      click: function () {
        var row = $$('datatable').add({});
        $$('datatable').editCell(row, 'title');
      }
    },
    { view: 'button', value: 'Remove', width: 100,
      click: function () {
        var id = $$('datatable').getSelectedId();
        if (id)
          $$('datatable').remove(id);
        else
          webix.message('Please select a row to delete');
      }}
  ]
};

var detailForm = {
  view: 'form',
  id: 'detail-form',
  elements: [
    { view: 'text', name: 'title', label: 'Movie title' },
    { view: 'text', name: 'year', label: 'Year'},
    { view: 'text', name: 'rating', label: 'Rating'},
    {
      view: 'button', label: 'Save',
      type: 'form',  // a Submit button; 'form' is an odd type name for buttons - http://docs.webix.com/api__ui.button_type_config.html#comment-1863007844
      click: function () {
        this.getFormView().save();
      }
    }
  ]
};

Meteor.startup(function () {

  var webixContainer = webix.ui({
    container: 'webix-playground',
    view: 'layout',
    rows: [
      toolbar,
      dataTable,
      { view: 'resizer' },
      detailForm
    ]
  });

  // The problem with mixing Webix components and non-Webix HTML markup is that Webix UI components won't resize
  // automatically if you place them in an HTML container. You have to resize them manually, like below.
  // Read more at http://forum.webix.com/discussion/comment/3650/#Comment_3650.
  webix.event(window, 'resize', function(){
    webixContainer.resize();
  });

  // http://docs.webix.com/desktop__data_binding.html
  $$('detail-form').bind($$('datatable'));

  console.log('The DataTable is reactive. Try `Movies.insert({title: "Star Wars"})`');

});
