const submit = document.getElementById('formReport');

submit.addEventListener('submit', function(e) {
  e.preventDefault();
  const title = document.getElementById('judul').value;
  const location = document.getElementById('lokasi').value;
  const date = document.getElementById('tanggal').value;
  const report = document.getElementById('isi').value;

  postData({
    url: 'https://6451d89fbce0b0a0f736af1a.mockapi.io/report', 
    data: 
      {
        title, location, date, report
      }
  }).then (response =>{
    Swal.fire({
      title: 'Yeayy, Laporan kamu sudah terkirim!',
      text: 'Tunggu informasi selanjutnya dari kami',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(function(){
      window.location.href = "../index.html"
    })
  }).catch((error) => {
    console.error('Error:', error.message);
  });
});

async function postData({ url = '', data = {}}) {
  await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
  }).then(async(result) => {
      if (result.status !== 200) {
          throw await result.json()
      } else {
          console.log('Success:', result);
      }
  }).catch((error) => {
      console.error('Error:', error.message);
  });
}