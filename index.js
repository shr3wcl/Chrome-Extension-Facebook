const queueElementRemove = [];
setInterval(async () => {
    hideSponsor();
    if ( localStorage.getItem('time-fb') == null ) {
        localStorage.setItem('time-fb', 0);
    } 

    let time = localStorage.getItem('time-fb');

    if (checkNewDay()) {
        localStorage.setItem('time-fb', 0);
    }

    if (time > 300) {
        localStorage.setItem('time-fb', 0);
        alert('Out of time, please stop using facebook and take a break!');
        document.body.remove();
    } else {
        localStorage.setItem('time-fb', parseInt(time) + 1);
    }
    
    checkClock(localStorage.getItem('time-fb'));
    await deleteElement();
}, 1000)

const checkNewDay = () => {
    let currentDate = localStorage.getItem('current-date');
    if (currentDate == null) {
        let date = new Date();
        let newDate = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
        localStorage.setItem('current-date', newDate);
        return true;
    }
    let date = new Date();
    let newDate = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
    if (currentDate != newDate) {
        localStorage.setItem('current-date', newDate);
        return true;
    }
    return false;
}

const checkClock = (time) => {
    let clock = document.querySelector('.clock');
    if (clock) {
        clock.remove();
    }
    let div = document.createElement('div');
    div.classList.add('clock');
    div.style.position = 'fixed';
    div.style.bottom = '10px';
    div.style.left = '10px';
    div.style.zIndex = '9999';
    div.style.backgroundColor = 'white';
    div.style.padding = '10px';
    div.style.borderRadius = '10px';
    div.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
    div.style.fontSize = '16px';
    div.style.fontWeight = 'bold';
    div.style.color = 'black';

    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;
    let timeFormat = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

    div.textContent = `Time: ${timeFormat}`;
    document.body.appendChild(div);
}

const hideSponsor = () => {
    // document.querySelectorAll('.x193iq5w.xeuugli.x13faqbe.x1vvkbs.x1xmvt09.x1f6kntn.xvq8zen.xo1l8bm.xi81zsa').forEach(each => {
    //     if (each.textContent.includes("đang phát trực tiếp") || each.textContent.includes("đã phát trực tiếp")) {
    //         each.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.setAttribute('hidden', 'true');
    //     }
    // })
    document.querySelectorAll(".x1lliihq.x6ikm8r.x10wlt62.x1n2onr6.x1j85h84").forEach(each => {
        if (each.textContent.toLowerCase().includes("sponsored")) {
            queueElementRemove.push(each);
        }
    })
}

const deleteSponsor = () => {
    document.querySelectorAll('*').forEach(each => {
        if (each.textContent.includes("Sponsored")) {
            let element = document.querySelector(`[aria-labelledby="${each.getAttribute('id')}"]`);
            console.log(element);
        }
    })
}

const deleteElement = async () => {
    if (queueElementRemove.length > 0) {
        let element = queueElementRemove.shift();
        element
            .parentElement.parentElement.parentElement.parentElement
            .parentElement.parentElement.parentElement.parentElement
            .parentElement.parentElement.parentElement.setAttribute("hidden", "true");
    }
}