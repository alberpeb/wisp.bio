import { MainLinkModel, MainLinksProps } from "@/prisma/userService";
import { Default, GitHubIcon, TwitterIcon } from "../elements/socialIcons";

export default function MainLinks({mainLinks}: MainLinksProps) {
    return(
        <section className="flex flex-row text-gray-700">
            {mainLinks.map((social: MainLinkModel, index) => (
            <div key={index} className={'my-4 ' + (index > 0 ? 'ml-4' : '')}>
                <a
                aria-label={`${social.url} link`}
                key={social.url}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                >
                {social.url.includes('twitter') ? (
                    <TwitterIcon />
                ) : social.url.includes('github') ? (
                    <GitHubIcon />
                ) : (
                    <Default />
                )}
                </a>
            </div>
            ))}
        </section>
    );
}