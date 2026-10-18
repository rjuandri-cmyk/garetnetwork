// MODUL TAMBAHAN: Garet Network Settings & Language Handler
function changeLanguage(lang) {
    localStorage.setItem('garet_lang', lang);
    if(lang === 'en') {
        alert("🌍 Language switched to English (Simulated).");
    } else {
        alert("🇮🇩 Bahasa diubah ke Bahasa Indonesia.");
    }
}

function saveSettings() {
    alert("✅ Pengaturan preferensi berhasil disimpan!");
}

window.addEventListener('DOMContentLoaded', (event) => {
    let savedLang = localStorage.getItem('garet_lang') || 'id';
    let langSelector = document.getElementById('language-selector');
    if (langSelector) {
        langSelector.value = savedLang;
    }
});
