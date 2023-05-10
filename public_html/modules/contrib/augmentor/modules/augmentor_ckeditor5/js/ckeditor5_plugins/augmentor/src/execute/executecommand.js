import { Command } from 'ckeditor5/src/core';

export default class ExecuteCommand extends Command {
  constructor(editor, config) {
    super(editor);
    this._config = config;
  }

  execute(augmentor_id = {}) {
    const editor = this.editor;

    const selection = editor.model.document.selection;
    const ranges = selection.getRanges();
    let selectedText = '';

    for (let range of ranges) {
      for (let item of range.getItems()) {
        if (typeof item.data != 'undefined') {
          selectedText = selectedText + item.data + ' ';
        }
      }
    }

    var options = {
      'input': selectedText,
      'augmentor': augmentor_id,
      'type': 'ckeditor',
    };

    editor.model.change(writer => {
      fetch(drupalSettings.path.baseUrl + 'augmentor/execute/augmentor', {
        method: 'POST',
        credentials: 'same-origin',
        body: JSON.stringify(options),
      })
        .then((response) => {
          jQuery('.ajax-progress--fullscreen').remove();

          if (response.ok) {
            return response.json();
          }
          this._showError(JSON.parse(result.responseJSON));
        })
        .then((result) => this._updateCkeditor(result, selection))
        .catch((error) => {
          this._showError(error)
        });
    } );
  }

  _updateCkeditor(result, selection) {
    var output = JSON.parse(result);
    output = output.default.toString();
    const editor = this.editor;
    const viewFragment = editor.data.processor.toView( output );
    const modelFragment = editor.data.toModel( viewFragment );
    editor.model.insertContent(modelFragment, selection);
  }

  _showError(error) {
    const messages = new Drupal.Message();
    messages.clear();
    messages.add(error, { type: 'error' });
    jQuery("html, body").animate({ scrollTop: 0 }, "slow");
  }
}
