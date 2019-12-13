#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const render = require('@github-docs/render-content')
const classes = require('../classes')
const primerModule = require('../node_modules/@primer/css/package.json')

main()

async function main () {
  fs.copyFileSync(
    path.join(__dirname, '../node_modules/@primer/css/dist/primer.css'),
    path.join(__dirname, '../primer.css')
  )

  const template = fs.readFileSync(path.join(__dirname, '../template.md'), 'utf8')
  const context = { classes, primerModule }
  const output = await render(template, context)
  fs.writeFileSync(path.join(__dirname, '../index.html'), output)
}
