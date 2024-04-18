import { skills } from "@/interfaces/skills.interface";
import Image from "next/image";
import React from "react";

export default function SkillLogo({ title, icon }: skills) {
  return (
    <>
      <Image
        alt={title}
        src={icon}
        width={20}
        height={20}
        style={{
          objectFit: "contain",
          height: "100px",
        }}
      />
      <p className="text-lightGray-600 dark:text-darkGray-600 text-sm mt-2">
        {title}
      </p>
    </>
  );
}
