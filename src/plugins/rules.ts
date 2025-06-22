import { toNumber } from 'lodash'

export const rules = {
  required: (v: string | number) =>
    (!!v && (typeof v !== 'string' || !!v.trim())) || v === 0 || 'This field is required',
  maxLength: (length: number) => (v: string) =>
    (v && v.length <= length) || !v || `Maximum ${length} characters length`,
  minLength: (length: number) => (v: string) => (v && v.length >= length) || !v || `Minium ${length} characters length`,
  max: (number: number) => (v: number) => !number || v <= number || `Must be lower than or equal to ${number}`,
  min: (number: number) => (v: number) => !number || v >= number || `Must be greater than or equal to ${number}`,
  natural: (v: any) => (v >= 0 && Math.floor(v) === +v) || 'Must be natural number',
  email: (v: string) =>
    (v &&
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        v.trim(),
      )) ||
    !v ||
    'Invalid email address',

  url: (v: string) =>
    new RegExp(/^(https?:\/\/)(www\.)?(?!www\.)(?!.*\/\/)([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+[a-zA-Z]{2,}(\/.*)?$/).test(
      v,
    ) ||
    !v ||
    'Invalid URL',
  socialUrl: (v: string, social: string) => {
    const socialRegex = new RegExp(`^(https?://)(www\\.)?(${social})\\.com(/.*)?$`)
    return !v || socialRegex.test(v) || `Invalid ${social} URL`
  },
  alphabet: (v: string) =>
    !v ||
    /^[a-z ẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]+$/gi.test(v.trim()) ||
    'Contain a-z only',
  normal: (v: string) =>
    !v ||
    /^[a-z0-9 ._ẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]+$/gi.test(v.trim()) ||
    'Contains invalid character',
  equal: (target: string, msg: string) => (v: string) => !v || target === v || msg || `Must be equal to ${target}`,
  phone: (v: string) =>
    !v || (v.length <= 10 && /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/gi.test(v)) || 'Invalid phone number',
  nospace: (v: string) => !v || /^\S*$/.test(v) || 'Space is not allowed',
  notEmpty: (v: string) => !Array.isArray(v) || !!v.length || 'Required',
  dateRange: (v: string) => v.split(' ~ ').length === 2 || 'Invalid date range',
  maxFileSize: (maxSize: number) => (file: any) =>
    !file || file.size < maxSize * 1024 * 1024 || `Max size is ${maxSize}MB`,
  password: (v: string) =>
    !v || /^[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+$/gi.test(v.trim()) || 'Invalid password',
  id: (v: string) => !v || /^[a-zA-Z0-9]+$/gi.test(v.trim()) || 'Invalid ID',
  time: (v: string) =>
    !v ||
    /^((\d{1,2})h)?([0-5]?\d{1}m)?([0-5]?\d{1}s)?$/.test(v) ||
    'Input must be in the format of HhMmSs, where H is between 0 and 23, M and S is between 0 and 59.',

  positiveInterger: (input: number) => {
    if (!toNumber(input) || toNumber(input) <= 0) return 'This is required field'
    return /^\d+$/gi.test(`${input}`.trim()) || 'Must be a positive integer'
  },
}

export const appRules = {
  name: [rules.required, rules.maxLength(250)],
}
