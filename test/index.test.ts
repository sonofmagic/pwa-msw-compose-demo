describe('compile', () => {
  it('hello world', () => {
    const vueCode = fs.readFileSync(HelloWorldVuePath, 'utf8')
    const { descriptor } = parse(vueCode)
    if (descriptor.template?.content) {
      const { code } = compileTemplate({
        filename: 'x-filename',
        id: 'x-id',
        source: descriptor.template?.content,
      })
      expect(code).toMatchSnapshot('template')
    }

    if (descriptor) {
      const { content } = compileScript(descriptor, { id: 'x-id' })
      expect(content).toMatchSnapshot('script')
    }

    const styleCode = descriptor.styles.map((style) => {
      const { code } = compileStyle({
        filename: 'x-filename',
        id: 'x-id',
        source: style.content,
      })
      return code
    }).join('\n/* ------------------- */\n')
    expect(styleCode).toMatchSnapshot('style')
  })
})
