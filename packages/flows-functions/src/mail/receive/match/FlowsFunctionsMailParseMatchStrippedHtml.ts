// SPDX-FileCopyrightText: © 2022 Tyson Lupul <t@radroots.io>

// @rad-roots/radroots-library-functions:function FlowsFunctionsMailParseMatchStrippedHtml
 
const FlowsFunctionsMailParseMatchStrippedHtml = (
  value: string
): string | undefined => {
  const match0 = value.match(/&stripped-html=([\s\S]*)&timestamp=/g)

  if (!match0 || !match0.length) {
    return undefined
  }

  const match = match0[0].slice(`&stripped-html=`.length, -`&timestamp=`.length)

  return match
}

export default FlowsFunctionsMailParseMatchStrippedHtml
