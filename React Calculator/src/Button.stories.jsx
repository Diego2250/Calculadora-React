import Button from './Button'

export default {
  title: 'Button',
  component: Button,
  args: {
    label: 'Click me',
    className: 'default',
    onClick: '',
  },
}

export const AsDefault = {
  args: {},
}

export const AsPrimary = {
  args: {
    className: 'botonCeleste',
  },
}

export const AsSecondary = {
  args: {
    className: 'botonMorado',
  },
}

export const AsTertiary = {
  args: {
    className: 'botonCero',
  },
}

export const Clickable = {
  args: {
    onClick: () => alert('Clicked!'), // eslint-disable-line no-alert
  },
}
