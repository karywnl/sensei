// Setup section: toggle install method (Global / Per Project) and OS (bash / powershell).
const tabBtns = document.querySelectorAll('.setup-tab')
const osBtns = document.querySelectorAll('.os-btn')
const label = document.querySelector('.code-block-label')

let curTab = 'recommended'
let curOs = 'bash'

function update() {
  document.querySelectorAll('.code-content').forEach((el) => {
    el.hidden = !(el.dataset.tab === curTab && el.dataset.os === curOs)
  })
  document.querySelectorAll('.setup-note-text').forEach((el) => {
    el.hidden = el.dataset.tab !== curTab
  })
  tabBtns.forEach((b) => b.classList.toggle('active', b.dataset.tab === curTab))
  osBtns.forEach((b) => b.classList.toggle('active', b.dataset.os === curOs))
  label.textContent = curOs
}

tabBtns.forEach((b) => b.addEventListener('click', () => { curTab = b.dataset.tab; update() }))
osBtns.forEach((b) => b.addEventListener('click', () => { curOs = b.dataset.os; update() }))

update()
