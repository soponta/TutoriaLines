document.addEventListener('DOMContentLoaded', function() {
    var _0x3933c2 = document.getElementById('theme-toggle')
    var _0x1177b2 = document.getElementById('auto-theme')
    Pu.sLS('themeToggle', Pu.gLS('themeToggle') || 'true')
    Pu.sLS('autoTheme', Pu.gLS('autoTheme') || 'true')
    _0x3933c2.addEventListener('change', function() {
        if (_0x3933c2.checked) {
            Pu.sLS('themeToggle', 'true')
        } else {
            Pu.sLS('themeToggle', 'false')
        }
    })
    _0x1177b2.addEventListener('change', function() {
        if (_0x1177b2.checked) {
            Pu.sLS('autoTheme', 'true')
        } else {
            Pu.sLS('autoTheme', 'false')
        }
    })
})
window.onload = function() {
    var _0x536983 = document.getElementById('theme-toggle')
    if (Pu.gLS('themeToggle') === 'true') {
        _0x536983.checked = true
        let _0x465315 = Number(
            (Pu.gLS('webTheme') || 'theme0').replace(/theme/gi, '')
        )
        Pu.sLS('webTheme', 'theme' + (_0x465315 < 10 ? _0x465315 + 1 : 0))
    } else {
        _0x536983.checked = false
    }
    var _0xdd9654 = document.getElementById('auto-theme')
    if (Pu.gLS('autoTheme') === 'true') {
        _0xdd9654.checked = true
    } else {
        _0xdd9654.checked = false
    }
    setInterval(function() {
        if (_0xdd9654.checked) {
            let _0x5f3b8b = Number(
                (Pu.gLS('webTheme') || 'theme0').replace(/theme/gi, '')
            )
            _0x5f3b8b = _0x5f3b8b < 10 ? _0x5f3b8b + 1 : 0
            Pu.sLS('webTheme', 'theme' + _0x5f3b8b)
            webTheme('theme' + _0x5f3b8b)
            modeL()
        }
    }, themeToggleInt)
}
