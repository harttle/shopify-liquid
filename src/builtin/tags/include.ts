import { assert } from '../../util/assert'
import { Expression, Hash, Emitter, TagToken, Context, ITagImplOptions } from '../../types'
import { value, quotedLine } from '../../parser/lexical'
import BlockMode from '../../context/block-mode'

const staticFileRE = /[^\s,]+/
const withRE = new RegExp(`with\\s+(${value.source})`)

export default {
  parse: function (token: TagToken) {
    let match = staticFileRE.exec(token.args)
    if (match) this.staticValue = match[0]

    match = value.exec(token.args)
    if (match) this.value = match[0]

    match = withRE.exec(token.args)
    if (match) this.with = match[1]
  },
  renderSync: function (ctx: Context, hash: Hash, emitter: Emitter) {
    let filepath
    if (ctx.opts.dynamicPartials) {
      if (quotedLine.exec(this.value)) {
        const template = this.value.slice(1, -1)
        filepath = this.liquid.parseAndRenderSync(template, ctx.getAll(), ctx.opts)
      } else {
        filepath = new Expression(this.value).valueSync(ctx)
      }
    } else {
      filepath = this.staticValue
    }
    assert(filepath, `cannot include with empty filename`)

    const originBlocks = ctx.getRegister('blocks')
    const originBlockMode = ctx.getRegister('blockMode')

    ctx.setRegister('blocks', {})
    ctx.setRegister('blockMode', BlockMode.OUTPUT)
    if (this.with) {
      hash[filepath] = new Expression(this.with).evaluateSync(ctx)
    }
    const templates = this.liquid.getTemplateSync(filepath, ctx.opts)
    ctx.push(hash)
    this.liquid.renderer.renderTemplatesSync(templates, ctx, emitter)
    ctx.pop()
    ctx.setRegister('blocks', originBlocks)
    ctx.setRegister('blockMode', originBlockMode)
  },

  render: async function (ctx: Context, hash: Hash, emitter: Emitter) {
    let filepath
    if (ctx.opts.dynamicPartials) {
      if (quotedLine.exec(this.value)) {
        const template = this.value.slice(1, -1)
        filepath = await this.liquid.parseAndRender(template, ctx.getAll(), ctx.opts)
      } else {
        filepath = await new Expression(this.value).value(ctx)
      }
    } else {
      filepath = this.staticValue
    }
    assert(filepath, `cannot include with empty filename`)

    const originBlocks = ctx.getRegister('blocks')
    const originBlockMode = ctx.getRegister('blockMode')

    ctx.setRegister('blocks', {})
    ctx.setRegister('blockMode', BlockMode.OUTPUT)
    if (this.with) {
      hash[filepath] = await new Expression(this.with).evaluate(ctx)
    }
    const templates = await this.liquid.getTemplate(filepath, ctx.opts)
    ctx.push(hash)
    await this.liquid.renderer.renderTemplates(templates, ctx, emitter)
    ctx.pop()
    ctx.setRegister('blocks', originBlocks)
    ctx.setRegister('blockMode', originBlockMode)
  }
} as ITagImplOptions
