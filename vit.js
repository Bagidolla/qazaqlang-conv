var cyrillicBig = "ЙЦУКЕНГШЗХФЫВАПРОЛДЖЭЧСМИТЬБЪӘІҢҒҮҰҚӨҺ";
var latinBig = "İCUKENGŞZHFYVAPROLDJEÇSMİT'B'ÄIŊĞÜŪQÖH";
var cyrillicBig2  = "ЩЯЮЁ";
var latinBig2 = new Array("ŞŞ", "İA", "İU","İO");
var cyrillicSmall = "йцукенгшзхфывапролджэчсмитьбъәіңғүұқөһ";
var latinSmall = "icukengşzhfyvaproldjeçsmit'b'äıŋğüūqöh";
var cyrillicSmall2 = "щяюё";
var latinSmall2 = new Array("şş", "ia", "iu", "io");


function RusLatTranliter()
{
  var cyrillicText = document.formCyrToLat.elements["txtBoxCyr"].value;
  var cyrillicLen = cyrillicText.length;
  var ni=0, nj=0;
  var cyrillicBigLen = cyrillicBig.length;  
  var cyrillicBig2Len = cyrillicBig2.length;
  var latinText = "";

  for (ni=0; ni<cyrillicLen; ni++)
  {
    var charIndexed = cyrillicText.charAt(ni);
    var bFind = false;
    
    for (nj=0; nj<cyrillicBigLen; nj++) {
      if (charIndexed == cyrillicSmall.charAt(nj)) {
        latinText += latinSmall.charAt(nj);
        bFind = true;
        break;
      }
    }

    if (bFind) continue;

    for (nj=0; nj<cyrillicBig2Len; nj++) {
      if (charIndexed == cyrillicSmall2.charAt(nj)) {
        latinText += latinSmall2[nj];
        bFind = true;
        break;
      }
    }

    if (bFind) continue;

    for (nj=0; nj<cyrillicBigLen; nj++) {
      if (charIndexed == cyrillicBig.charAt(nj)) {
        latinText += latinBig.charAt(nj);
        bFind = true;
        break;
      }
    }

    if (bFind) continue;

    for (nj=0; nj<cyrillicBig2Len; nj++) {
      if (charIndexed == cyrillicBig2.charAt(nj)) {
        latinText += latinBig2[nj];
        bFind = true;
        break;
      }
    }

    if (bFind) continue;

    latinText += charIndexed; 
  }

  for (var li = 0; li < latinText.length; ++li) {
    if (latinText.charAt(li) === 'i') {
      if (latinText.charAt(li+1) === 'i') {
        latinText = latinText.slice(0, li) + latinText.slice(li+1, latinText.length)
      } 
    }
    if (latinText.charAt(li) === 'İ') {
      if (latinText.charAt(li+1) === 'İ') {
        latinText = latinText.slice(0, li) + latinText.slice(li+1, latinText.length)
      } 
    }
  }

  document.formCyrToLat.elements["txtBoxLat"].value = latinText;
}