input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.pause(500)
    }
})
input.onGesture(Gesture.ScreenDown, function () {
    for (let index = 0; index < 3; index++) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
        basic.pause(1000)
    }
})
