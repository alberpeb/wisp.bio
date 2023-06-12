'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from "next/navigation";
import { CustomLink } from '@/models/models'
import { CustomLinkEditProps } from '@/models/props'


export default function CustomLinksEdit({ customLinks }: CustomLinkEditProps) {
  const [customLinksInputs, setCustomLinksInputs] = useState<CustomLink[]>(customLinks)
  const router = useRouter()

  const handleDeleteCustomLink = (index: number) => {
    const update = customLinksInputs.filter((link, i) => i != index);
    if(update.length == 0) {
      const emptyCustomLink: CustomLink = {title: '', href: '', image: ''}
      update.push(emptyCustomLink);
    }
    setCustomLinksInputs(update)
    router.refresh()
  }

  const handleAddCustomLink = () => {
    setCustomLinksInputs([...customLinksInputs, { title: '', href: '' }])
  }

  return (
    <div>
      <h1>Custom Links</h1>
      {customLinksInputs.map((customLink, index) => {
        return (
          <div key={'linkTitleDiv' + index}>
            <label htmlFor={'linkTitle' + index}>Link n° {index + 1}: </label>
            <input
              type='text'
              name={'linkTitle' + index}
              defaultValue={customLink.title}
              placeholder='ShortLink'
            />
            <input
              type='text'
              name={'linkHref' + index}
              defaultValue={customLink.href}
              placeholder='LinkHref'
            />
            <button type='button' onClick={() => handleDeleteCustomLink(index)}>
              Delete
            </button>
          </div>
        )
      })}
      <button type='button' onClick={handleAddCustomLink}>
        Add More
      </button>
    </div>
  )
}
