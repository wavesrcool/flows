// SPDX-FileCopyrightText: © 2022 Tyson Lupul <t@radroots.io>

// @rad-roots/radroots-library-functions:function FlowsFunctionsMailParseMatchStrippedText
 
const FlowsFunctionsMailParseMatchStrippedText = (
  value: string
): string | undefined => {
  const match0 = value.match(/&stripped-text=([\s\S]*)&stripped-html=/g)

  if (!match0 || !match0.length) {
    return undefined
  }

  const match = match0[0].slice(`&stripped-text=`.length, -`&stripped-html=`.length)

  return match
}

export default FlowsFunctionsMailParseMatchStrippedText
