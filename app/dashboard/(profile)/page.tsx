'use client'

import React, { useState, useEffect } from 'react'
import { Profile } from '@/models/models'
import { ProfileComponentProps } from '@/models/props'
import AvatarEdit from './AvatarEdit'
import ShortLinksEdit from './ShortLinksEdit'
import CustomLinksEdit from './CustomLinksEdit'

export default function EditProfile({ profile }: ProfileComponentProps) {
  const [name, setName] = useState<string>(profile.name)
  const [badges, setBadges] = useState<string[]>(profile.professional_qualities)

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //setName(event.target.value);
  }

  const handleSocialLinkChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    //const updatedLinks = [...socialLinks];
    //updatedLinks[index] = event.target.value;
    //setSocialLinks(updatedLinks);
  }

  const handleAddSocialLink = () => {
    //setSocialLinks([...socialLinks, '']);
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle form submission here
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <form>
        <AvatarEdit avatar={profile.avatar} name={profile.name} />

        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' defaultValue={name} placeholder='Name' />
        </div>

        <div>
          <label htmlFor='badges'>badges</label>
          <input type='text' name='badges' defaultValue={badges} placeholder='Badges' />
        </div>

        <ShortLinksEdit shortLinks={profile.shortLinks} />

        <CustomLinksEdit customLinks={profile.customLinks} />

        <button type='submit'>Save</button>
      </form>
    </div>
  )
}
