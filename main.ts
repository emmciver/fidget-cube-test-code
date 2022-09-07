input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    if (true) {
        strip.showRainbow(1, 360)
        music.playMelody("G B A G C5 B A B ", 215)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showString("sHake to plaY")
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 1000, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    basic.pause(1000)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1, 1615, 0, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(800)
    basic.showIcon(IconNames.Diamond)
    basic.pause(800)
})
input.onPinPressed(TouchPin.P1, function () {
    control.reset()
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
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    music.stopAllSounds()
})
let Hand = 0
let strip: neopixel.Strip = null
basic.showString("Hold me!")
basic.showLeds(`
    . . # . .
    . # # # .
    # . # . #
    . . # . .
    . . # . .
    `)
basic.pause(1000)
basic.clearScreen()
strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
strip.setBrightness(150)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(200)
})
