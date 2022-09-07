input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    strip.showRainbow(1, 360)
    for (let index = 0; index < 4; index++) {
        music.playMelody("E B C5 A B G A F ", 325)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(800)
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(800)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.pause(800)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.pause(800)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
        basic.pause(800)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.pause(800)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.pause(800)
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(800)
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(800)
        basic.clearScreen()
    }
})
input.onGesture(Gesture.Shake, function () {
    Hand = randint(1, 3)
    if (Hand == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (Hand == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    for (let index = 0; index < 2; index++) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 1000, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
        basic.pause(1000)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1, 1615, 0, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
        basic.pause(1000)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
let Hand = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
strip.setBrightness(100)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(200)
})
