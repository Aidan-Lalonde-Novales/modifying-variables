// Created By: Aidan L-N
// Created Sept 28 2020
// 
// Sets hungyness to zero on start.
let hungryness = 0
// Created By: Aidan L-N
// Created Sept 28 2020
// 
// Increases hungyness by 1 on A press.
// Sets hungyness to zero on B press.
// 
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        hungryness = hungryness + 1
        basic.showNumber(hungryness)
    } else if (input.buttonIsPressed(Button.B)) {
        hungryness = 0
        basic.showNumber(hungryness)
    }
})
