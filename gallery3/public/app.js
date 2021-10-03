const root = document.getElementById('root')

const homeroot = document.querySelector('#homeroot')

const events = document.querySelectorAll('.events')

const home = document.querySelector('#home')







events.forEach(element => {
    element.addEventListener('click', () => {
            root.innerHTML = ""
            nav.classList.toggle('show__menu')
            toggle.classList.toggle('bx-x')

            db.collection(element.id).get()
            .then( (snapshots) => {
                renderBaseInfo(snapshots.docs)
                renderBase(snapshots.docs)
                renderPosts(snapshots.docs)
                renders()
})   
    })
});




//render base

let renderBase = (docs) => {
    docs.forEach(doc => {
        if(doc.id === 'base'){
            createBase(doc)
        }
    })
}

let createBase = (doc) => {
    let elements = `
        <div class="base">
            <div class="base_show">
                <div class="title"><p> ${doc.data().title} <p></div>
                <img class="base_img" src="${doc.data().img_src}">
                <p id="base_info"> "${doc.data().explain}" </p>
                <button id="wBtn" class="button"> ${doc.data().title} Nedir ? </button>
    
    
                <a href="#post"><button class="button" id="gallery">  Galeri</button> </a>
            </div>
        </div>
    `
    root.innerHTML += elements
}

// render posts

let renderPosts = (docs) => {
    docs.forEach(doc => {
        if(doc.id === 'base'){
            return
        }
        createPosts(doc)
    })
}

let createPosts = (doc) => {
    let post =  
`
    <div id="post" class="posts">
        <img id="img_post" src="${doc.data().img_src}">
        <p id="post_info"> ${doc.data().info} </p>
    </div>
`
    root.innerHTML += post
}


// render baseInfo

let renderBaseInfo = (docs) => {
    docs.forEach(doc => {
        if(doc.id === 'base'){
            createBaseInfo(doc)
        }
    })
}

let createBaseInfo = (doc) => {
    let base_info = `       
        <div class="base_info">
            <div class="box_close"> 
                <i class='bx  bx-x bx-burst bx-right' id="box_close"></i>
            </div>
            <div class="title"><p> ${doc.data().title} <p></div>
            <img class="base_img" src="${doc.data().img_src}">
            <ul >
            <li > ${doc.data().li1} </li>
            <li > ${doc.data().li2}</li> 
            </ul>
            <button class="button" id="ok"> Kapat </button>
        </div>    
    `
    root.innerHTML += base_info
}







// render events

let renders = () => {
    toggleBaseInfo()
}







let toggleBaseInfo = () => {
    const baseInfo = document.querySelector('.base_info')
    const wBtn = document.querySelector('#wBtn')
    const ok = document.querySelector('#ok')

    const closeBox = document.querySelector('#box_close')

    wBtn.addEventListener('click' , () => {
        baseInfo.classList.add('show')
    })

    ok.addEventListener('click' , () => {
        baseInfo.classList.remove('show')
    })    

    closeBox.addEventListener('click' , () => {
        baseInfo.classList.remove('show')
    })

}



// render home

home.addEventListener('click' , () => {
    root.innerHTML = homeroot.innerHTML
    nav.classList.toggle('show__menu')
    toggle.classList.toggle('bx-x')
})


