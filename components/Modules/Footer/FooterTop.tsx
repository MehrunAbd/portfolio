import { Chip, Snippet } from "@nextui-org/react";
import React from "react";
import inboxIcon from "@/public/icons/outlined/inbox.svg";
import phoneIcon from "@/public/icons/outlined/phone.svg";
import githubIcon from "@/public/icons/outlined/github.svg";
import twitterIcon from "@/public/icons/outlined/twitter.svg";
import linkedinIcon from "@/public/icons/solid/linkedin.svg";
import stackoverflowIcon from "@/public/icons/solid/stackoverflow.svg";
import Image from "next/image";
import NewsLetterForm from "@/components/Templates/Home/NewsLetter/NewsLetterForm";

export default function FooterTop() {
  return (
    <div className="container py-24">
      <div className="flex flex-col items-center gap-y-2 mb-12">
        <Chip
          variant="flat"
          className="bg-lightGray-200 dark:bg-darkGray-200 text-lightGray-600 dark:text-darkGray-600"
        >
          Get in touch
        </Chip>
        <p className="text-lightGray-600 dark:text-darkGray-600 text-center">
          {`What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.`}
        </p>
      </div>
      <div className="flex flex-col items-center gap-y-4">
        <Snippet
          symbol={<Image src={inboxIcon} alt="" width={20} />}
          variant="flat"
          className="font-interSemiBold text-lg"
        >
          mhunprg8@gmail.com
        </Snippet>
        <Snippet
          symbol={<Image src={phoneIcon} alt="" width={20} />}
          variant="flat"
          className="font-interSemiBold text-lg"
        >
          +989159848476
        </Snippet>
        <NewsLetterForm />
        <p className="text-xs mt-6">You may also find me on these platforms!</p>
        <div className="flex items-center gap-x-4">
          <Image
            src={githubIcon}
            alt=""
            width={20}
            className="cursor-pointer"
            onClick={() =>
              (window.location.href = "https://github.com/mehranAbedi")
            }
          />
          <Image
            src={twitterIcon}
            alt=""
            width={25}
            className="cursor-pointer"
          />
          <Image
            src={stackoverflowIcon}
            alt=""
            width={20}
            className="cursor-pointer"
            onClick={() =>
              (window.location.href =
                "https://stackoverflow.com/users/24356730/mehran-abedi")
            }
          />
          <Image
            src={linkedinIcon}
            alt=""
            width={20}
            className="cursor-pointer"
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/mehran-abedi-80b7ab280/")
            }
          />
        </div>
      </div>
    </div>
  );
}
