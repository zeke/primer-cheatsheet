const fs = require('fs')
const path = require('path')
const css = require('css')
const cssPath = path.join(__dirname, 'node_modules/@primer/css/dist/primer.css')
const raw = fs.readFileSync(cssPath, 'utf8')
const tree = css.parse(raw)
const rules = tree.stylesheet.rules.filter(rule => rule.type === 'rule')
const classes = rules
  .filter(rule => rule.selectors[0].startsWith('.'))
  .map(rule => {
    return { ...rule, definition: stringify(rule.declarations) }
  })
  .sort((a, b) => a.selectors[0].localeCompare(b.selectors[0]))

function stringify (declarations) {
  return declarations
    .filter(declaration => declaration.type === 'declaration')
    .map(({ property, value }) => [property, value].join(': ') + ';')
    .join('\n')
}

module.exports = classes
