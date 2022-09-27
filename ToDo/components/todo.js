const btn = document.querySelector('#btn')
const remove = document.querySelector('#remove')
const clear0 = document.querySelector('#clear')
const clear1 = document.querySelector('#clear1')
const name = document.querySelector('#inp1')
const body =  document.querySelector('#inp2')
const list = document.querySelector('#list')
const ol = document.querySelector('ol')
const all = document.querySelector('#all')



setInterval(
    () => {
        const chbox = new Array(list.querySelectorAll('input'))
        const miniCbx = new Array(ol.querySelectorAll('input'))
        miniCbx[0].forEach((item) => {
            if (item.checked) {
                checked(item)
            }else {
                // uncheked(item.parentNode)
            }
        })
        chbox[0].forEach(
            (item) => {
                if (item.checked) {
                    complete(item.parentNode)
                }else {
                    uncomplete(item.parentNode)
                }
            }
        )
    },100
)

btn.onclick = () => {
    const data = [name.value, body.value]
    if(data[1] !== '') {
        const post = {
            set post(value) {
                createPost(value)
            }
        }
        post.post = data
    }
    if (data[0] === '') {
        name.placeholder = 'Введите дело!'
    }
    else {
        body.placeholder = 'Введите имя!'
    }

}
remove.onclick = () => {
    removePost()
}
clear0.onclick = () => {
    clear_0()
}
clear1.onclick = () => {
    clear_1()
}


function createPost(value) {
    const rand = Math.floor(Math.random() * 999999)
    const postArr = [value[0], value[1]]
    const pushPost = document.createElement('div')
        pushPost.className = 'post'
        pushPost.id = 'post'
        pushPost.insertAdjacentHTML('afterbegin', '<p id="p0">Дело:</p>')
        pushPost.insertAdjacentHTML('afterbegin', '<h1 id="p1">Название:</h1>')
        pushPost.insertAdjacentHTML('afterbegin', '<input id="cbx" type="checkbox">')
        list.append(pushPost)
    const p0 = document.querySelector('#p0')
    const p1 = document.querySelector('#p1')
        p0.innerHTML = 'Дело: ' + postArr[0]
        p1.innerHTML = '' + postArr[1]
        p0.id = '1' + rand
        p1.id = '2' + rand
    createPanel(value)
    name.value = ''
    body.value = ''
    all.innerHTML = 'Все дела: ' + list.querySelectorAll('div').length
    localStorage.setItem('post', pushPost.outerHTML)
}
function removePost() {
    const posts = new Array(list.querySelectorAll('div'))
    const posts2 = new Array(ol.querySelectorAll('li'))
    const post = posts[0]
    const post2 = posts2[0]
    post[post.length - 1].remove()
    post2[post2.length - 1].remove()
    all.innerHTML = 'Все дела: ' + list.querySelectorAll('div').length
}
function clear_0() {
    name.value = ''
}
function clear_1() {
    body.value = ''
}
function complete(node) {
    node.id = 'complete'
}
function uncomplete(node) {
    node.id = 'post'
}
function createPanel(value) {
    const rand = Math.floor(Math.random() * 999999)
    const postArr = [value[0], value[1]]
    const li = document.createElement('li')
    li.insertAdjacentHTML('afterbegin', '<div id="minipost"><input type="checkbox" id="miniCbx"></div>')
    const pushPost = li.querySelector('#minipost')
    pushPost.insertAdjacentHTML('afterbegin', '<h2 id="p1">Название:</h2>')
    ol.append(li)
    const p1 = document.querySelector('#p1')
    p1.innerHTML = '' + postArr[1]
    p1.id = '2' + rand
}
function checked(item) {
    let items = []
    items.push(item)
    console.log(items)
}

function getPosts() {
    list.innerHTML = localStorage.getItem('post')
}


