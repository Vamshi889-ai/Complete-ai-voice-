// Speak only when car is close AND blocking lane
const playerTop = player.y;
const safeDistance = 120; // speak if car is within 120px ahead

if (
    e.x === player.x &&      // Same lane
    e.y + 80 >= playerTop - safeDistance && // Car is close ahead
    e.y < playerTop &&       // Must be in front, not behind
    Date.now() - lastVoiceTime > voiceCooldown
) {
    if (player.x === 50) speak("Car ahead, take right and reduce speed to 40");
    else if (player.x === 200) speak("Car ahead, take left and reduce speed to 40");
    else speak("Car ahead, choose safe side and slow down");

    lastVoiceTime = Date.now(); // prevent spam
}
