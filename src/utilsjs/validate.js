const ErrorMessages = {
  required: '入力してください',
  email: '正しいメールアドレスを入力してください',
  url: '正しいURLを入力してください',
  none: '',
}

const Regex = {
  email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  url: /^https?:\/\/[\w/:%#$&?()~.=+-]+/,
}

export const required = value => (value || typeof value === 'number' ? undefined : ErrorMessages.none)

export const email = value => (value && !Regex.email.test(value) ? ErrorMessages.none : undefined)

export const url = value => (value && !Regex.url.test(value) ? ErrorMessages.none : undefined)