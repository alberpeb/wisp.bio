'use client';

import React, { useState } from 'react';
import { ProfileComponentProps } from '@/data/props';
import AvatarEdit from '@/profilePage/AvatarEdit';
import MainLinksEdit from '@/profilePage/MainLinksEdit';
import CustomLinksEdit from '@/profilePage/CustomLinksEdit';

export default function EditProfile({ profile }: ProfileComponentProps) {
  const [name, setName] = useState<string>(profile.name);
  const [badges, setBadges] = useState<string[]>(profile.professional_qualities);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //setName(event.target.value);
  };

  const handleSocialLinkChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    //const updatedLinks = [...socialLinks];
    //updatedLinks[index] = event.target.value;
    //setSocialLinks(updatedLinks);
  };

  const handleAddSocialLink = () => {
    //setSocialLinks([...socialLinks, '']);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <form>
        <AvatarEdit avatar={profile.avatar} name={profile.name} />

        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" defaultValue={name} placeholder="Name" />
        </div>

        <div>
          <label htmlFor="badges">badges</label>
          <input type="text" name="badges" defaultValue={badges} placeholder="Badges" />
        </div>

        <MainLinksEdit mainLinks={profile.mainLinks} />

        <CustomLinksEdit customLinks={profile.customLinks} />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
