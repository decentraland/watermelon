import decamelize from 'decamelize'
import * as colors from '../src/colors'

function variables(obj: Record<string, string | number>, prefix = '') {
  for (const [ name, value ] of Object.entries(obj)) {
    console.log(`  --${prefix}${decamelize(name, { separator: '-' })}: ${value};`)
  }
}

function comment(text: string) {
  console.log(`  /* ${text} */`)
}

console.log(`:root {`)

console.log(``)
comment(`Base colors`)
variables(colors.base)
variables(colors.textOnBase, 'text-on-')

console.log(``)
comment(`Nuetral colors`)
variables(colors.neutral)
variables(colors.textOnNeutral, 'text-on-')

console.log(``)
comment(`State colors`)
variables(colors.state)
variables(colors.textOnState, 'text-on-')

console.log(``)
comment(`Rarity colors`)
variables(colors.rarity)
variables(colors.textOnRarity, 'text-on-')

console.log(``)
comment(`Gradients colors`)
variables(colors.gradient, 'gradient-')
variables(colors.textOnGradient, 'text-on-gradient-')

console.log(``)
comment(`Transparent colors`)
variables(colors.blackTransparent, 'black-')
variables(colors.whiteTransparent, 'white-')
variables(colors.textOnBlackTransparent, 'text-on-black-')
variables(colors.textOnWhiteTransparent, 'text-on-white-')

console.log(``)
comment(`opacity`)
variables(colors.opacity, 'opacity-')

console.log(`}`)