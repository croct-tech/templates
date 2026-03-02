import { useStore } from '@nanostores/react';
import { announcementBar } from '../stores/banner';

export function AnnouncementBar() {
    const { content } = useStore(announcementBar);

    const bar = (
        <div
            className="announcement-bar"
            style={{
                backgroundColor: content.style.backgroundColor,
                color: content.style.textColor,
            }}
        >
            {content.text}
        </div>
    );

    if (content.link) {
        return (
            <a href={content.link} className="announcement-bar-link">
                {bar}
            </a>
        );
    }

    return bar;
}
