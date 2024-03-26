const progress = document.getElementById('progress');
const fileName = document.getElementsByClassName('input__wrapper-desc');
const file = document.getElementById('file');
const form = document.forms.form;
const sendButton = document.getElementById('send');

sendButton.addEventListener('click', (e) => {
  e.preventDefault();

  const xhr = new XMLHttpRequest();
  xhr.addEventListener('readystatechange', () => {
    xhr.upload.onprogress = function(event) {
      progress.value = event.loaded / event.total;
    }
  })

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload')
  const formData = new FormData(form);
  xhr.send(formData);
})
