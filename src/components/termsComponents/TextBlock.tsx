import React from 'react';
import "./textBlock.scss"


interface TextBlockProps {
    text: string;
    color?: string;
    fontSize?: string;
}


const TextBlock: React.FC<TextBlockProps> = ({ text, color = 'black', fontSize = '16px' }) => {
    const textStyle: React.CSSProperties = {
        color,
        fontSize,
    };

    return <div style={textStyle}>{text}</div>;
};

export default TextBlock;