'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Avatar } from '@/data/models';
import { AvatarEditProps } from '@/data/props';

export default function AvatarEdit({ avatar, name }: AvatarEditProps) {
  const [avatarURL, setAvatarURL] = useState<string>(avatar);

  const handleAvatarChanged = (value: string) => {
    setAvatarURL(value);
  };

  return (
    <div>
      <img className="rounded-full" alt={name} src={avatarURL} />
      <label htmlFor="avatar">Avatar</label>
      <input
        type="text"
        name="avatar"
        value={avatarURL}
        onChange={(e) => handleAvatarChanged(e.target.value)}
        placeholder="Avatar"
      />
    </div>
  );
}
