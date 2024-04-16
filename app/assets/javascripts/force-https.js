// NOTE: 強制的に http -> https にする
document.addEventListener('DOMContentLoaded', () => {
	setTimeout(() => {
		document.querySelectorAll('a[href^="http://mapwarper.h-gis.jp"]')
			.forEach(anchor => (anchor.href = anchor.href.replace(/^http:\/\//, 'https://')))
	}, 1000)
})

