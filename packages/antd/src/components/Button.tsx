import React from "react"
import { Button as BaseButton, ButtonProps } from "antd"
import { genComponentStyleHook } from "antd/lib/theme/internal"

const useStyle = genComponentStyleHook(
  'Button',
  function (token) {
    return {
      '.ant-btn': {
        textTransform: 'uppercase',
        fontSize: '14px',
        fontWeight: 600,
        '&-lg': {
          fontSize: '16px'
        },
        '&-sm': {
          fontSize: '13px'
        },
      }
    }
  }
)


export default function Button(props: ButtonProps) {
  const [style, className] = useStyle('ant-btn')
  return style(<BaseButton {...props} className={className} />)
}