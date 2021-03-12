var file = e.target.files[0], imageType = /image.*/;

if (!file.type.match(imageType))

{
  alert('The uploaded file is not supported.');
  return;
}

btnGrab.disabled = true;
btnRead.disabled = true;

loadImage(e.target.files[0],

function (img) {
  $("#divBorder").empty();
  $('#divBorder').attr('min-height', '1px');
  document.getElementById('divBorder').appendChild(img);
  btnGrab.disabled = false;
  btnRead.disabled = false;
});

function scanBarcode() {
  var base64 = orgCanvas.toDataURL('image/jpeg', 0.7);
  var data = base64.replace(/^data:image\/(png|jpeg|jpg);base64,/, "");
  var imgData = JSON.stringify({
    Base64Data: data,
    BarcodeType: getBarcodeFormat().toString(),
    MultiBarcodes: document.getElementById('chkMultiBarcodes').checked
  });

  readBarcodeRequest(imgData);

}