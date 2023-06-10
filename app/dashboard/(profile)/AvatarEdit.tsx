'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { AvatarProps } from '@types';

export default function AvatarEdit({ profileAvatar, profileName }: AvatarProps) {
    const [avatar, setAvatar] = useState<string>(profileAvatar);

    const handleAvatarChanged = (value: string) => {
        setAvatar(value);
    }

    return(
        <div>
          <img
            className='rounded-full'
            alt={profileName}
            src={avatar}
          />
          <label htmlFor='avatar'>Avatar</label>
          <input 
            type='text' 
            name='avatar' 
            value={avatar}
            onChange={(e) => handleAvatarChanged(e.target.value)} 
            placeholder='Avatar' 
          />
        </div>
    );
}