const glyphsContainer = document.getElementById('glyphsContainer')
const searchBox = document.getElementById('searchBox')

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

async function searchBoxChange(value) {
  try {
    const res = await fetch('../data/glyphs.json')
    const glyphs = await res.json()
    const filteredGlyphs = glyphs.glyphs.filter((g) => g.name.toLowerCase().includes(value.toLowerCase()))
    console.log(filteredGlyphs)
    renderGlyph(filteredGlyphs)
  } catch (err) {
    console.error(err)
  }
}

function renderGlyph(glyphs) {
  const htmlContent = glyphs
    .map((g) => {
      return `<div class="grid-item">
        <img src="./images/glyphs/${g.file}" class="glyph-image"></img>
        <div class="glyph-name">${g.name}</div>
      </div>`
    })
    .join('')
  glyphsContainer.innerHTML = htmlContent
}

async function main() {
  await loadGlyphs()
}

main()
