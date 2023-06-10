'use client'

import React, { useState, useEffect } from 'react'
import { ShortLink } from '@types'

export default function ShortLinksEdit({ shortLinks }: ShortLink) {
  const [shortLinksInput, setShortLinksInput] = useState<ShortLink[]>(shortLinks)

  return (
    <div>
      <h1>Short Links</h1>
      {shortLinksInput.map((shortLink, index) => {
        return (
          <div key={'shortLinkDiv' + index}>
            <label htmlFor={'shortLink' + index}>Link</label>
            <input
              type='text'
              name={'shortLink' + index}
              defaultValue={shortLink.href}
              placeholder='ShortLink'
            />
          </div>
        )
      })}
    </div>
  )
}
