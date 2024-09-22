input.onButtonPressed(Button.A, function () {
    cijfer1 = randint(1, 9)
    basic.showNumber(cijfer1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(cijfer1 + cijfer2)
})
input.onButtonPressed(Button.B, function () {
    cijfer2 = randint(1, 9)
    basic.showNumber(cijfer2)
})
let cijfer2 = 0
let cijfer1 = 0
cijfer1 = 1
cijfer2 = 1
