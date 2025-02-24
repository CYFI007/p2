import MusicTools from "./MusicTools";

const midiInput = document.getElementById("midiInput");
const freqInput = document.getElementById("freqInput");
const dbfsInput = document.getElementById("dbfsInput");
const linearInput = document.getElementById("linearInput");




document.getElementById("midiToFreqBtn").addEventListener("click", () =>  {
    const midiPitch = parseFloat(midiInput.value);
    document.getElementById("freqResult").textContent = isNaN(midiPitch) ? "Invalid Input" : MusicTools.midiPitchToFrequency(midiPitch).toFixed(2);
});


document.getElementById("freqToMidiBtn").addEventListener("click", () =>  {
    const freq = parseFloat(freqInput.value);
    document.getElementById("midiResult").textContent = isNaN(freq) || freq <= 0 ? "Invalid Input" : MusicTools.frequencyToMidiPitch(freq);
});

document.getElementById("dbfsToLinearBtn").addEventListener("click", () =>  {
    const dbfs = parseFloat(dbfsInput.value);
    document.getElementById("linearResult").textContent = isNaN(dbfs) ?  "Invalid Input" : MusicTools.dbfsToLinearAmplitude(dbfs).toFixed(5);
});

document.getElementById("linearToDbfsBtn").addEventListener("click", () =>  {
    const linear = parseFloat(linearInput.value);
    document.getElementById("dbfsResult").textContent = isNaN(linear) || linear <= 0 ? "Invalid Input" : MusicTools.linearAmplitudeTodBFS(linear).toFixed(2);
});