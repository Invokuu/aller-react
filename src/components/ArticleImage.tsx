import React from 'react';
import './scss/ArticleImage.scss';

// title is passed here, so it can be used for the alt attribute
// width is used for calculations for image sizes
interface ArticleImageProps {
    src: string;
    title: string;
    width: number;
}

// ArticleImage component holds a responsive img within a figure
export function ArticleImage(props: ArticleImageProps): JSX.Element {
    // 600, 992 and 1920 is breakpoints I've used throughout the application
    const smallImageWidth = (600 / 12) * props.width,
          mediumImageWidth = (992 / 12) * props.width,
          largeImageWidth = (1920 / 12) * props.width,
          heightRatio = 0.6;

    const smallImageParams = new URLSearchParams({
        width: smallImageWidth.toString(),
        height: (smallImageWidth * heightRatio).toString()
    });

    const mediumImageParams = new URLSearchParams({
        width: mediumImageWidth.toString(),
        height: (mediumImageWidth * heightRatio).toString()
    });

    const largeImageParams = new URLSearchParams({
        width: largeImageWidth.toString(),
        height: (largeImageWidth * heightRatio).toString()
    });

    // I learned about picture tag and wanted to use it,
    // but I'm no expert at it and would like to learn more.
    return (
        <figure className="article-image">
            <picture>
                <source media="(min-width: 601px)" itemProp="image" srcSet={`${props.src}&${mediumImageParams.toString()}`} />
                <source media="(min-width: 993px)" itemProp="image" srcSet={`${props.src}&${largeImageParams.toString()}`} />
                <img src={`${props.src}&${smallImageParams.toString()}`} alt={props.title} />
            </picture>
        </figure>
    );
}