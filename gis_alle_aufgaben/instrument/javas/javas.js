audioCtx = new(window.AudioContext || window.webkitAudioContext)();

const c_4 = 261;
const cis = 277;
const d_4 = 294;
const dis = 311;
const e_4 = 330;
const f_4 = 349;
const fis = 369;
const g_4 = 392;
const gis = 415;
const a_4 = 440;
const ais = 466;
const b_4 = 494;



show();
function loop() {
  
}

function show() {
  
  switch (document.getElementById("tIn").value * 1) {
    case 0: type = 'sine'; break;
    case 1: type = 'square'; break;
    case 2: type = 'sawtooth'; break;
    case 3: type = 'triangle'; break;
  }
  document.getElementById("tOut").innerHTML = type;

  volume = document.getElementById("vIn").value / 1000;
  document.getElementById("vOut").innerHTML = volume;

  duration = document.getElementById("dIn").value;
  document.getElementById("dOut").innerHTML = duration + ' ms';
}
function play_c() {
  
  var oscillator = audioCtx.createOscillator();
  var gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  gainNode.gain.value = volume;
  oscillator.frequency.value = c_4;
  oscillator.type = type;

  oscillator.start();
  setTimeout(
    function() {
      oscillator.stop();
    },
    duration
  );
  
}
function play_cis() {
  
  var oscillator = audioCtx.createOscillator();
  var gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  gainNode.gain.value = volume;
  oscillator.frequency.value = cis;
  oscillator.type = type;

  oscillator.start();
  setTimeout(
    function() {
      oscillator.stop();
    },
    duration
  );
  
}
function play_d() {
  var oscillator = audioCtx.createOscillator();
  var gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  gainNode.gain.value = volume;
  oscillator.frequency.value = d_4;
  oscillator.type = type;

  oscillator.start();
  setTimeout(
    function() {
      oscillator.stop();
    },
    duration
  );
  
}
function play_dis() {
  var oscillator = audioCtx.createOscillator();
  var gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  gainNode.gain.value = volume;
  oscillator.frequency.value = dis;
  oscillator.type = type;

  oscillator.start();
  setTimeout(
    function() {
      oscillator.stop();
    },
    duration
  );
  
}
function play_e() {
  var oscillator = audioCtx.createOscillator();
  var gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  gainNode.gain.value = volume;
  oscillator.frequency.value = e_4;
  oscillator.type =type;

  oscillator.start();
  setTimeout(
    function() {
      oscillator.stop();
    },
    duration
  );
  
}
function play_f() {
  var oscillator = audioCtx.createOscillator();
  var gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  gainNode.gain.value = volume;
  oscillator.frequency.value = f_4;
  oscillator.type = type;

  oscillator.start();
  setTimeout(
    function() {
      oscillator.stop();
    },
    duration
  );
  
}function play_fis() {
  var oscillator = audioCtx.createOscillator();
  var gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  gainNode.gain.value = volume;
  oscillator.frequency.value = fis;
  oscillator.type = type;

  oscillator.start();
  setTimeout(
    function() {
      oscillator.stop();
    },
    duration
  );
  
}
function play_g() {
  var oscillator = audioCtx.createOscillator();
  var gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  gainNode.gain.value = volume;
  oscillator.frequency.value = g_4;
  oscillator.type = type;

  oscillator.start();
  setTimeout(
    function() {
      oscillator.stop();
    },
    duration
  );
  
}
function play_gis() {
  var oscillator = audioCtx.createOscillator();
  var gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  gainNode.gain.value = volume;
  oscillator.frequency.value = gis;
  oscillator.type = type;

  oscillator.start();
  setTimeout(
    function() {
      oscillator.stop();
    },
    duration
  );
  
}


function play_a() {
  var oscillator = audioCtx.createOscillator();
  var gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  gainNode.gain.value = volume;
  oscillator.frequency.value = a_4;
  oscillator.type = type;

  oscillator.start();
  setTimeout(
    function() {
      oscillator.stop();
    },
    duration
  );
  
}
function play_ais() {
  var oscillator = audioCtx.createOscillator();
  var gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  gainNode.gain.value = volume;
  oscillator.frequency.value = ais;
  oscillator.type = type;

  oscillator.start();
  setTimeout(
    function() {
      oscillator.stop();
    },
    duration
  );
  
}
function play_b() {
  var oscillator = audioCtx.createOscillator();
  var gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  gainNode.gain.value = volume;
  oscillator.frequency.value = b_4;
  oscillator.type = type;

  oscillator.start();
  setTimeout(
    function() {
      oscillator.stop();
    },
    duration
  );
  
}
function play_bis() {
  var oscillator = audioCtx.createOscillator();
  var gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  gainNode.gain.value = volume;
  oscillator.frequency.value = bis;
  oscillator.type = type;

  oscillator.start();
  setTimeout(
    function() {
      oscillator.stop();
    },
    duration
  );
  
}

// generates tone with variable frequency
function beep() {
  var oscillator = audioCtx.createOscillator();
  var gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  gainNode.gain.value = volume;
  oscillator.frequency.value = frequency;
  oscillator.type = type;

  oscillator.start();

  setTimeout(
    function() {
      oscillator.stop();
    },
    duration
  );
};
/*var osc = context.createOscillator();
var vol = context.createGain();

vol.gain.value = 0.1; // from 0 to 1, 1 full volume, 0 is muted
osc.connect(vol); // connect osc to vol
vol.connect(context.destination); // connect vol to context destination
osc.start(context.currentTime); // start it three seconds from noww*/