'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from "next/navigation";
import { ShortLink } from '@types'

export default function ShortLinksEdit({ shortLinks }: ShortLink) {
  const [shortLinksInput, setShortLinksInput] = useState<ShortLink[]>(shortLinks)
  const router = useRouter()

  const handleDeleteCustomLink = (index: number) => {
    const update = shortLinksInput.filter((link, i) => i != index);
    if(update.length == 0) {
      const emptyCustomLink: ShortLink = {title: '', href: '', image: ''}
      update.push(emptyCustomLink);
    }
    setShortLinksInput(update)
    router.refresh()
  }

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
            <button type='button' onClick={() => handleDeleteCustomLink(index)}>
              Delete
            </button>
          </div>
        )
      })}
    </div>
  )
}
