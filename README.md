# ember-cli-pegjs

An [ember-cli](https://github.com/stefanpenner/ember-cli) addon for generating [PegJS](https://github.com/dmajda/pegjs) parser from grammar file.

## Installation

```bash
npm install --save-dev ember-cli-pegjs
```

## Usage

By default this addon will generate a parser for every file with the _pegjs_ extension, the generated parser 
extension is _js_ and will be located in the same folder as the grammar file.

The parser is exported as an ES6 module and can be simply imported as any other Ember CLI file.

You can control how the parser code is exported by specifying options using the pegOptions config property:
```
var app = new EmberApp({
  ...
  pegOptions: {
    wrapper: function (src, parser) {
      return 'var Parser = ' + parser + ";\nvar parse = Parser.parse, SyntaxError = Parser.SyntaxError;\nexport {SyntaxError, parse};\nexport default parse;";
    }
  }
});
```