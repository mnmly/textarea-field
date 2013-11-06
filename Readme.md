
# textarea-field

  `textarea` field for [segmentio/form](http://github.com/segmentio/form)

## Installation

  Install with [component(1)](http://component.io):

    $ component install mnmly/textarea-field

## Usage

```
  var Form = require('form');
  var TextareaField = require('textarea-field');

  Form.field('textarea', TextareaField);

  var form = new Form({ post: 'Fred is super awesome dude.\n\nRight?' });

  form.field({
    type: 'textarea',
    name: 'post',
    label: 'Post'
  });

  form.field({
    type: 'submit',
    name: 'submit',
    label: 'Do it'
  });
  document.body.appendChild(form.el);
```


## License

  MIT
