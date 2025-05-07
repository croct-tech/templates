"use client"

import {X} from "lucide-react"
import styles from "?/./announcement-bar.module.css"
import {useState} from "react"
import {renderMarkdown} from "?/**/*/markdown.{js,tsx}"

interface AnnouncementBarProps {
  bar?: {
    message: string
    dismissible?: boolean
    link?: {
      url: string
      label?: string
      newTab?: boolean
    }
    style: {
      alignment?: "left" | "center"
      placement?: "top" | "bottom" | "floating-bottom" | "floating-bottom-center"
      emphasized?: boolean
    }
  }
}

export function AnnouncementBar(props: AnnouncementBarProps) {
  if (props.bar == undefined) {
    return null
  }

  const {
    message,
    dismissible = true,
    link,
    style: {
      alignment = 'left',
      placement = 'top',
      emphasized = false
    }
  } = props.bar
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) {
    return null
  }

  const target = link?.newTab === true ? "_blank" : undefined

  const classes = [
    styles['announcement-bar'],
    styles[placement],
    styles[`align-${alignment}`],
    emphasized ? styles.emphasized : "",
  ].join(" ");

  const content = (
    <>
      <div className={[styles.content, dismissible ? styles.dismissible : ""].join(" ")}>
        <p className={styles.message}>{renderMarkdown(message)}</p>
        {link?.label && (
          <a href={link.url} target={target} className={styles.action}>
            {link.label}
          </a>
        )}
      </div>
      {dismissible && (
        <button className={styles['close-button']} onClick={() => setIsVisible(false)} aria-label="Close announcement">
          <X size={18}/>
        </button>
      )}
    </>
  );

  return link?.label === undefined && link?.url !== undefined
    ? (
      <a href={link.url} className={classes} target={target}>
        {content}
      </a>
    ) : (
      <div className={classes}>
        {content}
      </div>
    )
}
