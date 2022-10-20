// SPDX-FileCopyrightText: © 2022 Tyson Lupul <t@radroots.io>

// @rad-roots/radroots-library-functions:function FlowsFunctionsMailParseMatchSubject
 
const FlowsFunctionsMailParseMatchSubject = (
  value: string
): string | undefined => {
  const match0 = value.match(/&subject=.*&from=/g)

  if (!match0 || !match0.length) {
    return undefined
  }

  const match = match0[0].slice(`&subject=`.length, -`&from=`.length)

  return match
}

export default FlowsFunctionsMailParseMatchSubject
