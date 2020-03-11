#!/usr/bin/env node

const isQuote = c => c === '"' || c === "'"
const isOperator = c => '!=<>'.includes(c)
const isNumber = c => c >= '0' && c <= '9'
const isCharacter = c => (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')
const isVariable = c => '_-?'.includes(c) || isCharacter(c) || isNumber(c)
const isBlank = c => c === '\n' || c === '\t' || c === ' ' || c === '\r'
const isInlineBlank = c => c === '\t' || c === ' ' || c === '\r'
const isSign = c => c === '-' || c === '+'

const types = []
for (let i = 0; i < 128; i++) {
  const c = String.fromCharCode(i)
  let n = 0
  if (isVariable(c)) n |= 1
  if (isOperator(c)) n |= 2
  if (isBlank(c)) n |= 4
  if (isQuote(c)) n |= 8
  if (isInlineBlank(c)) n |= 16
  if (isNumber(c)) n |= 32
  if (isSign(c)) n |= 64
  types.push(n)
}
console.log(`
// bitmask character types to boost performance
// generated by bin/character-gen.js
export const TYPES = [${types.join(', ')}]
export const VARIABLE = 1
export const OPERATOR = 2
export const BLANK = 4
export const QUOTE = 8
export const INLINE_BLANK = 16
export const NUMBER = 32
export const SIGN = 64
`.trim())
