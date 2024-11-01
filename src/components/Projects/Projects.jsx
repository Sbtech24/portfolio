import React from 'react'
import styles from "./projects.module.css"
import Link from 'next/link'
import github from "/public/github.svg"
import external from "/public/external-link.svg"

import Image from 'next/image'
import { ExternalLinkIcon, GitHubLogoIcon } from '@radix-ui/react-icons'

const Projects = ({name,gitlink,desc,stack,link}) => {
  return (
    <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.projectHeader}>
            <h3 className='project-name'>{name}</h3>
            <Link href={gitlink}>
              <GitHubLogoIcon className={styles.git}/>
              {/* <Image src={github} className={styles.git} /> */}
            </Link>
          </div>
          <p className={styles.desc}>{desc}</p>
          <p className={styles.desc}>Stacks:{stack}</p>
          <div className={styles.footer}>
            <Link href={link}>
            <ExternalLinkIcon className={styles.git}/>
            {/* <Image src={external} className={styles.git}/> */}
            </Link>
          </div>
        </div>
        
    </div>
  )
}


export default Projects