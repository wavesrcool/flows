// SPDX-FileCopyrightText: © 2022 Tyson Lupul <t@radroots.io>

// @rad-roots/radroots-library-functions:function FlowsFunctionsMailParseMatchTimeEpoch
 
const FlowsFunctionsMailParseMatchTimeEpoch = (
  value: string
): string | undefined => {
  const match0 = value.match(/&timestamp=([\s\S]*)&token=/g)

  if (!match0 || !match0.length) {
    return undefined
  }

  const match = match0[0].slice(`&timestamp=`.length, -`&token=`.length).trim()

  return match
}

export default FlowsFunctionsMailParseMatchTimeEpoch
