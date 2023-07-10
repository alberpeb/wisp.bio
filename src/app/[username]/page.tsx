import Image from 'next/image';
import * as dataJson from '../../data.json';
import { redirect } from 'next/navigation';
import { GitHubIcon, TwitterIcon, Default } from '@/components/elements/socialIcons';
import { Profile, ShortLink } from '@/data/models';
import { LinkCardComponentProps } from '@/data/props';

export const dynamic = 'force-dynamic',
  runtime = 'edge';

function LinkCard({ key, link }: LinkCardComponentProps) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="mb-3 flex w-full max-w-3xl items-center rounded-md bg-gray-100 p-1 transition-all hover:scale-105"
    >
      <div className="flex w-full text-center">
        <div className="h-10 w-10">
          {link.image && (
            <div className="m-auto">
              <svg
                width="40"
                height="40"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_9914_10)">
                  <path
                    d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </div>
          )}
        </div>
        <h2 className="-ml-10 flex w-full items-center justify-center font-semibold text-gray-700">
          {link.title}
        </h2>
      </div>
    </a>
  );
}

export default async function UserProfile() {
  const data: Profile = dataJson;

  if (!dataJson) {
    redirect('https://linktr.ee/');
  }

  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center px-8 pt-16">
      <Image
        priority
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="mt-1 text-2xl font-bold text-gray-700">{data.name}</h1>
      <h1 className="mb-2 mt-2 text-base font-bold text-gray-400">@{data.username}</h1>
      <h1 className="mb-4 mt-2 flex">
        {data.professional_qualities.map((quality, i) => (
          <div key={i} className="mx-1 rounded-full bg-gray-300 px-2 text-gray-100">
            {quality}
          </div>
        ))}
      </h1>

      <div className="flex flex-row text-gray-700">
        {data.shortLinks.map((social: ShortLink, index) => (
          <div key={index} className={'my-4 ' + (index > 0 ? 'ml-4' : '')}>
            <a
              aria-label={`${social.href} link`}
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.href.includes('twitter') ? (
                <TwitterIcon />
              ) : social.href.includes('github') ? (
                <GitHubIcon />
              ) : (
                <Default />
              )}
            </a>
          </div>
        ))}
      </div>

      {data.customLinks.map((link, index) => (
        <LinkCard key={index} link={link} />
      ))}
    </div>
  );
}
