"use client"

import {
  X,
  MapPin,
  Sparkles,
  Gift,
  Star,
  TicketPercent,
  AlarmClock,
  CircleCheck,
  Info,
  CircleAlert,
  CircleX
} from "lucide-react"
import styles from "?/./announcement-bar.module.css"
import {useState, type ElementType, type CSSProperties} from "react"
import {renderMarkdown} from "?/**/*/markdown.{js,tsx}"

type AnnouncementBarProps = {
  bar ? : {
    icon? : 'pin' | 'sparkles' | 'gift' | 'star' | 'discount' | 'alarm' | 'check' | 'info' | 'warning' | 'error'
    message: string
    dismissible? : boolean
    link? : {
      url: string
      label? : string
      newTab? : boolean
    }
    style: {
      backgroundColor? : string
      textColor? : string
      alignment? : "left" | "center"
      placement? : "top" | "bottom" | "floating-bottom" | "floating-bottom-center"
      emphasized? : boolean
    }
  }
}

const iconMap: Record<string, ElementType> = {
  pin: MapPin,
  sparkles: Sparkles,
  gift: Gift,
  star: Star,
  discount: TicketPercent,
  alarm: AlarmClock,
  check: CircleCheck,
  info: Info,
  warning: CircleAlert,
  error: CircleX
};

export function AnnouncementBar(props: AnnouncementBarProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (props.bar == undefined || !isVisible) {
    return null
  }

  const {
    message,
    dismissible = true,
    link,
    icon,
    style: {
      backgroundColor,
      textColor,
      alignment = 'left',
      placement = 'top',
      emphasized = false
    }
  } = props.bar

  const target = link?.newTab === true ? "_blank" : undefined
  const Icon = icon !== undefined ? iconMap[icon] : null

  const content = (
    <div className={[styles.content, dismissible ? styles.dismissible : ""].join(" ")}>
      {Icon && (<Icon className={styles.icon} />)}
      <p className={styles.message}>{renderMarkdown(message)}</p>
      {link?.label && (
        <a href={link.url} target={target} className={styles.action}>
          {link.label}
        </a>
      )}

      {dismissible && (
        <button className={styles['close-button']} onClick={() => setIsVisible(false)}
                aria-label="Close announcement">
          <X size={18}/>
        </button>
      )}
    </div>
  );

  const classes = [
    styles['announcement-bar'],
    styles[placement],
    styles[`align-${alignment}`],
    emphasized ? styles.emphasized : "",
  ].join(" ");

  const style = {
    '--background-color': backgroundColor,
    '--text-color': textColor,
  } as CSSProperties;

  return link?.label === undefined && link?.url !== undefined
    ? (
      <a href={link.url} className={classes} target={target} style={style}>
        {content}
      </a>
    ) : (
      <div className={classes} style={style}>
        {content}
      </div>
    )
}
