'use client'

import React, { useState, useEffect } from 'react';
import { ProfileProps, Social, Link } from '@types'
import AvatarEdit from './AvatarEdit';

export default function EditProfile({ profile }: ProfileProps) {
  const [name, setName] = useState<string>(profile.name);
  const [badges, setBadges] = useState<string[]>(profile.professional_qualities);
  const [socialLinks, setSocialLinks] = useState<Social[]>(profile.socials);
  const [customLinks, setCustomLinks] = useState<Link[]>(profile.links);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //setName(event.target.value);
  }

  const handleSocialLinkChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    //const updatedLinks = [...socialLinks];
    //updatedLinks[index] = event.target.value;
    //setSocialLinks(updatedLinks);
  }

  const handleCustomLinkChange = (index: number, value: string) => {
    const updatedLinks = [...customLinks];
    updatedLinks[index] = value;
    setCustomLinks(updatedLinks);
  }

  const handleAddSocialLink = () => {
    //setSocialLinks([...socialLinks, '']);
  }

  const handleAddCustomLink = () => {
    //setCustomLinks([...customLinks, { text: '', link: '' }]);
  }

  const handleDelete = (array: (Social | Link), index: number) => {
    const updatedLinks = [...array];
    updatedLinks.splice(index, 1);
    setCustomLinks(updatedLinks);
  }

  const handleDeleteCustomLink = (index: number) => {
    //const updatedLinks = [...customLinks];
    //updatedLinks.splice(index, 1);
    //setCustomLinks(updatedLinks);
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle form submission here
  }

  useEffect(() => {
    // Triggered whenever the `links` state changes
    // You can perform any necessary actions here
    // For example, updating the user object or making API requests
    console.log('Links updated:', customLinks);
  }, [customLinks]);

  return (
    <div>
      <h1>Dashboard</h1>
      <form>
        
        <AvatarEdit 
          profileAvatar={profile.avatar}
          profileName={profile.name}
        />

        <div>
          <label htmlFor='name'>Name</label>
          <input 
            type='text' 
            name='name' 
            defaultValue={name} 
            placeholder='Name' 
          />
        </div>

        <div>
          <label htmlFor='badges'>badges</label>
          <input
            type='text'
            name='badges'
            defaultValue={badges}
            placeholder='Badges'
          />
        </div>

        <div>
          <h1>Short Links</h1>
          {socialLinks.map((social, index) => {
            return (
              <div key={"shortLinkDiv" + index}>
                <label htmlFor={'shortLink' + index}>Link</label>
                <input
                  type='text'
                  name={'shortLink' + index}
                  defaultValue={social.href}
                  placeholder='ShortLink'
                />
              </div>
            )
          })}
        </div>

        <div>
          <h1>Custom Links</h1>
          {customLinks.map((link, index) => {
            return (
              <div key={"linkTitleDiv" + index}>
                <label htmlFor={'linkTitle' + index}>Link</label>
                <input
                  type='text'
                  name={'linkTitle' + index}
                  value={link.title}
                  onChange={(e) => handleCustomLinkChange(index, e.target.value)}
                  placeholder='ShortLink'
                />
                <input
                  type='text'
                  name={'linkHref' + index}
                  defaultValue={link.href}
                  placeholder='LinkHref'
                />
                <button type='button' onClick={() => handleDelete(customLinks, index)}>
                  Delete
                </button>
              </div>
            )
          })}
          <button type="button" onClick={handleAddCustomLink}>
            Add More
          </button>
        </div>
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}
