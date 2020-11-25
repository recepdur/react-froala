import React from 'react';

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import Editor from 'react-froala-wysiwyg';
import 'froala-editor/js/plugins.pkgd.min.js';
import Froalaeditor from 'froala-editor';
Froalaeditor.DefineIcon('insert', {NAME: 'plus', SVG_KEY: 'add'});
  Froalaeditor.RegisterCommand('insert', {
    title: 'Insert HTML',
    focus: true,
    undo: true,
    refreshAfterCallback: true,
    callback: function () {
      this.html.insert('My New HTML');
    }
  });

function App() {
  return (
    <div className="App">
      <Editor
        config={{
          toolbarButtons:['bold', 'italic', '|', 'insert', 'getPDF', 'html'],
          events: {
            initialized: function () {
              console.log('Hello')
            }
          }
        }}
      />
    </div>
  );
}

export default App;
