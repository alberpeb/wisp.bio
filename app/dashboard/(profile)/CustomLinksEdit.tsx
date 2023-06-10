'use client'

import React, { useState, useEffect } from 'react'
import { CustomLink } from '@types'

export default function CustomLinksEdit({ customLinks }: CustomLink) {
  const [customLinksInputs, setCustomLinksInputs] = useState<CustomLink[]>(customLinks)

  const handleCustomLinkChange = (index: number, value: string) => {
    //const updatedLinks = [...customLinks];
    customLinksInputs[index] = value
    setCustomLinksInputs(customLinksInputs)
  }

  const handleDeleteCustomLink = (array: CustomLink, index: number) => {
    //const updatedLinks = [...array];
    customLinksInputs.splice(index, 1)
    setCustomLinksInputs(customLinksInputs)
  }

  const handleAddCustomLink = () => {
    setCustomLinksInputs([...customLinksInputs, { title: '', href: '' }])
  }

  useEffect(() => {
    // Triggered whenever the `links` state changes
    // You can perform any necessary actions here
    // For example, updating the user object or making API requests
    console.log('Links updated:', customLinksInputs)
  }, [customLinksInputs])

  return (
    <div>
      <h1>Custom Links</h1>
      {customLinksInputs.map((customLink, index) => {
        return (
          <div key={'linkTitleDiv' + index}>
            <label htmlFor={'linkTitle' + index}>Link</label>
            <input
              type='text'
              name={'linkTitle' + index}
              value={customLink.title}
              onChange={(e) => handleCustomLinkChange(index, e.target.value)}
              placeholder='ShortLink'
            />
            <input
              type='text'
              name={'linkHref' + index}
              defaultValue={customLink.href}
              placeholder='LinkHref'
            />
            <button type='button' onClick={() => handleDeleteCustomLink(customLinks, index)}>
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
