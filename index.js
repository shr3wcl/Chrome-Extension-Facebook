setInterval(() => {
    document.querySelectorAll('.x193iq5w.xeuugli.x13faqbe.x1vvkbs.x1xmvt09.x1f6kntn.xvq8zen.xo1l8bm.xi81zsa').forEach(each => {
        if (each.textContent.includes("đang phát trực tiếp") || each.textContent.includes("đã phát trực tiếp")) {
            each.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.setAttribute('hidden', 'true');
        }
    })
    document.querySelectorAll(".x1lliihq.x6ikm8r.x10wlt62.x1n2onr6.x1j85h84").forEach(each => {
        if (each.textContent.toLowerCase().includes("được tài trợ")) {
            each.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.setAttribute("hidden", "true");
        }
    })

    // deleteSponsor();

}, 2000)


const deleteSponsor = () => {
    document.querySelectorAll('*').forEach(each => {
        if (each.textContent.includes("Được tài trợ")) {
            let element = document.querySelector(`[aria-labelledby="${each.getAttribute('id')}"]`);
            console.log(element);
        }
    })
}