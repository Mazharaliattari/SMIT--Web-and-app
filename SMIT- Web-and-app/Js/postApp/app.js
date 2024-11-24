var date = new Date().toUTCString()

function submitPost() {
    var userName = document.getElementById('userName')
    var title = document.getElementById('title')
    var description = document.getElementById('description')
    var msgList = document.getElementById('msg-list-parant')

    if (userName.value.trim() !== '') {
        if (title.value.trim() !== '') {
            if (description.value.trim() !== '') {
                msgList.innerHTML += `
                    <div class="card my-4">
                    <div class="card-header">
                        <span>
                            ${userName.value}
                        </span>
                        <span>
                            ${date}
                        </span>
                    </div>
                    <div class="card-body postCardBody">
                        <h5 class="card-title">${title.value}</h5>
                        <p class="card-text">${description.value}</p>
                    </div>
                </div>

                `
            }
            else {
                alert('Description is Required')
            }
        }
        else {
            alert('Title is Requried')
        }
    }
    else {
        alert('User Name is Required')
    }

    userName.value= ''
    title.value = ''
    description.value = ''
}