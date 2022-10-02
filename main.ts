radio.onReceivedNumber(function (receivedNumber) {
    let receiveNumber = 0
    if (receiveNumber == 4) {
        basic.showIcon(IconNames.Sad)
    }
    if (receiveNumber == 5) {
        basic.showIcon(IconNames.Angry)
    }
    if (receiveNumber == 6) {
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
radio.setGroup(1)
