export const makeClassName = (
  setting: string,
  _className?: string,
  numberOfLines?: number
) => [setting, _className].filter(Boolean).join(' ')
