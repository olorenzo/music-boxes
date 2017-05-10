

const notes  = {
c: document.querySelector('#c_audio'),
d: document.querySelector('#d_audio'),
e: document.querySelector('#e_audio'),
f: document.querySelector('#f_audio'),
g: document.querySelector('#g_audio'),
a: document.querySelector('#a_audio'),
b: document.querySelector('#b_audio')
}
const keys= document.querySelectorAll('.key')

for(let i = 0; i < keys.length; i++) {
  keys[i].onclick = function(event) {
    notes[event.target.id].currentTime = 0
    notes[event.target.id].play()
  }

}
const keyCode = {
  '97': 'c',
    '115':'d',
    '100':'e',
    '102':'f',
    '103':'g',
    '104':'a',
    '106':'b'
}

document.addEventListener('keypress',function(event) {
  //if(eventt.keyCode === 97) {
  //notes['c'].curentTime = 0
  // notes['c'].play()
//}
  console.log(event.keyCode);
  if (event.keyCode === 97) {
    notes['c'].currentTime = 0
    notes['c'].play()

  }
  if (event.keyCode === 115) {
    notes['d'].currentTime = 0
    notes['d'].play()

  }
  if (event.keyCode === 100) {
    notes['e'].currentTime = 0
    notes['e'].play()

  }
  if (event.keyCode === 102) {
    notes['f'].currentTime = 0
    notes['f'].play()

  }
  if (event.keyCode === 103) {
    notes['g'].currentTime = 0
    notes['g'].play()

  }
  if (event.keyCode === 104) {
    notes['a'].currentTime = 0
    notes['a'].play()

  }
  if (event.keyCode === 106) {
    notes['b'].currentTime = 0
    notes['b'].play()

  }
})
