const glyphsContainer = document.getElementById('glyphsContainer')

async function loadGlyphs() {
  try {
    const res = await fetch('../data/glyphs.json')
    const glyphs = await res.json()
    console.log(glyphs)
    renderGlyph(glyphs.glyphs)
  } catch (err) {
    console.error(err)
  }
}

function renderGlyph(glyphs) {
  const htmlContent = glyphs
    .map((g) => {
      return `<div class="grid-item">
        <img src="./images/glyphs/${g.file}"></img>
        ${g.name}
      </div>`
    })
    .join('')
  glyphsContainer.innerHTML = htmlContent
}

async function main() {
  await loadGlyphs()
}

main()
